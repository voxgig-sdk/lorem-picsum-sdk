<?php
declare(strict_types=1);

// LoremPicsum SDK utility: prepare_body

class LoremPicsumPrepareBody
{
    public static function call(LoremPicsumContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
