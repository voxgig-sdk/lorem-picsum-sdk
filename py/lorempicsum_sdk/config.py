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
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "title": "Id",
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
                "parts": [
                  "{width}",
                  "{height}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "height",
                      "orig": "height",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "width",
                      "orig": "width",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "blur",
                      "orig": "blur",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "grayscale",
                      "orig": "grayscale",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "random",
                      "orig": "random",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "blur",
                    "grayscale",
                    "height",
                    "random",
                    "width",
                  ],
                },
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
            "title": "Id",
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
                "kind": "http",
                "method": "GET",
                "orig": "/{size}",
                "segments": [
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "size": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "size",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "blur",
                      "orig": "blur",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "grayscale",
                      "orig": "grayscale",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "blur",
                    "grayscale",
                    "id",
                  ],
                },
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
                "parts": [
                  "{width}",
                  "{height}.jpg",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "height",
                      "orig": "height",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "width",
                      "orig": "width",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "blur",
                      "orig": "blur",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "grayscale",
                      "orig": "grayscale",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "blur",
                    "grayscale",
                    "height",
                    "width",
                  ],
                },
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
                "parts": [
                  "{width}",
                  "{height}.webp",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "height",
                      "orig": "height",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "width",
                      "orig": "width",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "blur",
                      "orig": "blur",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "grayscale",
                      "orig": "grayscale",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "blur",
                    "grayscale",
                    "height",
                    "width",
                  ],
                },
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
            "title": "Author",
            "type": "`$STRING`",
            "req": True,
            "short": "Name of the image author",
          },
          {
            "name": "download_url",
            "title": "Download Url",
            "type": "`$STRING`",
            "req": True,
            "short": "URL to download the image from Picsum",
            "format": "uri",
          },
          {
            "name": "height",
            "title": "Height",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Original height of the image in pixels",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the image",
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "req": True,
            "short": "URL to the original image on Unsplash",
            "format": "uri",
          },
          {
            "name": "width",
            "title": "Width",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Original width of the image in pixels",
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
                "parts": [
                  "id",
                  "{id}",
                  "info",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
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
            "title": "Id",
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
                "parts": [
                  "id",
                  "{id}",
                  "{width}",
                  "{height}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "height",
                      "orig": "height",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "width",
                      "orig": "width",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "blur",
                      "orig": "blur",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "grayscale",
                      "orig": "grayscale",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "blur",
                    "grayscale",
                    "height",
                    "id",
                    "width",
                  ],
                },
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
            "title": "Author",
            "type": "`$STRING`",
            "req": True,
            "short": "Name of the image author",
          },
          {
            "name": "download_url",
            "title": "Download Url",
            "type": "`$STRING`",
            "req": True,
            "short": "URL to download the image from Picsum",
            "format": "uri",
          },
          {
            "name": "height",
            "title": "Height",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Original height of the image in pixels",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the image",
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "req": True,
            "short": "URL to the original image on Unsplash",
            "format": "uri",
          },
          {
            "name": "width",
            "title": "Width",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Original width of the image in pixels",
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
                "parts": [
                  "v2",
                  "list",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 30,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "page",
                  ],
                },
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
            "title": "Id",
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
                "parts": [
                  "seed",
                  "{seed}",
                  "{width}",
                  "{height}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "height",
                      "orig": "height",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "seed",
                      "orig": "seed",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                    {
                      "name": "width",
                      "orig": "width",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "blur",
                      "orig": "blur",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "grayscale",
                      "orig": "grayscale",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "blur",
                    "grayscale",
                    "height",
                    "seed",
                    "width",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "seed_info": {
        "fields": [
          {
            "name": "author",
            "title": "Author",
            "type": "`$STRING`",
            "req": True,
            "short": "Name of the image author",
          },
          {
            "name": "download_url",
            "title": "Download Url",
            "type": "`$STRING`",
            "req": True,
            "short": "URL to download the image from Picsum",
            "format": "uri",
          },
          {
            "name": "height",
            "title": "Height",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Original height of the image in pixels",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the image",
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "req": True,
            "short": "URL to the original image on Unsplash",
            "format": "uri",
          },
          {
            "name": "width",
            "title": "Width",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Original width of the image in pixels",
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
                "kind": "http",
                "method": "GET",
                "orig": "/seed/{seed}/info",
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
                "parts": [
                  "seed",
                  "{id}",
                  "info",
                ],
                "rename": {
                  "param": {
                    "seed": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "seed",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
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
