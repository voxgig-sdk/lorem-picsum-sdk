<?php
declare(strict_types=1);

// LoremPicsum SDK utility: prepare_headers

class LoremPicsumPrepareHeaders
{
    public static function call(LoremPicsumContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
