<?php
declare(strict_types=1);

// LoremPicsum SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class LoremPicsumFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new LoremPicsumBaseFeature();
            case "test":
                return new LoremPicsumTestFeature();
            default:
                return new LoremPicsumBaseFeature();
        }
    }
}
