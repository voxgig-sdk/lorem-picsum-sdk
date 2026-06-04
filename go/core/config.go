package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "LoremPicsum",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
											"active": true,
										},
										map[string]any{
											"kind": "param",
											"name": "width",
											"orig": "width",
											"reqd": true,
											"type": "`$INTEGER`",
											"active": true,
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "blur",
											"orig": "blur",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "grayscale",
											"orig": "grayscale",
											"reqd": false,
											"type": "`$BOOLEAN`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "random",
											"orig": "random",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"get_random_square_image": map[string]any{
				"fields": []any{},
				"name": "get_random_square_image",
				"op": map[string]any{
					"load": map[string]any{
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
											"active": true,
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "blur",
											"orig": "blur",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "grayscale",
											"orig": "grayscale",
											"reqd": false,
											"type": "`$BOOLEAN`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
											"active": true,
										},
										map[string]any{
											"kind": "param",
											"name": "width",
											"orig": "width",
											"reqd": true,
											"type": "`$INTEGER`",
											"active": true,
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "blur",
											"orig": "blur",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "grayscale",
											"orig": "grayscale",
											"reqd": false,
											"type": "`$BOOLEAN`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
											"active": true,
										},
										map[string]any{
											"kind": "param",
											"name": "width",
											"orig": "width",
											"reqd": true,
											"type": "`$INTEGER`",
											"active": true,
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "blur",
											"orig": "blur",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "grayscale",
											"orig": "grayscale",
											"reqd": false,
											"type": "`$BOOLEAN`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "download_url",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "height",
						"req": true,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "url",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "width",
						"req": true,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 5,
					},
				},
				"name": "id_info",
				"op": map[string]any{
					"load": map[string]any{
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
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"idn": map[string]any{
				"fields": []any{},
				"name": "idn",
				"op": map[string]any{
					"load": map[string]any{
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
											"active": true,
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "param",
											"name": "width",
											"orig": "width",
											"reqd": true,
											"type": "`$INTEGER`",
											"active": true,
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "blur",
											"orig": "blur",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "grayscale",
											"orig": "grayscale",
											"reqd": false,
											"type": "`$BOOLEAN`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "download_url",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "height",
						"req": true,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "url",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "width",
						"req": true,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 5,
					},
				},
				"name": "list",
				"op": map[string]any{
					"list": map[string]any{
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
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
											"active": true,
										},
										map[string]any{
											"kind": "param",
											"name": "seed",
											"orig": "seed",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "param",
											"name": "width",
											"orig": "width",
											"reqd": true,
											"type": "`$INTEGER`",
											"active": true,
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "blur",
											"orig": "blur",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "grayscale",
											"orig": "grayscale",
											"reqd": false,
											"type": "`$BOOLEAN`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "download_url",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "height",
						"req": true,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "url",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "width",
						"req": true,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 5,
					},
				},
				"name": "seed_info",
				"op": map[string]any{
					"load": map[string]any{
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
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
