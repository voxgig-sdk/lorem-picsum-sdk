<?php
declare(strict_types=1);

// LoremPicsum SDK configuration

class LoremPicsumConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "LoremPicsum",
                "slug" => "lorem-picsum",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://picsum.photos",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "get_random_image" => [],
                    "get_random_square_image" => [],
                    "height" => [],
                    "heightwebp" => [],
                    "id_info" => [],
                    "idn" => [],
                    "list" => [],
                    "seed" => [],
                    "seed_info" => [],
                ],
            ],
            "entity" => [
        'get_random_image' => [
          'fields' => [
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
            'parts' => [
              'width',
              'height',
            ],
            'sep' => '/',
          ],
          'name' => 'get_random_image',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'height',
                        'orig' => 'height',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'width',
                        'orig' => 'width',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'blur',
                        'orig' => 'blur',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'grayscale',
                        'orig' => 'grayscale',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'random',
                        'orig' => 'random',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{width}/{height}',
                  'segments' => [
                    [
                      'var' => 'width',
                    ],
                    [
                      'var' => 'height',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'blur',
                      'grayscale',
                      'height',
                      'random',
                      'width',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    '{width}',
                    '{height}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'get_random_square_image' => [
          'fields' => [
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'get_random_square_image',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'size',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'blur',
                        'orig' => 'blur',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'grayscale',
                        'orig' => 'grayscale',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{size}',
                  'rename' => [
                    'param' => [
                      'size' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'blur',
                      'grayscale',
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'height' => [
          'fields' => [],
          'name' => 'height',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'height',
                        'orig' => 'height',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'width',
                        'orig' => 'width',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'blur',
                        'orig' => 'blur',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'grayscale',
                        'orig' => 'grayscale',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{width}/{height}.jpg',
                  'segments' => [
                    [
                      'var' => 'width',
                    ],
                    [
                      'lit' => '{height}.jpg',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'blur',
                      'grayscale',
                      'height',
                      'width',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    '{width}',
                    '{height}.jpg',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'heightwebp' => [
          'fields' => [],
          'name' => 'heightwebp',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'height',
                        'orig' => 'height',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'width',
                        'orig' => 'width',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'blur',
                        'orig' => 'blur',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'grayscale',
                        'orig' => 'grayscale',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{width}/{height}.webp',
                  'segments' => [
                    [
                      'var' => 'width',
                    ],
                    [
                      'lit' => '{height}.webp',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'blur',
                      'grayscale',
                      'height',
                      'width',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    '{width}',
                    '{height}.webp',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'id_info' => [
          'fields' => [
            [
              'name' => 'author',
              'req' => true,
              'short' => 'Name of the image author',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'uri',
              'name' => 'download_url',
              'req' => true,
              'short' => 'URL to download the image from Picsum',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'height',
              'req' => true,
              'short' => 'Original height of the image in pixels',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the image',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'uri',
              'name' => 'url',
              'req' => true,
              'short' => 'URL to the original image on Unsplash',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'width',
              'req' => true,
              'short' => 'Original width of the image in pixels',
              'type' => '`$INTEGER`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'id_info',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/id/{id}/info',
                  'segments' => [
                    [
                      'lit' => 'id',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'info',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'id',
                    '{id}',
                    'info',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'idn' => [
          'fields' => [
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
            'parts' => [
              'id',
              'width',
              'height',
            ],
            'sep' => '/',
          ],
          'name' => 'idn',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'height',
                        'orig' => 'height',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'width',
                        'orig' => 'width',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'blur',
                        'orig' => 'blur',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'grayscale',
                        'orig' => 'grayscale',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/id/{id}/{width}/{height}',
                  'segments' => [
                    [
                      'lit' => 'id',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'var' => 'width',
                    ],
                    [
                      'var' => 'height',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'blur',
                      'grayscale',
                      'height',
                      'id',
                      'width',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'id',
                    '{id}',
                    '{width}',
                    '{height}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'list' => [
          'fields' => [
            [
              'name' => 'author',
              'req' => true,
              'short' => 'Name of the image author',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'uri',
              'name' => 'download_url',
              'req' => true,
              'short' => 'URL to download the image from Picsum',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'height',
              'req' => true,
              'short' => 'Original height of the image in pixels',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the image',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'uri',
              'name' => 'url',
              'req' => true,
              'short' => 'URL to the original image on Unsplash',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'width',
              'req' => true,
              'short' => 'Original width of the image in pixels',
              'type' => '`$INTEGER`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 30,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/v2/list',
                  'segments' => [
                    [
                      'lit' => 'v2',
                    ],
                    [
                      'lit' => 'list',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'limit',
                      'page',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'v2',
                    'list',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'seed' => [
          'fields' => [
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
            'parts' => [
              'seed',
              'width',
              'height',
            ],
            'sep' => '/',
          ],
          'name' => 'seed',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'height',
                        'orig' => 'height',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'seed',
                        'orig' => 'seed',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'width',
                        'orig' => 'width',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'blur',
                        'orig' => 'blur',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'grayscale',
                        'orig' => 'grayscale',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/seed/{seed}/{width}/{height}',
                  'segments' => [
                    [
                      'lit' => 'seed',
                    ],
                    [
                      'var' => 'seed',
                    ],
                    [
                      'var' => 'width',
                    ],
                    [
                      'var' => 'height',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'blur',
                      'grayscale',
                      'height',
                      'seed',
                      'width',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'seed',
                    '{seed}',
                    '{width}',
                    '{height}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'seed',
              ],
            ],
          ],
        ],
        'seed_info' => [
          'fields' => [
            [
              'name' => 'author',
              'req' => true,
              'short' => 'Name of the image author',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'uri',
              'name' => 'download_url',
              'req' => true,
              'short' => 'URL to download the image from Picsum',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'height',
              'req' => true,
              'short' => 'Original height of the image in pixels',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the image',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'uri',
              'name' => 'url',
              'req' => true,
              'short' => 'URL to the original image on Unsplash',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'width',
              'req' => true,
              'short' => 'Original width of the image in pixels',
              'type' => '`$INTEGER`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'seed_info',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'seed',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/seed/{seed}/info',
                  'rename' => [
                    'param' => [
                      'seed' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'seed',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'info',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'seed',
                    '{id}',
                    'info',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return LoremPicsumFeatures::make_feature($name);
    }
}
