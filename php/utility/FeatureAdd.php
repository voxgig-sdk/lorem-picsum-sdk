<?php
declare(strict_types=1);

// LoremPicsum SDK utility: feature_add

class LoremPicsumFeatureAdd
{
    public static function call(LoremPicsumContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
