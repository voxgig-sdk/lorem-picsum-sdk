# LoremPicsum Ruby SDK Reference

Complete API reference for the LoremPicsum Ruby SDK.


## LoremPicsumSDK

### Constructor

```ruby
require_relative 'LoremPicsum_sdk'

client = LoremPicsumSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `LoremPicsumSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = LoremPicsumSDK.test
```


### Instance Methods

#### `GetRandomImage(data = nil)`

Create a new `GetRandomImage` entity instance. Pass `nil` for no initial data.

#### `GetRandomSquareImage(data = nil)`

Create a new `GetRandomSquareImage` entity instance. Pass `nil` for no initial data.

#### `Height(data = nil)`

Create a new `Height` entity instance. Pass `nil` for no initial data.

#### `Heightwebp(data = nil)`

Create a new `Heightwebp` entity instance. Pass `nil` for no initial data.

#### `IdInfo(data = nil)`

Create a new `IdInfo` entity instance. Pass `nil` for no initial data.

#### `Idn(data = nil)`

Create a new `Idn` entity instance. Pass `nil` for no initial data.

#### `List(data = nil)`

Create a new `List` entity instance. Pass `nil` for no initial data.

#### `Seed(data = nil)`

Create a new `Seed` entity instance. Pass `nil` for no initial data.

#### `SeedInfo(data = nil)`

Create a new `SeedInfo` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## GetRandomImageEntity

```ruby
get_random_image = client.GetRandomImage
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.GetRandomImage.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GetRandomImageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GetRandomSquareImageEntity

```ruby
get_random_square_image = client.GetRandomSquareImage
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.GetRandomSquareImage.load({ "id" => "get_random_square_image_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GetRandomSquareImageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## HeightEntity

```ruby
height = client.Height
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Height.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `HeightEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## HeightwebpEntity

```ruby
heightwebp = client.Heightwebp
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Heightwebp.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `HeightwebpEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IdInfoEntity

```ruby
id_info = client.IdInfo
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `String` | Yes |  |
| `download_url` | `String` | Yes |  |
| `height` | `Integer` | Yes |  |
| `id` | `String` | Yes |  |
| `url` | `String` | Yes |  |
| `width` | `Integer` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.IdInfo.load({ "id" => "id_info_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IdInfoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IdnEntity

```ruby
idn = client.Idn
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Idn.load({ "id" => "idn_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IdnEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListEntity

```ruby
list = client.List
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `String` | Yes |  |
| `download_url` | `String` | Yes |  |
| `height` | `Integer` | Yes |  |
| `id` | `String` | Yes |  |
| `url` | `String` | Yes |  |
| `width` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.List.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SeedEntity

```ruby
seed = client.Seed
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Seed.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SeedEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SeedInfoEntity

```ruby
seed_info = client.SeedInfo
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `String` | Yes |  |
| `download_url` | `String` | Yes |  |
| `height` | `Integer` | Yes |  |
| `id` | `String` | Yes |  |
| `url` | `String` | Yes |  |
| `width` | `Integer` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.SeedInfo.load({ "id" => "seed_info_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SeedInfoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = LoremPicsumSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

