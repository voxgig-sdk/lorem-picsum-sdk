-- Typed models for the LoremPicsum SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class GetRandomImage

---@class GetRandomImageLoadMatch
---@field height number
---@field width number

---@class GetRandomSquareImage

---@class GetRandomSquareImageLoadMatch
---@field id number

---@class Height

---@class HeightLoadMatch
---@field height number
---@field width number

---@class Heightwebp

---@class HeightwebpLoadMatch
---@field height number
---@field width number

---@class IdInfo
---@field author string
---@field download_url string
---@field height number
---@field id string
---@field url string
---@field width number

---@class IdInfoLoadMatch
---@field id string

---@class Idn

---@class IdnLoadMatch
---@field height number
---@field id string
---@field width number

---@class List
---@field author string
---@field download_url string
---@field height number
---@field id string
---@field url string
---@field width number

---@class ListListMatch

---@class Seed

---@class SeedLoadMatch
---@field height number
---@field seed string
---@field width number

---@class SeedInfo
---@field author string
---@field download_url string
---@field height number
---@field id string
---@field url string
---@field width number

---@class SeedInfoLoadMatch
---@field id string

local M = {}

return M
