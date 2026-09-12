-- LoremPicsum SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "LoremPicsum",
      slug = "lorem-picsum",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://picsum.photos",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["get_random_image"] = {},
        ["get_random_square_image"] = {},
        ["height"] = {},
        ["heightwebp"] = {},
        ["id_info"] = {},
        ["idn"] = {},
        ["list"] = {},
        ["seed"] = {},
        ["seed_info"] = {},
      },
    },
    entity = {
      ["get_random_image"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
          ["parts"] = {
            "width",
            "height",
          },
          ["sep"] = "/",
        },
        ["name"] = "get_random_image",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "height",
                      ["orig"] = "height",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "width",
                      ["orig"] = "width",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "blur",
                      ["orig"] = "blur",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "grayscale",
                      ["orig"] = "grayscale",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "random",
                      ["orig"] = "random",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/{width}/{height}",
                ["segments"] = {
                  {
                    ["var"] = "width",
                  },
                  {
                    ["var"] = "height",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "blur",
                    "grayscale",
                    "height",
                    "random",
                    "width",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "{width}",
                  "{height}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["get_random_square_image"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "get_random_square_image",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "size",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "blur",
                      ["orig"] = "blur",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "grayscale",
                      ["orig"] = "grayscale",
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/{size}",
                ["rename"] = {
                  ["param"] = {
                    ["size"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "blur",
                    "grayscale",
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["height"] = {
        ["fields"] = {},
        ["name"] = "height",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "height",
                      ["orig"] = "height",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "width",
                      ["orig"] = "width",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "blur",
                      ["orig"] = "blur",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "grayscale",
                      ["orig"] = "grayscale",
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/{width}/{height}.jpg",
                ["segments"] = {
                  {
                    ["var"] = "width",
                  },
                  {
                    ["lit"] = "{height}.jpg",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "blur",
                    "grayscale",
                    "height",
                    "width",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "{width}",
                  "{height}.jpg",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["heightwebp"] = {
        ["fields"] = {},
        ["name"] = "heightwebp",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "height",
                      ["orig"] = "height",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "width",
                      ["orig"] = "width",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "blur",
                      ["orig"] = "blur",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "grayscale",
                      ["orig"] = "grayscale",
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/{width}/{height}.webp",
                ["segments"] = {
                  {
                    ["var"] = "width",
                  },
                  {
                    ["lit"] = "{height}.webp",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "blur",
                    "grayscale",
                    "height",
                    "width",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "{width}",
                  "{height}.webp",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["id_info"] = {
        ["fields"] = {
          {
            ["name"] = "author",
            ["req"] = true,
            ["short"] = "Name of the image author",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "download_url",
            ["req"] = true,
            ["short"] = "URL to download the image from Picsum",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "height",
            ["req"] = true,
            ["short"] = "Original height of the image in pixels",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["short"] = "Unique identifier for the image",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "url",
            ["req"] = true,
            ["short"] = "URL to the original image on Unsplash",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "width",
            ["req"] = true,
            ["short"] = "Original width of the image in pixels",
            ["type"] = "`$INTEGER`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "id_info",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/id/{id}/info",
                ["segments"] = {
                  {
                    ["lit"] = "id",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "info",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "id",
                  "{id}",
                  "info",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["idn"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
          ["parts"] = {
            "id",
            "width",
            "height",
          },
          ["sep"] = "/",
        },
        ["name"] = "idn",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "height",
                      ["orig"] = "height",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "width",
                      ["orig"] = "width",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "blur",
                      ["orig"] = "blur",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "grayscale",
                      ["orig"] = "grayscale",
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/id/{id}/{width}/{height}",
                ["segments"] = {
                  {
                    ["lit"] = "id",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["var"] = "width",
                  },
                  {
                    ["var"] = "height",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "blur",
                    "grayscale",
                    "height",
                    "id",
                    "width",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "id",
                  "{id}",
                  "{width}",
                  "{height}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["list"] = {
        ["fields"] = {
          {
            ["name"] = "author",
            ["req"] = true,
            ["short"] = "Name of the image author",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "download_url",
            ["req"] = true,
            ["short"] = "URL to download the image from Picsum",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "height",
            ["req"] = true,
            ["short"] = "Original height of the image in pixels",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["short"] = "Unique identifier for the image",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "url",
            ["req"] = true,
            ["short"] = "URL to the original image on Unsplash",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "width",
            ["req"] = true,
            ["short"] = "Original width of the image in pixels",
            ["type"] = "`$INTEGER`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "list",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 30,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v2/list",
                ["segments"] = {
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "list",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "limit",
                    "page",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "v2",
                  "list",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["seed"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
          ["parts"] = {
            "seed",
            "width",
            "height",
          },
          ["sep"] = "/",
        },
        ["name"] = "seed",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "height",
                      ["orig"] = "height",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "seed",
                      ["orig"] = "seed",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "width",
                      ["orig"] = "width",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "blur",
                      ["orig"] = "blur",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "grayscale",
                      ["orig"] = "grayscale",
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/seed/{seed}/{width}/{height}",
                ["segments"] = {
                  {
                    ["lit"] = "seed",
                  },
                  {
                    ["var"] = "seed",
                  },
                  {
                    ["var"] = "width",
                  },
                  {
                    ["var"] = "height",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "blur",
                    "grayscale",
                    "height",
                    "seed",
                    "width",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "seed",
                  "{seed}",
                  "{width}",
                  "{height}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "seed",
            },
          },
        },
      },
      ["seed_info"] = {
        ["fields"] = {
          {
            ["name"] = "author",
            ["req"] = true,
            ["short"] = "Name of the image author",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "download_url",
            ["req"] = true,
            ["short"] = "URL to download the image from Picsum",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "height",
            ["req"] = true,
            ["short"] = "Original height of the image in pixels",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["short"] = "Unique identifier for the image",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "url",
            ["req"] = true,
            ["short"] = "URL to the original image on Unsplash",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "width",
            ["req"] = true,
            ["short"] = "Original width of the image in pixels",
            ["type"] = "`$INTEGER`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "seed_info",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "seed",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/seed/{seed}/info",
                ["rename"] = {
                  ["param"] = {
                    ["seed"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "seed",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "info",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "seed",
                  "{id}",
                  "info",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
