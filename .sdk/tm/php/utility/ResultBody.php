<?php
declare(strict_types=1);

// LoremPicsum SDK utility: result_body

class LoremPicsumResultBody
{
    public static function call(LoremPicsumContext $ctx): ?LoremPicsumResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
