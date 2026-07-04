# LoremPicsum Lua SDK Reference

Complete API reference for the LoremPicsum Lua SDK.


## LoremPicsumSDK

### Constructor

```lua
local sdk = require("lorem-picsum_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `GetRandomImage(data)`

Create a new `GetRandomImage` entity instance. Pass `nil` for no initial data.

#### `GetRandomSquareImage(data)`

Create a new `GetRandomSquareImage` entity instance. Pass `nil` for no initial data.

#### `Height(data)`

Create a new `Height` entity instance. Pass `nil` for no initial data.

#### `Heightwebp(data)`

Create a new `Heightwebp` entity instance. Pass `nil` for no initial data.

#### `IdInfo(data)`

Create a new `IdInfo` entity instance. Pass `nil` for no initial data.

#### `Idn(data)`

Create a new `Idn` entity instance. Pass `nil` for no initial data.

#### `List(data)`

Create a new `List` entity instance. Pass `nil` for no initial data.

#### `Seed(data)`

Create a new `Seed` entity instance. Pass `nil` for no initial data.

#### `SeedInfo(data)`

Create a new `SeedInfo` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## GetRandomImageEntity

```lua
local get_random_image = client:get_random_image(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:get_random_image():load({ id = "get_random_image_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GetRandomImageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GetRandomSquareImageEntity

```lua
local get_random_square_image = client:get_random_square_image(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:get_random_square_image():load({ id = "get_random_square_image_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GetRandomSquareImageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HeightEntity

```lua
local height = client:height(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:height():load({ id = "height_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HeightEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HeightwebpEntity

```lua
local heightwebp = client:heightwebp(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:heightwebp():load({ id = "heightwebp_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HeightwebpEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IdInfoEntity

```lua
local id_info = client:id_info(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | ``$STRING`` | Yes |  |
| `download_url` | ``$STRING`` | Yes |  |
| `height` | ``$INTEGER`` | Yes |  |
| `id` | ``$STRING`` | Yes |  |
| `url` | ``$STRING`` | Yes |  |
| `width` | ``$INTEGER`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:id_info():load({ id = "id_info_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IdInfoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IdnEntity

```lua
local idn = client:idn(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:idn():load({ id = "idn_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IdnEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListEntity

```lua
local list = client:list(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | ``$STRING`` | Yes |  |
| `download_url` | ``$STRING`` | Yes |  |
| `height` | ``$INTEGER`` | Yes |  |
| `id` | ``$STRING`` | Yes |  |
| `url` | ``$STRING`` | Yes |  |
| `width` | ``$INTEGER`` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:list():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SeedEntity

```lua
local seed = client:seed(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:seed():load({ id = "seed_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeedEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SeedInfoEntity

```lua
local seed_info = client:seed_info(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | ``$STRING`` | Yes |  |
| `download_url` | ``$STRING`` | Yes |  |
| `height` | ``$INTEGER`` | Yes |  |
| `id` | ``$STRING`` | Yes |  |
| `url` | ``$STRING`` | Yes |  |
| `width` | ``$INTEGER`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:seed_info():load({ id = "seed_info_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeedInfoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

