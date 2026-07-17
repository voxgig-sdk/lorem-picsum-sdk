-- LoremPicsum SDK exists test

local sdk = require("lorem-picsum_sdk")

describe("LoremPicsumSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
