-- LoremPicsum SDK error

local LoremPicsumError = {}
LoremPicsumError.__index = LoremPicsumError


function LoremPicsumError.new(code, msg, ctx)
  local self = setmetatable({}, LoremPicsumError)
  self.is_sdk_error = true
  self.sdk = "LoremPicsum"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function LoremPicsumError:error()
  return self.msg
end


function LoremPicsumError:__tostring()
  return self.msg
end


return LoremPicsumError
