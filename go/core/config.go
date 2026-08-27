package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "LoremPicsum",
			"slug": "lorem-picsum",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://picsum.photos",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"get_random_image": map[string]any{},
				"get_random_square_image": map[string]any{},
				"height": map[string]any{},
				"heightwebp": map[string]any{},
				"id_info": map[string]any{},
				"idn": map[string]any{},
				"list": map[string]any{},
				"seed": map[string]any{},
				"seed_info": map[string]any{},
			},
		},
		"entity": map[string]any{
			"get_random_image": map[string]any{
				"fields": []any{},
				"name": "get_random_image",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "height",
											"orig": "height",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "width",
											"orig": "width",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "blur",
											"orig": "blur",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "grayscale",
											"orig": "grayscale",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "random",
											"orig": "random",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{width}/{height}",
								"parts": []any{
									"{width}",
									"{height}",
								},
								"select": map[string]any{
									"exist": []any{
										"blur",
										"grayscale",
										"height",
										"random",
										"width",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"get_random_square_image": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"name": "get_random_square_image",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "size",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "blur",
											"orig": "blur",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "grayscale",
											"orig": "grayscale",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{size}",
								"parts": []any{
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"size": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"blur",
										"grayscale",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"height": map[string]any{
				"fields": []any{},
				"name": "height",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "height",
											"orig": "height",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "width",
											"orig": "width",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "blur",
											"orig": "blur",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "grayscale",
											"orig": "grayscale",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{width}/{height}.jpg",
								"parts": []any{
									"{width}",
									"{height}.jpg",
								},
								"select": map[string]any{
									"exist": []any{
										"blur",
										"grayscale",
										"height",
										"width",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"heightwebp": map[string]any{
				"fields": []any{},
				"name": "heightwebp",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "height",
											"orig": "height",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "width",
											"orig": "width",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "blur",
											"orig": "blur",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "grayscale",
											"orig": "grayscale",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{width}/{height}.webp",
								"parts": []any{
									"{width}",
									"{height}.webp",
								},
								"select": map[string]any{
									"exist": []any{
										"blur",
										"grayscale",
										"height",
										"width",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"id_info": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "author",
						"req": true,
						"short": "Name of the image author",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "download_url",
						"req": true,
						"short": "URL to download the image from Picsum",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "height",
						"req": true,
						"short": "Original height of the image in pixels",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"req": true,
						"short": "URL to the original image on Unsplash",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "width",
						"req": true,
						"short": "Original width of the image in pixels",
						"type": "`$INTEGER`",
					},
				},
				"name": "id_info",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/id/{id}/info",
								"parts": []any{
									"id",
									"{id}",
									"info",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"idn": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"name": "idn",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "height",
											"orig": "height",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "width",
											"orig": "width",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "blur",
											"orig": "blur",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "grayscale",
											"orig": "grayscale",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/id/{id}/{width}/{height}",
								"parts": []any{
									"id",
									"{id}",
									"{width}",
									"{height}",
								},
								"select": map[string]any{
									"exist": []any{
										"blur",
										"grayscale",
										"height",
										"id",
										"width",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "author",
						"req": true,
						"short": "Name of the image author",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "download_url",
						"req": true,
						"short": "URL to download the image from Picsum",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "height",
						"req": true,
						"short": "Original height of the image in pixels",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"req": true,
						"short": "URL to the original image on Unsplash",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "width",
						"req": true,
						"short": "Original width of the image in pixels",
						"type": "`$INTEGER`",
					},
				},
				"name": "list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 30,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v2/list",
								"parts": []any{
									"v2",
									"list",
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"seed": map[string]any{
				"fields": []any{},
				"name": "seed",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "height",
											"orig": "height",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "seed",
											"orig": "seed",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "width",
											"orig": "width",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "blur",
											"orig": "blur",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "grayscale",
											"orig": "grayscale",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/seed/{seed}/{width}/{height}",
								"parts": []any{
									"seed",
									"{seed}",
									"{width}",
									"{height}",
								},
								"select": map[string]any{
									"exist": []any{
										"blur",
										"grayscale",
										"height",
										"seed",
										"width",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"seed",
						},
					},
				},
			},
			"seed_info": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "author",
						"req": true,
						"short": "Name of the image author",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "download_url",
						"req": true,
						"short": "URL to download the image from Picsum",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "height",
						"req": true,
						"short": "Original height of the image in pixels",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"req": true,
						"short": "URL to the original image on Unsplash",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "width",
						"req": true,
						"short": "Original width of the image in pixels",
						"type": "`$INTEGER`",
					},
				},
				"name": "seed_info",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "seed",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/seed/{seed}/info",
								"parts": []any{
									"seed",
									"{id}",
									"info",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"seed": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
