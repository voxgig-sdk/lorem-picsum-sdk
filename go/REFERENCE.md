# LoremPicsum Golang SDK Reference

Complete API reference for the LoremPicsum Golang SDK.


## LoremPicsumSDK

### Constructor

```go
func NewLoremPicsumSDK(options map[string]any) *LoremPicsumSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *LoremPicsumSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *LoremPicsumSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `GetRandomImage(data map[string]any) LoremPicsumEntity`

Create a new `GetRandomImage` entity instance. Pass `nil` for no initial data.

#### `GetRandomSquareImage(data map[string]any) LoremPicsumEntity`

Create a new `GetRandomSquareImage` entity instance. Pass `nil` for no initial data.

#### `Height(data map[string]any) LoremPicsumEntity`

Create a new `Height` entity instance. Pass `nil` for no initial data.

#### `Heightwebp(data map[string]any) LoremPicsumEntity`

Create a new `Heightwebp` entity instance. Pass `nil` for no initial data.

#### `IdInfo(data map[string]any) LoremPicsumEntity`

Create a new `IdInfo` entity instance. Pass `nil` for no initial data.

#### `Idn(data map[string]any) LoremPicsumEntity`

Create a new `Idn` entity instance. Pass `nil` for no initial data.

#### `List(data map[string]any) LoremPicsumEntity`

Create a new `List` entity instance. Pass `nil` for no initial data.

#### `Seed(data map[string]any) LoremPicsumEntity`

Create a new `Seed` entity instance. Pass `nil` for no initial data.

#### `SeedInfo(data map[string]any) LoremPicsumEntity`

Create a new `SeedInfo` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## GetRandomImageEntity

```go
get_random_image := client.GetRandomImage(nil)
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GetRandomImage(nil).Load(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GetRandomImageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GetRandomSquareImageEntity

```go
get_random_square_image := client.GetRandomSquareImage(nil)
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GetRandomSquareImage(nil).Load(map[string]any{"id": "get_random_square_image_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GetRandomSquareImageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HeightEntity

```go
height := client.Height(nil)
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Height(nil).Load(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HeightEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HeightwebpEntity

```go
heightwebp := client.Heightwebp(nil)
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Heightwebp(nil).Load(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HeightwebpEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IdInfoEntity

```go
id_info := client.IdInfo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `string` | Yes |  |
| `download_url` | `string` | Yes |  |
| `height` | `int` | Yes |  |
| `id` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `width` | `int` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IdInfo(nil).Load(map[string]any{"id": "id_info_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IdInfoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IdnEntity

```go
idn := client.Idn(nil)
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Idn(nil).Load(map[string]any{"id": "idn_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IdnEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListEntity

```go
list := client.List(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `string` | Yes |  |
| `download_url` | `string` | Yes |  |
| `height` | `int` | Yes |  |
| `id` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `width` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.List(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SeedEntity

```go
seed := client.Seed(nil)
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Seed(nil).Load(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SeedEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SeedInfoEntity

```go
seed_info := client.SeedInfo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `string` | Yes |  |
| `download_url` | `string` | Yes |  |
| `height` | `int` | Yes |  |
| `id` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `width` | `int` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SeedInfo(nil).Load(map[string]any{"id": "seed_info_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SeedInfoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewLoremPicsumSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

