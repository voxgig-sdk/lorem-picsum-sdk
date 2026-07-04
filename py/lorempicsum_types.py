# Typed models for the LoremPicsum SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class GetRandomImage:
    pass


@dataclass
class GetRandomImageLoadMatch:
    height: int
    width: int


@dataclass
class GetRandomSquareImage:
    pass


@dataclass
class GetRandomSquareImageLoadMatch:
    id: int


@dataclass
class Height:
    pass


@dataclass
class HeightLoadMatch:
    height: int
    width: int


@dataclass
class Heightwebp:
    pass


@dataclass
class HeightwebpLoadMatch:
    height: int
    width: int


@dataclass
class IdInfo:
    author: str
    download_url: str
    height: int
    id: str
    url: str
    width: int


@dataclass
class IdInfoLoadMatch:
    id: str


@dataclass
class Idn:
    pass


@dataclass
class IdnLoadMatch:
    height: int
    id: str
    width: int


@dataclass
class List:
    author: str
    download_url: str
    height: int
    id: str
    url: str
    width: int


@dataclass
class ListListMatch:
    author: Optional[str] = None
    download_url: Optional[str] = None
    height: Optional[int] = None
    id: Optional[str] = None
    url: Optional[str] = None
    width: Optional[int] = None


@dataclass
class Seed:
    pass


@dataclass
class SeedLoadMatch:
    height: int
    seed: str
    width: int


@dataclass
class SeedInfo:
    author: str
    download_url: str
    height: int
    id: str
    url: str
    width: int


@dataclass
class SeedInfoLoadMatch:
    id: str

