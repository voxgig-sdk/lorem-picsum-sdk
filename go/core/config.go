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
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
					"parts": []any{
						"width",
						"height",
					},
					"sep": "/",
				},
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
								"segments": []any{
									map[string]any{
										"var": "width",
									},
									map[string]any{
										"var": "height",
									},
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
								"parts": []any{
									"{width}",
									"{height}",
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
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"rename": map[string]any{
									"param": map[string]any{
										"size": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"{id}",
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
								"segments": []any{
									map[string]any{
										"var": "width",
									},
									map[string]any{
										"lit": "{height}.jpg",
									},
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
								"parts": []any{
									"{width}",
									"{height}.jpg",
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
								"segments": []any{
									map[string]any{
										"var": "width",
									},
									map[string]any{
										"lit": "{height}.webp",
									},
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
								"parts": []any{
									"{width}",
									"{height}.webp",
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
						"format": "uri",
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
						"format": "uri",
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
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"segments": []any{
									map[string]any{
										"lit": "id",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "info",
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
								"parts": []any{
									"id",
									"{id}",
									"info",
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
				"id": map[string]any{
					"field": "id",
					"name": "id",
					"parts": []any{
						"id",
						"width",
						"height",
					},
					"sep": "/",
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
								"segments": []any{
									map[string]any{
										"lit": "id",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"var": "width",
									},
									map[string]any{
										"var": "height",
									},
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
								"parts": []any{
									"id",
									"{id}",
									"{width}",
									"{height}",
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
						"format": "uri",
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
						"format": "uri",
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
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"segments": []any{
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "list",
									},
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
								"parts": []any{
									"v2",
									"list",
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
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
					"parts": []any{
						"seed",
						"width",
						"height",
					},
					"sep": "/",
				},
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
								"segments": []any{
									map[string]any{
										"lit": "seed",
									},
									map[string]any{
										"var": "seed",
									},
									map[string]any{
										"var": "width",
									},
									map[string]any{
										"var": "height",
									},
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
								"parts": []any{
									"seed",
									"{seed}",
									"{width}",
									"{height}",
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
						"format": "uri",
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
						"format": "uri",
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
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"rename": map[string]any{
									"param": map[string]any{
										"seed": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "seed",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "info",
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
								"parts": []any{
									"seed",
									"{id}",
									"info",
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
