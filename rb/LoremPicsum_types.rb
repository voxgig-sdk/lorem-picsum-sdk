# frozen_string_literal: true

# Typed models for the LoremPicsum SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# GetRandomImage entity data model.
class GetRandomImage
end

# Request payload for GetRandomImage#load.
#
# @!attribute [rw] height
#   @return [Integer]
#
# @!attribute [rw] width
#   @return [Integer]
GetRandomImageLoadMatch = Struct.new(
  :height,
  :width,
  keyword_init: true
)

# GetRandomSquareImage entity data model.
class GetRandomSquareImage
end

# Request payload for GetRandomSquareImage#load.
#
# @!attribute [rw] id
#   @return [Integer]
GetRandomSquareImageLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Height entity data model.
class Height
end

# Request payload for Height#load.
#
# @!attribute [rw] height
#   @return [Integer]
#
# @!attribute [rw] width
#   @return [Integer]
HeightLoadMatch = Struct.new(
  :height,
  :width,
  keyword_init: true
)

# Heightwebp entity data model.
class Heightwebp
end

# Request payload for Heightwebp#load.
#
# @!attribute [rw] height
#   @return [Integer]
#
# @!attribute [rw] width
#   @return [Integer]
HeightwebpLoadMatch = Struct.new(
  :height,
  :width,
  keyword_init: true
)

# IdInfo entity data model.
#
# @!attribute [rw] author
#   @return [String]
#
# @!attribute [rw] download_url
#   @return [String]
#
# @!attribute [rw] height
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] width
#   @return [Integer]
IdInfo = Struct.new(
  :author,
  :download_url,
  :height,
  :id,
  :url,
  :width,
  keyword_init: true
)

# Request payload for IdInfo#load.
#
# @!attribute [rw] id
#   @return [String]
IdInfoLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Idn entity data model.
class Idn
end

# Request payload for Idn#load.
#
# @!attribute [rw] height
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] width
#   @return [Integer]
IdnLoadMatch = Struct.new(
  :height,
  :id,
  :width,
  keyword_init: true
)

# List entity data model.
#
# @!attribute [rw] author
#   @return [String]
#
# @!attribute [rw] download_url
#   @return [String]
#
# @!attribute [rw] height
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] width
#   @return [Integer]
List = Struct.new(
  :author,
  :download_url,
  :height,
  :id,
  :url,
  :width,
  keyword_init: true
)

# Request payload for List#list.
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] download_url
#   @return [String, nil]
#
# @!attribute [rw] height
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Integer, nil]
ListListMatch = Struct.new(
  :author,
  :download_url,
  :height,
  :id,
  :url,
  :width,
  keyword_init: true
)

# Seed entity data model.
class Seed
end

# Request payload for Seed#load.
#
# @!attribute [rw] height
#   @return [Integer]
#
# @!attribute [rw] seed
#   @return [String]
#
# @!attribute [rw] width
#   @return [Integer]
SeedLoadMatch = Struct.new(
  :height,
  :seed,
  :width,
  keyword_init: true
)

# SeedInfo entity data model.
#
# @!attribute [rw] author
#   @return [String]
#
# @!attribute [rw] download_url
#   @return [String]
#
# @!attribute [rw] height
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] width
#   @return [Integer]
SeedInfo = Struct.new(
  :author,
  :download_url,
  :height,
  :id,
  :url,
  :width,
  keyword_init: true
)

# Request payload for SeedInfo#load.
#
# @!attribute [rw] id
#   @return [String]
SeedInfoLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

