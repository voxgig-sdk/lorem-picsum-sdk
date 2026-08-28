// Typed models for the LoremPicsum SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface GetRandomImage {
}

export interface GetRandomImageLoadMatch {
  height: number
  width: number
  blur?: number
  grayscale?: boolean
  random?: number
}

export interface GetRandomSquareImage {
  id?: string
}

export interface GetRandomSquareImageLoadMatch {
  id: number
  blur?: number
  grayscale?: boolean
}

export interface Height {
}

export interface HeightLoadMatch {
  height: number
  width: number
  blur?: number
  grayscale?: boolean
}

export interface Heightwebp {
}

export interface HeightwebpLoadMatch {
  height: number
  width: number
  blur?: number
  grayscale?: boolean
}

export interface IdInfo {
  author: string
  download_url: string
  height: number
  id: string
  url: string
  width: number
}

export interface IdInfoLoadMatch {
  id: string
}

export interface Idn {
  id?: string
}

export interface IdnLoadMatch {
  height: number
  id: string
  width: number
  blur?: number
  grayscale?: boolean
}

export interface List {
  author: string
  download_url: string
  height: number
  id: string
  url: string
  width: number
}

export interface ListListMatch {
  limit?: number
  page?: number
}

export interface Seed {
}

export interface SeedLoadMatch {
  height: number
  seed: string
  width: number
  blur?: number
  grayscale?: boolean
}

export interface SeedInfo {
  author: string
  download_url: string
  height: number
  id: string
  url: string
  width: number
}

export interface SeedInfoLoadMatch {
  id: string
}

