<?php
declare(strict_types=1);

// LoremPicsum SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class LoremPicsumMakeContext
{
    public static function call(array $ctxmap, ?LoremPicsumContext $basectx): LoremPicsumContext
    {
        return new LoremPicsumContext($ctxmap, $basectx);
    }
}
