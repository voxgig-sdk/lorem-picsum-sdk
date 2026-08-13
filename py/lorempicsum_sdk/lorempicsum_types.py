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


class GetRandomImageLoadMatch(TypedDict):
    height: int
    width: int


class GetRandomSquareImage(TypedDict):
    pass


class GetRandomSquareImageLoadMatch(TypedDict):
    id: int


class Height(TypedDict):
    pass


class HeightLoadMatch(TypedDict):
    height: int
    width: int


class Heightwebp(TypedDict):
    pass


class HeightwebpLoadMatch(TypedDict):
    height: int
    width: int


class IdInfo(TypedDict):
    author: str
    download_url: str
    height: int
    id: str
    url: str
    width: int


class IdInfoLoadMatch(TypedDict):
    id: str


class Idn(TypedDict):
    pass


class IdnLoadMatch(TypedDict):
    height: int
    id: str
    width: int


class List(TypedDict):
    author: str
    download_url: str
    height: int
    id: str
    url: str
    width: int


class ListListMatch(TypedDict, total=False):
    author: str
    download_url: str
    height: int
    id: str
    url: str
    width: int


class Seed(TypedDict):
    pass


class SeedLoadMatch(TypedDict):
    height: int
    seed: str
    width: int


class SeedInfo(TypedDict):
    author: str
    download_url: str
    height: int
    id: str
    url: str
    width: int


class SeedInfoLoadMatch(TypedDict):
    id: str
