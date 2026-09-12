# LoremPicsum SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "LoremPicsum",
            "slug": "lorem-picsum",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://picsum.photos",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "get_random_image": {},
                "get_random_square_image": {},
                "height": {},
                "heightwebp": {},
                "id_info": {},
                "idn": {},
                "list": {},
                "seed": {},
                "seed_info": {},
            },
        },
        "entity": {
      "get_random_image": {
        "fields": [
          {
            "name": "id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
          "parts": [
            "width",
            "height",
          ],
          "sep": "/",
        },
        "name": "get_random_image",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "height",
                      "orig": "height",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "param",
                      "name": "width",
                      "orig": "width",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "blur",
                      "orig": "blur",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "grayscale",
                      "orig": "grayscale",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "random",
                      "orig": "random",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/{width}/{height}",
                "segments": [
                  {
                    "var": "width",
                  },
                  {
                    "var": "height",
                  },
                ],
                "select": {
                  "exist": [
                    "blur",
                    "grayscale",
                    "height",
                    "random",
                    "width",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "{width}",
                  "{height}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "get_random_square_image": {
        "fields": [
          {
            "name": "id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "get_random_square_image",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "size",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "blur",
                      "orig": "blur",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "grayscale",
                      "orig": "grayscale",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/{size}",
                "rename": {
                  "param": {
                    "size": "id",
                  },
                },
                "segments": [
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "blur",
                    "grayscale",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "height": {
        "fields": [],
        "name": "height",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "height",
                      "orig": "height",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "param",
                      "name": "width",
                      "orig": "width",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "blur",
                      "orig": "blur",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "grayscale",
                      "orig": "grayscale",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/{width}/{height}.jpg",
                "segments": [
                  {
                    "var": "width",
                  },
                  {
                    "lit": "{height}.jpg",
                  },
                ],
                "select": {
                  "exist": [
                    "blur",
                    "grayscale",
                    "height",
                    "width",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "{width}",
                  "{height}.jpg",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "heightwebp": {
        "fields": [],
        "name": "heightwebp",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "height",
                      "orig": "height",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "param",
                      "name": "width",
                      "orig": "width",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "blur",
                      "orig": "blur",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "grayscale",
                      "orig": "grayscale",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/{width}/{height}.webp",
                "segments": [
                  {
                    "var": "width",
                  },
                  {
                    "lit": "{height}.webp",
                  },
                ],
                "select": {
                  "exist": [
                    "blur",
                    "grayscale",
                    "height",
                    "width",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "{width}",
                  "{height}.webp",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "id_info": {
        "fields": [
          {
            "name": "author",
            "req": True,
            "short": "Name of the image author",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "download_url",
            "req": True,
            "short": "URL to download the image from Picsum",
            "type": "`$STRING`",
          },
          {
            "name": "height",
            "req": True,
            "short": "Original height of the image in pixels",
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "req": True,
            "short": "Unique identifier for the image",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "url",
            "req": True,
            "short": "URL to the original image on Unsplash",
            "type": "`$STRING`",
          },
          {
            "name": "width",
            "req": True,
            "short": "Original width of the image in pixels",
            "type": "`$INTEGER`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "id_info",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/id/{id}/info",
                "segments": [
                  {
                    "lit": "id",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "info",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "id",
                  "{id}",
                  "info",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "idn": {
        "fields": [
          {
            "name": "id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
          "parts": [
            "id",
            "width",
            "height",
          ],
          "sep": "/",
        },
        "name": "idn",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "height",
                      "orig": "height",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "width",
                      "orig": "width",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "blur",
                      "orig": "blur",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "grayscale",
                      "orig": "grayscale",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/id/{id}/{width}/{height}",
                "segments": [
                  {
                    "lit": "id",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "var": "width",
                  },
                  {
                    "var": "height",
                  },
                ],
                "select": {
                  "exist": [
                    "blur",
                    "grayscale",
                    "height",
                    "id",
                    "width",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "id",
                  "{id}",
                  "{width}",
                  "{height}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "list": {
        "fields": [
          {
            "name": "author",
            "req": True,
            "short": "Name of the image author",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "download_url",
            "req": True,
            "short": "URL to download the image from Picsum",
            "type": "`$STRING`",
          },
          {
            "name": "height",
            "req": True,
            "short": "Original height of the image in pixels",
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "req": True,
            "short": "Unique identifier for the image",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "url",
            "req": True,
            "short": "URL to the original image on Unsplash",
            "type": "`$STRING`",
          },
          {
            "name": "width",
            "req": True,
            "short": "Original width of the image in pixels",
            "type": "`$INTEGER`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "list",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": 30,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v2/list",
                "segments": [
                  {
                    "lit": "v2",
                  },
                  {
                    "lit": "list",
                  },
                ],
                "select": {
                  "exist": [
                    "limit",
                    "page",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v2",
                  "list",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "seed": {
        "fields": [
          {
            "name": "id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
          "parts": [
            "seed",
            "width",
            "height",
          ],
          "sep": "/",
        },
        "name": "seed",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "height",
                      "orig": "height",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "param",
                      "name": "seed",
                      "orig": "seed",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "width",
                      "orig": "width",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "blur",
                      "orig": "blur",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "grayscale",
                      "orig": "grayscale",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/seed/{seed}/{width}/{height}",
                "segments": [
                  {
                    "lit": "seed",
                  },
                  {
                    "var": "seed",
                  },
                  {
                    "var": "width",
                  },
                  {
                    "var": "height",
                  },
                ],
                "select": {
                  "exist": [
                    "blur",
                    "grayscale",
                    "height",
                    "seed",
                    "width",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "seed",
                  "{seed}",
                  "{width}",
                  "{height}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "seed",
            ],
          ],
        },
      },
      "seed_info": {
        "fields": [
          {
            "name": "author",
            "req": True,
            "short": "Name of the image author",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "download_url",
            "req": True,
            "short": "URL to download the image from Picsum",
            "type": "`$STRING`",
          },
          {
            "name": "height",
            "req": True,
            "short": "Original height of the image in pixels",
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "req": True,
            "short": "Unique identifier for the image",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "url",
            "req": True,
            "short": "URL to the original image on Unsplash",
            "type": "`$STRING`",
          },
          {
            "name": "width",
            "req": True,
            "short": "Original width of the image in pixels",
            "type": "`$INTEGER`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "seed_info",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "seed",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/seed/{seed}/info",
                "rename": {
                  "param": {
                    "seed": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "seed",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "info",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "seed",
                  "{id}",
                  "info",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
