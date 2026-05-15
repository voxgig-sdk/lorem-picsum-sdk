# LoremPicsum SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module LoremPicsumFeatures
  def self.make_feature(name)
    case name
    when "base"
      LoremPicsumBaseFeature.new
    when "test"
      LoremPicsumTestFeature.new
    else
      LoremPicsumBaseFeature.new
    end
  end
end
