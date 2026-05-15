<?php
declare(strict_types=1);

// LoremPicsum SDK exists test

require_once __DIR__ . '/../lorempicsum_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = LoremPicsumSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
