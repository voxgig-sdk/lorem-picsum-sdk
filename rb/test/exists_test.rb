# LoremPicsum SDK exists test

require "minitest/autorun"
require_relative "../LoremPicsum_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = LoremPicsumSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
