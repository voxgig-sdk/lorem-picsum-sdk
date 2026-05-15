package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGetRandomImageEntityFunc func(client *LoremPicsumSDK, entopts map[string]any) LoremPicsumEntity

var NewGetRandomSquareImageEntityFunc func(client *LoremPicsumSDK, entopts map[string]any) LoremPicsumEntity

var NewHeightEntityFunc func(client *LoremPicsumSDK, entopts map[string]any) LoremPicsumEntity

var NewHeightwebpEntityFunc func(client *LoremPicsumSDK, entopts map[string]any) LoremPicsumEntity

var NewIdInfoEntityFunc func(client *LoremPicsumSDK, entopts map[string]any) LoremPicsumEntity

var NewIdnEntityFunc func(client *LoremPicsumSDK, entopts map[string]any) LoremPicsumEntity

var NewListEntityFunc func(client *LoremPicsumSDK, entopts map[string]any) LoremPicsumEntity

var NewSeedEntityFunc func(client *LoremPicsumSDK, entopts map[string]any) LoremPicsumEntity

var NewSeedInfoEntityFunc func(client *LoremPicsumSDK, entopts map[string]any) LoremPicsumEntity

