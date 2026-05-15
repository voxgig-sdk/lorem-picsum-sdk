package = "voxgig-sdk-lorem-picsum"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/lorem-picsum-sdk.git"
}
description = {
  summary = "LoremPicsum SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["lorem-picsum_sdk"] = "lorem-picsum_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
