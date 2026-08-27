# LoremPicsum SDK configuration

module LoremPicsumConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "LoremPicsum",
        "slug" => "lorem-picsum",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://picsum.photos",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "get_random_image" => {},
          "get_random_square_image" => {},
          "height" => {},
          "heightwebp" => {},
          "id_info" => {},
          "idn" => {},
          "list" => {},
          "seed" => {},
          "seed_info" => {},
        },
      },
      "entity" => {
        "get_random_image" => {
          "fields" => [],
          "name" => "get_random_image",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "height",
                        "orig" => "height",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "param",
                        "name" => "width",
                        "orig" => "width",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "blur",
                        "orig" => "blur",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "grayscale",
                        "orig" => "grayscale",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "random",
                        "orig" => "random",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/{width}/{height}",
                  "parts" => [
                    "{width}",
                    "{height}",
                  ],
                  "select" => {
                    "exist" => [
                      "blur",
                      "grayscale",
                      "height",
                      "random",
                      "width",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "get_random_square_image" => {
          "fields" => [
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
          ],
          "name" => "get_random_square_image",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "size",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "blur",
                        "orig" => "blur",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "grayscale",
                        "orig" => "grayscale",
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/{size}",
                  "parts" => [
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "size" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "blur",
                      "grayscale",
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "height" => {
          "fields" => [],
          "name" => "height",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "height",
                        "orig" => "height",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "param",
                        "name" => "width",
                        "orig" => "width",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "blur",
                        "orig" => "blur",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "grayscale",
                        "orig" => "grayscale",
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/{width}/{height}.jpg",
                  "parts" => [
                    "{width}",
                    "{height}.jpg",
                  ],
                  "select" => {
                    "exist" => [
                      "blur",
                      "grayscale",
                      "height",
                      "width",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "heightwebp" => {
          "fields" => [],
          "name" => "heightwebp",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "height",
                        "orig" => "height",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "param",
                        "name" => "width",
                        "orig" => "width",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "blur",
                        "orig" => "blur",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "grayscale",
                        "orig" => "grayscale",
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/{width}/{height}.webp",
                  "parts" => [
                    "{width}",
                    "{height}.webp",
                  ],
                  "select" => {
                    "exist" => [
                      "blur",
                      "grayscale",
                      "height",
                      "width",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "id_info" => {
          "fields" => [
            {
              "name" => "author",
              "req" => true,
              "short" => "Name of the image author",
              "type" => "`$STRING`",
            },
            {
              "name" => "download_url",
              "req" => true,
              "short" => "URL to download the image from Picsum",
              "type" => "`$STRING`",
            },
            {
              "name" => "height",
              "req" => true,
              "short" => "Original height of the image in pixels",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "id",
              "req" => true,
              "short" => "Unique identifier for the image",
              "type" => "`$STRING`",
            },
            {
              "name" => "url",
              "req" => true,
              "short" => "URL to the original image on Unsplash",
              "type" => "`$STRING`",
            },
            {
              "name" => "width",
              "req" => true,
              "short" => "Original width of the image in pixels",
              "type" => "`$INTEGER`",
            },
          ],
          "name" => "id_info",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/id/{id}/info",
                  "parts" => [
                    "id",
                    "{id}",
                    "info",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "idn" => {
          "fields" => [
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
          ],
          "name" => "idn",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "height",
                        "orig" => "height",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "param",
                        "name" => "width",
                        "orig" => "width",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "blur",
                        "orig" => "blur",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "grayscale",
                        "orig" => "grayscale",
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/id/{id}/{width}/{height}",
                  "parts" => [
                    "id",
                    "{id}",
                    "{width}",
                    "{height}",
                  ],
                  "select" => {
                    "exist" => [
                      "blur",
                      "grayscale",
                      "height",
                      "id",
                      "width",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "list" => {
          "fields" => [
            {
              "name" => "author",
              "req" => true,
              "short" => "Name of the image author",
              "type" => "`$STRING`",
            },
            {
              "name" => "download_url",
              "req" => true,
              "short" => "URL to download the image from Picsum",
              "type" => "`$STRING`",
            },
            {
              "name" => "height",
              "req" => true,
              "short" => "Original height of the image in pixels",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "id",
              "req" => true,
              "short" => "Unique identifier for the image",
              "type" => "`$STRING`",
            },
            {
              "name" => "url",
              "req" => true,
              "short" => "URL to the original image on Unsplash",
              "type" => "`$STRING`",
            },
            {
              "name" => "width",
              "req" => true,
              "short" => "Original width of the image in pixels",
              "type" => "`$INTEGER`",
            },
          ],
          "name" => "list",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => 30,
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v2/list",
                  "parts" => [
                    "v2",
                    "list",
                  ],
                  "select" => {
                    "exist" => [
                      "limit",
                      "page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "seed" => {
          "fields" => [],
          "name" => "seed",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "height",
                        "orig" => "height",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "param",
                        "name" => "seed",
                        "orig" => "seed",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "param",
                        "name" => "width",
                        "orig" => "width",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "blur",
                        "orig" => "blur",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "grayscale",
                        "orig" => "grayscale",
                        "type" => "`$BOOLEAN`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/seed/{seed}/{width}/{height}",
                  "parts" => [
                    "seed",
                    "{seed}",
                    "{width}",
                    "{height}",
                  ],
                  "select" => {
                    "exist" => [
                      "blur",
                      "grayscale",
                      "height",
                      "seed",
                      "width",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "seed",
              ],
            ],
          },
        },
        "seed_info" => {
          "fields" => [
            {
              "name" => "author",
              "req" => true,
              "short" => "Name of the image author",
              "type" => "`$STRING`",
            },
            {
              "name" => "download_url",
              "req" => true,
              "short" => "URL to download the image from Picsum",
              "type" => "`$STRING`",
            },
            {
              "name" => "height",
              "req" => true,
              "short" => "Original height of the image in pixels",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "id",
              "req" => true,
              "short" => "Unique identifier for the image",
              "type" => "`$STRING`",
            },
            {
              "name" => "url",
              "req" => true,
              "short" => "URL to the original image on Unsplash",
              "type" => "`$STRING`",
            },
            {
              "name" => "width",
              "req" => true,
              "short" => "Original width of the image in pixels",
              "type" => "`$INTEGER`",
            },
          ],
          "name" => "seed_info",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "seed",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/seed/{seed}/info",
                  "parts" => [
                    "seed",
                    "{id}",
                    "info",
                  ],
                  "rename" => {
                    "param" => {
                      "seed" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    LoremPicsumFeatures.make_feature(name)
  end
end
