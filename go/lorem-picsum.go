package voxgiglorempicsumsdk

import (
	"github.com/voxgig-sdk/lorem-picsum-sdk/go/core"
	"github.com/voxgig-sdk/lorem-picsum-sdk/go/entity"
	"github.com/voxgig-sdk/lorem-picsum-sdk/go/feature"
	_ "github.com/voxgig-sdk/lorem-picsum-sdk/go/utility"
)

// Type aliases preserve external API.
type LoremPicsumSDK = core.LoremPicsumSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type LoremPicsumEntity = core.LoremPicsumEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type LoremPicsumError = core.LoremPicsumError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewGetRandomImageEntityFunc = func(client *core.LoremPicsumSDK, entopts map[string]any) core.LoremPicsumEntity {
		return entity.NewGetRandomImageEntity(client, entopts)
	}
	core.NewGetRandomSquareImageEntityFunc = func(client *core.LoremPicsumSDK, entopts map[string]any) core.LoremPicsumEntity {
		return entity.NewGetRandomSquareImageEntity(client, entopts)
	}
	core.NewHeightEntityFunc = func(client *core.LoremPicsumSDK, entopts map[string]any) core.LoremPicsumEntity {
		return entity.NewHeightEntity(client, entopts)
	}
	core.NewHeightwebpEntityFunc = func(client *core.LoremPicsumSDK, entopts map[string]any) core.LoremPicsumEntity {
		return entity.NewHeightwebpEntity(client, entopts)
	}
	core.NewIdInfoEntityFunc = func(client *core.LoremPicsumSDK, entopts map[string]any) core.LoremPicsumEntity {
		return entity.NewIdInfoEntity(client, entopts)
	}
	core.NewIdnEntityFunc = func(client *core.LoremPicsumSDK, entopts map[string]any) core.LoremPicsumEntity {
		return entity.NewIdnEntity(client, entopts)
	}
	core.NewListEntityFunc = func(client *core.LoremPicsumSDK, entopts map[string]any) core.LoremPicsumEntity {
		return entity.NewListEntity(client, entopts)
	}
	core.NewSeedEntityFunc = func(client *core.LoremPicsumSDK, entopts map[string]any) core.LoremPicsumEntity {
		return entity.NewSeedEntity(client, entopts)
	}
	core.NewSeedInfoEntityFunc = func(client *core.LoremPicsumSDK, entopts map[string]any) core.LoremPicsumEntity {
		return entity.NewSeedInfoEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewLoremPicsumSDK = core.NewLoremPicsumSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewLoremPicsumSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *LoremPicsumSDK  { return NewLoremPicsumSDK(nil) }
func Test() *LoremPicsumSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
