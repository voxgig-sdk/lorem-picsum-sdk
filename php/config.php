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
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
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
          'fields' => [],
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
                  'parts' => [
                    '{width}',
                    '{height}',
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
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'get_random_square_image' => [
          'fields' => [],
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
                  'parts' => [
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'size' => 'id',
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
                  'parts' => [
                    '{width}',
                    '{height}.jpg',
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
                  'parts' => [
                    '{width}',
                    '{height}.webp',
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
              'type' => '`$STRING`',
            ],
            [
              'name' => 'download_url',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'height',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'width',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
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
                  'parts' => [
                    'id',
                    '{id}',
                    'info',
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
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'idn' => [
          'fields' => [],
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
                  'parts' => [
                    'id',
                    '{id}',
                    '{width}',
                    '{height}',
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
              'type' => '`$STRING`',
            ],
            [
              'name' => 'download_url',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'height',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'width',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
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
                  'parts' => [
                    'v2',
                    'list',
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
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'seed' => [
          'fields' => [],
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
                  'parts' => [
                    'seed',
                    '{seed}',
                    '{width}',
                    '{height}',
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
              'type' => '`$STRING`',
            ],
            [
              'name' => 'download_url',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'height',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'width',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
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
                  'parts' => [
                    'seed',
                    '{id}',
                    'info',
                  ],
                  'rename' => [
                    'param' => [
                      'seed' => 'id',
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
