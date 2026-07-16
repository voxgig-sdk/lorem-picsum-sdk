-- LoremPicsum SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local LoremPicsumSDK = {}
LoremPicsumSDK.__index = LoremPicsumSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

LoremPicsumSDK._make_feature = _make_feature


function LoremPicsumSDK.new(options)
  local self = setmetatable({}, LoremPicsumSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

  -- #BuildFeatures

  return self
end


function LoremPicsumSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function LoremPicsumSDK:get_utility()
  return Utility.copy(self._utility)
end


function LoremPicsumSDK:get_root_ctx()
  return self._rootctx
end


function LoremPicsumSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


function LoremPicsumSDK:direct(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end



-- Idiomatic facade: client:GetRandomImage():list() / client:GetRandomImage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoremPicsumSDK:GetRandomImage(data)
  local EntityMod = require("entity.get_random_image_entity")
  if data == nil then
    if self._get_random_image == nil then
      self._get_random_image = EntityMod.new(self, nil)
    end
    return self._get_random_image
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GetRandomSquareImage():list() / client:GetRandomSquareImage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoremPicsumSDK:GetRandomSquareImage(data)
  local EntityMod = require("entity.get_random_square_image_entity")
  if data == nil then
    if self._get_random_square_image == nil then
      self._get_random_square_image = EntityMod.new(self, nil)
    end
    return self._get_random_square_image
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Height():list() / client:Height():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoremPicsumSDK:Height(data)
  local EntityMod = require("entity.height_entity")
  if data == nil then
    if self._height == nil then
      self._height = EntityMod.new(self, nil)
    end
    return self._height
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Heightwebp():list() / client:Heightwebp():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoremPicsumSDK:Heightwebp(data)
  local EntityMod = require("entity.heightwebp_entity")
  if data == nil then
    if self._heightwebp == nil then
      self._heightwebp = EntityMod.new(self, nil)
    end
    return self._heightwebp
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IdInfo():list() / client:IdInfo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoremPicsumSDK:IdInfo(data)
  local EntityMod = require("entity.id_info_entity")
  if data == nil then
    if self._id_info == nil then
      self._id_info = EntityMod.new(self, nil)
    end
    return self._id_info
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Idn():list() / client:Idn():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoremPicsumSDK:Idn(data)
  local EntityMod = require("entity.idn_entity")
  if data == nil then
    if self._idn == nil then
      self._idn = EntityMod.new(self, nil)
    end
    return self._idn
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:List():list() / client:List():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoremPicsumSDK:List(data)
  local EntityMod = require("entity.list_entity")
  if data == nil then
    if self._list == nil then
      self._list = EntityMod.new(self, nil)
    end
    return self._list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Seed():list() / client:Seed():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoremPicsumSDK:Seed(data)
  local EntityMod = require("entity.seed_entity")
  if data == nil then
    if self._seed == nil then
      self._seed = EntityMod.new(self, nil)
    end
    return self._seed
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SeedInfo():list() / client:SeedInfo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function LoremPicsumSDK:SeedInfo(data)
  local EntityMod = require("entity.seed_info_entity")
  if data == nil then
    if self._seed_info == nil then
      self._seed_info = EntityMod.new(self, nil)
    end
    return self._seed_info
  end
  return EntityMod.new(self, data)
end




function LoremPicsumSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = LoremPicsumSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return LoremPicsumSDK
