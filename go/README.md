# LoremPicsum Golang SDK



The Golang SDK for the LoremPicsum API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/lorem-picsum-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/lorem-picsum-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/lorem-picsum-sdk/go=../lorem-picsum-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```go
package main

import (
    "fmt"

    sdk "github.com/voxgig-sdk/lorem-picsum-sdk/go"
    "github.com/voxgig-sdk/lorem-picsum-sdk/go/core"
)

func main() {
    client := sdk.New()
```

### 3. Load a getrandomimage

```go
    result, err = client.GetRandomImage(nil).Load(
        map[string]any{"id": "example_id"}, nil,
    )
    if err != nil {
        panic(err)
    }

    rm = core.ToMapAny(result)
    if rm["ok"] == true {
        fmt.Println(rm["data"])
    }
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

result, err := client.GetRandomImage(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
// result contains mock response data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewLoremPicsumSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
LOREM_PICSUM_TEST_LIVE=TRUE
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewLoremPicsumSDK

```go
func NewLoremPicsumSDK(options map[string]any) *LoremPicsumSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *LoremPicsumSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### LoremPicsumSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `GetRandomImage` | `(data map[string]any) LoremPicsumEntity` | Create a GetRandomImage entity instance. |
| `GetRandomSquareImage` | `(data map[string]any) LoremPicsumEntity` | Create a GetRandomSquareImage entity instance. |
| `Height` | `(data map[string]any) LoremPicsumEntity` | Create a Height entity instance. |
| `Heightwebp` | `(data map[string]any) LoremPicsumEntity` | Create a Heightwebp entity instance. |
| `IdInfo` | `(data map[string]any) LoremPicsumEntity` | Create a IdInfo entity instance. |
| `Idn` | `(data map[string]any) LoremPicsumEntity` | Create a Idn entity instance. |
| `List` | `(data map[string]any) LoremPicsumEntity` | Create a List entity instance. |
| `Seed` | `(data map[string]any) LoremPicsumEntity` | Create a Seed entity instance. |
| `SeedInfo` | `(data map[string]any) LoremPicsumEntity` | Create a SeedInfo entity instance. |

### Entity interface (LoremPicsumEntity)

All entities implement the `LoremPicsumEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(any, error)`. The `any` value is a
`map[string]any` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `"ok"` | `bool` | `true` if the HTTP status is 2xx. |
| `"status"` | `int` | HTTP status code. |
| `"headers"` | `map[string]any` | Response headers. |
| `"data"` | `any` | Parsed JSON response body. |

On error, `"ok"` is `false` and `"err"` contains the error value.

### Entities

#### GetRandomImage

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/{width}/{height}`

#### GetRandomSquareImage

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/{size}`

#### Height

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/{width}/{height}.jpg`

#### Heightwebp

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/{width}/{height}.webp`

#### IdInfo

| Field | Description |
| --- | --- |
| `"author"` |  |
| `"download_url"` |  |
| `"height"` |  |
| `"id"` |  |
| `"url"` |  |
| `"width"` |  |

Operations: Load.

API path: `/id/{id}/info`

#### Idn

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/id/{id}/{width}/{height}`

#### List

| Field | Description |
| --- | --- |
| `"author"` |  |
| `"download_url"` |  |
| `"height"` |  |
| `"id"` |  |
| `"url"` |  |
| `"width"` |  |

Operations: List.

API path: `/v2/list`

#### Seed

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/seed/{seed}/{width}/{height}`

#### SeedInfo

| Field | Description |
| --- | --- |
| `"author"` |  |
| `"download_url"` |  |
| `"height"` |  |
| `"id"` |  |
| `"url"` |  |
| `"width"` |  |

Operations: Load.

API path: `/seed/{seed}/info`



## Entities


### GetRandomImage

Create an instance: `get_random_image := client.GetRandomImage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
result, err := client.GetRandomImage(nil).Load(map[string]any{"id": "get_random_image_id"}, nil)
```


### GetRandomSquareImage

Create an instance: `get_random_square_image := client.GetRandomSquareImage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
result, err := client.GetRandomSquareImage(nil).Load(map[string]any{"id": "get_random_square_image_id"}, nil)
```


### Height

Create an instance: `height := client.Height(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
result, err := client.Height(nil).Load(map[string]any{"id": "height_id"}, nil)
```


### Heightwebp

Create an instance: `heightwebp := client.Heightwebp(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
result, err := client.Heightwebp(nil).Load(map[string]any{"id": "heightwebp_id"}, nil)
```


### IdInfo

Create an instance: `id_info := client.IdInfo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | ``$STRING`` |  |
| `download_url` | ``$STRING`` |  |
| `height` | ``$INTEGER`` |  |
| `id` | ``$STRING`` |  |
| `url` | ``$STRING`` |  |
| `width` | ``$INTEGER`` |  |

#### Example: Load

```go
result, err := client.IdInfo(nil).Load(map[string]any{"id": "id_info_id"}, nil)
```


### Idn

Create an instance: `idn := client.Idn(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
result, err := client.Idn(nil).Load(map[string]any{"id": "idn_id"}, nil)
```


### List

Create an instance: `list := client.List(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | ``$STRING`` |  |
| `download_url` | ``$STRING`` |  |
| `height` | ``$INTEGER`` |  |
| `id` | ``$STRING`` |  |
| `url` | ``$STRING`` |  |
| `width` | ``$INTEGER`` |  |

#### Example: List

```go
results, err := client.List(nil).List(nil, nil)
```


### Seed

Create an instance: `seed := client.Seed(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
result, err := client.Seed(nil).Load(map[string]any{"id": "seed_id"}, nil)
```


### SeedInfo

Create an instance: `seed_info := client.SeedInfo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `author` | ``$STRING`` |  |
| `download_url` | ``$STRING`` |  |
| `height` | ``$INTEGER`` |  |
| `id` | ``$STRING`` |  |
| `url` | ``$STRING`` |  |
| `width` | ``$INTEGER`` |  |

#### Example: Load

```go
result, err := client.SeedInfo(nil).Load(map[string]any{"id": "seed_info_id"}, nil)
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller. An unexpected panic triggers the
`PreUnexpected` hook.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/lorem-picsum-sdk/go/
├── lorem-picsum.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/lorem-picsum-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
getrandomimage := client.GetRandomImage(nil)
getrandomimage.Load(map[string]any{"id": "example_id"}, nil)

// getrandomimage.Data() now returns the loaded getrandomimage data
// getrandomimage.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
