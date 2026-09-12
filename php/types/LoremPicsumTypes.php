<?php
declare(strict_types=1);

// Typed models for the LoremPicsum SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** GetRandomImage entity data model. */
class GetRandomImage
{
    public ?string $id = null;
}

/** Request payload for GetRandomImage#load. */
class GetRandomImageLoadMatch
{
    public int $height;
    public int $width;
    public ?int $blur = null;
    public ?bool $grayscale = null;
    public ?int $random = null;
}

/** GetRandomSquareImage entity data model. */
class GetRandomSquareImage
{
    public ?string $id = null;
}

/** Request payload for GetRandomSquareImage#load. */
class GetRandomSquareImageLoadMatch
{
    public int $id;
    public ?int $blur = null;
    public ?bool $grayscale = null;
}

/** Height entity data model. */
class Height
{
}

/** Request payload for Height#load. */
class HeightLoadMatch
{
    public int $height;
    public int $width;
    public ?int $blur = null;
    public ?bool $grayscale = null;
}

/** Heightwebp entity data model. */
class Heightwebp
{
}

/** Request payload for Heightwebp#load. */
class HeightwebpLoadMatch
{
    public int $height;
    public int $width;
    public ?int $blur = null;
    public ?bool $grayscale = null;
}

/** IdInfo entity data model. */
class IdInfo
{
    public string $author;
    public string $download_url;
    public int $height;
    public string $id;
    public string $url;
    public int $width;
}

/** Request payload for IdInfo#load. */
class IdInfoLoadMatch
{
    public string $id;
}

/** Idn entity data model. */
class Idn
{
    public ?string $id = null;
}

/** Request payload for Idn#load. */
class IdnLoadMatch
{
    public int $height;
    public string $id;
    public int $width;
    public ?int $blur = null;
    public ?bool $grayscale = null;
}

/** List entity data model. */
class ListType
{
    public string $author;
    public string $download_url;
    public int $height;
    public string $id;
    public string $url;
    public int $width;
}

/** Request payload for List#list. */
class ListListMatch
{
    public ?int $limit = null;
    public ?int $page = null;
}

/** Seed entity data model. */
class Seed
{
    public ?string $id = null;
}

/** Request payload for Seed#load. */
class SeedLoadMatch
{
    public int $height;
    public string $seed;
    public int $width;
    public ?int $blur = null;
    public ?bool $grayscale = null;
}

/** SeedInfo entity data model. */
class SeedInfo
{
    public string $author;
    public string $download_url;
    public int $height;
    public string $id;
    public string $url;
    public int $width;
}

/** Request payload for SeedInfo#load. */
class SeedInfoLoadMatch
{
    public string $id;
}

