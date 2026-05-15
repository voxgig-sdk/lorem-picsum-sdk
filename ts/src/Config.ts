
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://picsum.photos',

    auth: {
      prefix: 'Bearer',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      get_random_image: {
      },

      get_random_square_image: {
      },

      height: {
      },

      heightwebp: {
      },

      id_info: {
      },

      idn: {
      },

      list: {
      },

      seed: {
      },

      seed_info: {
      },

    }
  }


  entity = {
    "get_random_image": {
      "fields": [],
      "name": "get_random_image",
      "op": {
        "load": {
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "height",
                    "orig": "height",
                    "reqd": true,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "kind": "param",
                    "name": "width",
                    "orig": "width",
                    "reqd": true,
                    "type": "`$INTEGER`",
                    "active": true
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "blur",
                    "orig": "blur",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "grayscale",
                    "orig": "grayscale",
                    "reqd": false,
                    "type": "`$BOOLEAN`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "random",
                    "orig": "random",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/{width}/{height}",
              "parts": [
                "{width}",
                "{height}"
              ],
              "select": {
                "exist": [
                  "blur",
                  "grayscale",
                  "height",
                  "random",
                  "width"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "get_random_square_image": {
      "fields": [],
      "name": "get_random_square_image",
      "op": {
        "load": {
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "size",
                    "reqd": true,
                    "type": "`$INTEGER`",
                    "active": true
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "blur",
                    "orig": "blur",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "grayscale",
                    "orig": "grayscale",
                    "reqd": false,
                    "type": "`$BOOLEAN`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/{size}",
              "parts": [
                "{id}"
              ],
              "rename": {
                "param": {
                  "size": "id"
                }
              },
              "select": {
                "exist": [
                  "blur",
                  "grayscale",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "height": {
      "fields": [],
      "name": "height",
      "op": {
        "load": {
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "height",
                    "orig": "height",
                    "reqd": true,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "kind": "param",
                    "name": "width",
                    "orig": "width",
                    "reqd": true,
                    "type": "`$INTEGER`",
                    "active": true
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "blur",
                    "orig": "blur",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "grayscale",
                    "orig": "grayscale",
                    "reqd": false,
                    "type": "`$BOOLEAN`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/{width}/{height}.jpg",
              "parts": [
                "{width}",
                "{height}.jpg"
              ],
              "select": {
                "exist": [
                  "blur",
                  "grayscale",
                  "height",
                  "width"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "heightwebp": {
      "fields": [],
      "name": "heightwebp",
      "op": {
        "load": {
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "height",
                    "orig": "height",
                    "reqd": true,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "kind": "param",
                    "name": "width",
                    "orig": "width",
                    "reqd": true,
                    "type": "`$INTEGER`",
                    "active": true
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "blur",
                    "orig": "blur",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "grayscale",
                    "orig": "grayscale",
                    "reqd": false,
                    "type": "`$BOOLEAN`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/{width}/{height}.webp",
              "parts": [
                "{width}",
                "{height}.webp"
              ],
              "select": {
                "exist": [
                  "blur",
                  "grayscale",
                  "height",
                  "width"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "id_info": {
      "fields": [
        {
          "name": "author",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "download_url",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "height",
          "req": true,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 2
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        },
        {
          "name": "url",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 4
        },
        {
          "name": "width",
          "req": true,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 5
        }
      ],
      "name": "id_info",
      "op": {
        "load": {
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/id/{id}/info",
              "parts": [
                "id",
                "{id}",
                "info"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "idn": {
      "fields": [],
      "name": "idn",
      "op": {
        "load": {
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "height",
                    "orig": "height",
                    "reqd": true,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "param",
                    "name": "width",
                    "orig": "width",
                    "reqd": true,
                    "type": "`$INTEGER`",
                    "active": true
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "blur",
                    "orig": "blur",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "grayscale",
                    "orig": "grayscale",
                    "reqd": false,
                    "type": "`$BOOLEAN`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/id/{id}/{width}/{height}",
              "parts": [
                "id",
                "{id}",
                "{width}",
                "{height}"
              ],
              "select": {
                "exist": [
                  "blur",
                  "grayscale",
                  "height",
                  "id",
                  "width"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "list": {
      "fields": [
        {
          "name": "author",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "download_url",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "height",
          "req": true,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 2
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        },
        {
          "name": "url",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 4
        },
        {
          "name": "width",
          "req": true,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 5
        }
      ],
      "name": "list",
      "op": {
        "list": {
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
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/v2/list",
              "parts": [
                "v2",
                "list"
              ],
              "select": {
                "exist": [
                  "limit",
                  "page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "seed": {
      "fields": [],
      "name": "seed",
      "op": {
        "load": {
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "height",
                    "orig": "height",
                    "reqd": true,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "kind": "param",
                    "name": "seed",
                    "orig": "seed",
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "param",
                    "name": "width",
                    "orig": "width",
                    "reqd": true,
                    "type": "`$INTEGER`",
                    "active": true
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "blur",
                    "orig": "blur",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "grayscale",
                    "orig": "grayscale",
                    "reqd": false,
                    "type": "`$BOOLEAN`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/seed/{seed}/{width}/{height}",
              "parts": [
                "seed",
                "{seed}",
                "{width}",
                "{height}"
              ],
              "select": {
                "exist": [
                  "blur",
                  "grayscale",
                  "height",
                  "seed",
                  "width"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": [
          [
            "seed"
          ]
        ]
      }
    },
    "seed_info": {
      "fields": [
        {
          "name": "author",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "download_url",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "height",
          "req": true,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 2
        },
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        },
        {
          "name": "url",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 4
        },
        {
          "name": "width",
          "req": true,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 5
        }
      ],
      "name": "seed_info",
      "op": {
        "load": {
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "seed",
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/seed/{seed}/info",
              "parts": [
                "seed",
                "{id}",
                "info"
              ],
              "rename": {
                "param": {
                  "seed": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

