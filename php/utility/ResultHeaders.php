<?php
declare(strict_types=1);

// LoremPicsum SDK utility: result_headers

class LoremPicsumResultHeaders
{
    public static function call(LoremPicsumContext $ctx): ?LoremPicsumResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
