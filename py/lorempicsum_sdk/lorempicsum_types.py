# Typed models for the LoremPicsum SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class GetRandomImage(TypedDict):
    pass


class GetRandomImageLoadMatchRequired(TypedDict):
    height: int
    width: int


class GetRandomImageLoadMatch(GetRandomImageLoadMatchRequired, total=False):
    blur: int
    grayscale: bool
    random: int


class GetRandomSquareImage(TypedDict, total=False):
    id: str


class GetRandomSquareImageLoadMatchRequired(TypedDict):
    id: int


class GetRandomSquareImageLoadMatch(GetRandomSquareImageLoadMatchRequired, total=False):
    blur: int
    grayscale: bool


class Height(TypedDict):
    pass


class HeightLoadMatchRequired(TypedDict):
    height: int
    width: int


class HeightLoadMatch(HeightLoadMatchRequired, total=False):
    blur: int
    grayscale: bool


class Heightwebp(TypedDict):
    pass


class HeightwebpLoadMatchRequired(TypedDict):
    height: int
    width: int


class HeightwebpLoadMatch(HeightwebpLoadMatchRequired, total=False):
    blur: int
    grayscale: bool


class IdInfo(TypedDict):
    author: str
    download_url: str
    height: int
    id: str
    url: str
    width: int


class IdInfoLoadMatch(TypedDict):
    id: str


class Idn(TypedDict, total=False):
    id: str


class IdnLoadMatchRequired(TypedDict):
    height: int
    id: str
    width: int


class IdnLoadMatch(IdnLoadMatchRequired, total=False):
    blur: int
    grayscale: bool


class List(TypedDict):
    author: str
    download_url: str
    height: int
    id: str
    url: str
    width: int


class ListListMatch(TypedDict, total=False):
    limit: int
    page: int


class Seed(TypedDict):
    pass


class SeedLoadMatchRequired(TypedDict):
    height: int
    seed: str
    width: int


class SeedLoadMatch(SeedLoadMatchRequired, total=False):
    blur: int
    grayscale: bool


class SeedInfo(TypedDict):
    author: str
    download_url: str
    height: int
    id: str
    url: str
    width: int


class SeedInfoLoadMatch(TypedDict):
    id: str
