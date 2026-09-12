// Typed models for the LoremPicsum SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/lorem-picsum-sdk/go/core"
)

// GetRandomImage is the typed data model for the get_random_image entity.
type GetRandomImage struct {
	Id *string `json:"id,omitempty"`
}

// GetRandomImageLoadMatch is the typed request payload for GetRandomImage.LoadTyped.
type GetRandomImageLoadMatch struct {
	Height int `json:"height"`
	Width int `json:"width"`
	Blur *int `json:"blur,omitempty"`
	Grayscale *bool `json:"grayscale,omitempty"`
	Random *int `json:"random,omitempty"`
}

// GetRandomSquareImage is the typed data model for the get_random_square_image entity.
type GetRandomSquareImage struct {
	Id *string `json:"id,omitempty"`
}

// GetRandomSquareImageLoadMatch is the typed request payload for GetRandomSquareImage.LoadTyped.
type GetRandomSquareImageLoadMatch struct {
	Id int `json:"id"`
	Blur *int `json:"blur,omitempty"`
	Grayscale *bool `json:"grayscale,omitempty"`
}

// Height is the typed data model for the height entity.
type Height struct {
}

// HeightLoadMatch is the typed request payload for Height.LoadTyped.
type HeightLoadMatch struct {
	Height int `json:"height"`
	Width int `json:"width"`
	Blur *int `json:"blur,omitempty"`
	Grayscale *bool `json:"grayscale,omitempty"`
}

// Heightwebp is the typed data model for the heightwebp entity.
type Heightwebp struct {
}

// HeightwebpLoadMatch is the typed request payload for Heightwebp.LoadTyped.
type HeightwebpLoadMatch struct {
	Height int `json:"height"`
	Width int `json:"width"`
	Blur *int `json:"blur,omitempty"`
	Grayscale *bool `json:"grayscale,omitempty"`
}

// IdInfo is the typed data model for the id_info entity.
type IdInfo struct {
	Author string `json:"author"`
	DownloadUrl string `json:"download_url"`
	Height int `json:"height"`
	Id string `json:"id"`
	Url string `json:"url"`
	Width int `json:"width"`
}

// IdInfoLoadMatch is the typed request payload for IdInfo.LoadTyped.
type IdInfoLoadMatch struct {
	Id string `json:"id"`
}

// Idn is the typed data model for the idn entity.
type Idn struct {
	Id *string `json:"id,omitempty"`
}

// IdnLoadMatch is the typed request payload for Idn.LoadTyped.
type IdnLoadMatch struct {
	Height int `json:"height"`
	Id string `json:"id"`
	Width int `json:"width"`
	Blur *int `json:"blur,omitempty"`
	Grayscale *bool `json:"grayscale,omitempty"`
}

// List is the typed data model for the list entity.
type List struct {
	Author string `json:"author"`
	DownloadUrl string `json:"download_url"`
	Height int `json:"height"`
	Id string `json:"id"`
	Url string `json:"url"`
	Width int `json:"width"`
}

// ListListMatch is the typed request payload for List.ListTyped.
type ListListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
}

// Seed is the typed data model for the seed entity.
type Seed struct {
	Id *string `json:"id,omitempty"`
}

// SeedLoadMatch is the typed request payload for Seed.LoadTyped.
type SeedLoadMatch struct {
	Height int `json:"height"`
	Seed string `json:"seed"`
	Width int `json:"width"`
	Blur *int `json:"blur,omitempty"`
	Grayscale *bool `json:"grayscale,omitempty"`
}

// SeedInfo is the typed data model for the seed_info entity.
type SeedInfo struct {
	Author string `json:"author"`
	DownloadUrl string `json:"download_url"`
	Height int `json:"height"`
	Id string `json:"id"`
	Url string `json:"url"`
	Width int `json:"width"`
}

// SeedInfoLoadMatch is the typed request payload for SeedInfo.LoadTyped.
type SeedInfoLoadMatch struct {
	Id string `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
