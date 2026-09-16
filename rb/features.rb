# LoremPicsum SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module LoremPicsumFeatures
  def self.make_feature(name)
    case name
    when "base"
      LoremPicsumBaseFeature.new
    when "ratelimit"
      LoremPicsumRatelimitFeature.new
    when "retry"
      LoremPicsumRetryFeature.new
    when "test"
      LoremPicsumTestFeature.new
    when "timeout"
      LoremPicsumTimeoutFeature.new
    else
      LoremPicsumBaseFeature.new
    end
  end
end
