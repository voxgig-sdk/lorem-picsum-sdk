# LoremPicsum SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'LoremPicsum_types'


class LoremPicsumSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = LoremPicsumUtility.new
    @_utility = utility

    config = LoremPicsumConfig.make_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features from config.
    feature_opts = LoremPicsumHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      items = VoxgigStruct.items(feature_opts)
      if items
        items.each do |item|
          fname = item[0]
          fopts = LoremPicsumHelpers.to_map(item[1])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, LoremPicsumFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    LoremPicsumUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = LoremPicsumHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = LoremPicsumHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = LoremPicsumHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = LoremPicsumSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    utility.make_fetch_def.call(ctx)
  end

  def direct(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue LoremPicsumError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = LoremPicsumHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = LoremPicsumHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end


  # Idiomatic facade: client.get_random_image.list / client.get_random_image.load({ "id" => ... })
  def get_random_image
    require_relative 'entity/get_random_image_entity'
    @get_random_image ||= GetRandomImageEntity.new(self, nil)
  end

  # Deprecated: use client.get_random_image instead.
  def GetRandomImage(data = nil)
    require_relative 'entity/get_random_image_entity'
    GetRandomImageEntity.new(self, data)
  end


  # Idiomatic facade: client.get_random_square_image.list / client.get_random_square_image.load({ "id" => ... })
  def get_random_square_image
    require_relative 'entity/get_random_square_image_entity'
    @get_random_square_image ||= GetRandomSquareImageEntity.new(self, nil)
  end

  # Deprecated: use client.get_random_square_image instead.
  def GetRandomSquareImage(data = nil)
    require_relative 'entity/get_random_square_image_entity'
    GetRandomSquareImageEntity.new(self, data)
  end


  # Idiomatic facade: client.height.list / client.height.load({ "id" => ... })
  def height
    require_relative 'entity/height_entity'
    @height ||= HeightEntity.new(self, nil)
  end

  # Deprecated: use client.height instead.
  def Height(data = nil)
    require_relative 'entity/height_entity'
    HeightEntity.new(self, data)
  end


  # Idiomatic facade: client.heightwebp.list / client.heightwebp.load({ "id" => ... })
  def heightwebp
    require_relative 'entity/heightwebp_entity'
    @heightwebp ||= HeightwebpEntity.new(self, nil)
  end

  # Deprecated: use client.heightwebp instead.
  def Heightwebp(data = nil)
    require_relative 'entity/heightwebp_entity'
    HeightwebpEntity.new(self, data)
  end


  # Idiomatic facade: client.id_info.list / client.id_info.load({ "id" => ... })
  def id_info
    require_relative 'entity/id_info_entity'
    @id_info ||= IdInfoEntity.new(self, nil)
  end

  # Deprecated: use client.id_info instead.
  def IdInfo(data = nil)
    require_relative 'entity/id_info_entity'
    IdInfoEntity.new(self, data)
  end


  # Idiomatic facade: client.idn.list / client.idn.load({ "id" => ... })
  def idn
    require_relative 'entity/idn_entity'
    @idn ||= IdnEntity.new(self, nil)
  end

  # Deprecated: use client.idn instead.
  def Idn(data = nil)
    require_relative 'entity/idn_entity'
    IdnEntity.new(self, data)
  end


  # Idiomatic facade: client.list.list / client.list.load({ "id" => ... })
  def list
    require_relative 'entity/list_entity'
    @list ||= ListEntity.new(self, nil)
  end

  # Deprecated: use client.list instead.
  def List(data = nil)
    require_relative 'entity/list_entity'
    ListEntity.new(self, data)
  end


  # Idiomatic facade: client.seed.list / client.seed.load({ "id" => ... })
  def seed
    require_relative 'entity/seed_entity'
    @seed ||= SeedEntity.new(self, nil)
  end

  # Deprecated: use client.seed instead.
  def Seed(data = nil)
    require_relative 'entity/seed_entity'
    SeedEntity.new(self, data)
  end


  # Idiomatic facade: client.seed_info.list / client.seed_info.load({ "id" => ... })
  def seed_info
    require_relative 'entity/seed_info_entity'
    @seed_info ||= SeedInfoEntity.new(self, nil)
  end

  # Deprecated: use client.seed_info instead.
  def SeedInfo(data = nil)
    require_relative 'entity/seed_info_entity'
    SeedInfoEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = LoremPicsumSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
