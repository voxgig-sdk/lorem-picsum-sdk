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
}

export interface GetRandomSquareImage {
}

export interface GetRandomSquareImageLoadMatch {
  id: number
}

export interface Height {
}

export interface HeightLoadMatch {
  height: number
  width: number
}

export interface Heightwebp {
}

export interface HeightwebpLoadMatch {
  height: number
  width: number
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
}

export interface IdnLoadMatch {
  height: number
  id: string
  width: number
}

export interface List {
  author: string
  download_url: string
  height: number
  id: string
  url: string
  width: number
}

export type ListListMatch = Partial<List>

export interface Seed {
}

export interface SeedLoadMatch {
  height: number
  seed: string
  width: number
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

