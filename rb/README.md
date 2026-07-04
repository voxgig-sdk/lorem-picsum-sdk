# LoremPicsum Ruby SDK



The Ruby SDK for the LoremPicsum API — an entity-oriented client using idiomatic Ruby conventions.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/lorem-picsum-sdk/releases](https://github.com/voxgig-sdk/lorem-picsum-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "LoremPicsum_sdk"

client = LoremPicsumSDK.new
```

### 3. Load a getrandomimage

```ruby
begin
  result = client.getrandomimage.load({ "id" => "example_id" })
  puts result
rescue => err
  warn "load failed: #{err}"
end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  warn result["err"]
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = LoremPicsumSDK.test

result = client.getrandomimage.load({ "id" => "test01" })
# result contains mock response data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = LoremPicsumSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### LoremPicsumSDK

```ruby
require_relative "LoremPicsum_sdk"
client = LoremPicsumSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = LoremPicsumSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### LoremPicsumSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
| `GetRandomImage` | `(data) -> GetRandomImageEntity` | Create a GetRandomImage entity instance. |
| `GetRandomSquareImage` | `(data) -> GetRandomSquareImageEntity` | Create a GetRandomSquareImage entity instance. |
| `Height` | `(data) -> HeightEntity` | Create a Height entity instance. |
| `Heightwebp` | `(data) -> HeightwebpEntity` | Create a Heightwebp entity instance. |
| `IdInfo` | `(data) -> IdInfoEntity` | Create a IdInfo entity instance. |
| `Idn` | `(data) -> IdnEntity` | Create a Idn entity instance. |
| `List` | `(data) -> ListEntity` | Create a List entity instance. |
| `Seed` | `(data) -> SeedEntity` | Create a Seed entity instance. |
| `SeedInfo` | `(data) -> SeedInfoEntity` | Create a SeedInfo entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> Array` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `LoremPicsumError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

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
| `author` |  |
| `download_url` |  |
| `height` |  |
| `id` |  |
| `url` |  |
| `width` |  |

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
| `author` |  |
| `download_url` |  |
| `height` |  |
| `id` |  |
| `url` |  |
| `width` |  |

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
| `author` |  |
| `download_url` |  |
| `height` |  |
| `id` |  |
| `url` |  |
| `width` |  |

Operations: Load.

API path: `/seed/{seed}/info`



## Entities


### GetRandomImage

Create an instance: `const get_random_image = client.get_random_image`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const get_random_image = await client.get_random_image.load({ id: 'get_random_image_id' })
```


### GetRandomSquareImage

Create an instance: `const get_random_square_image = client.get_random_square_image`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const get_random_square_image = await client.get_random_square_image.load({ id: 'get_random_square_image_id' })
```


### Height

Create an instance: `const height = client.height`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const height = await client.height.load({ id: 'height_id' })
```


### Heightwebp

Create an instance: `const heightwebp = client.heightwebp`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const heightwebp = await client.heightwebp.load({ id: 'heightwebp_id' })
```


### IdInfo

Create an instance: `const id_info = client.id_info`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

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

```ts
const id_info = await client.id_info.load({ id: 'id_info_id' })
```


### Idn

Create an instance: `const idn = client.idn`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const idn = await client.idn.load({ id: 'idn_id' })
```


### List

Create an instance: `const list = client.list`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

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

```ts
const lists = await client.list.list()
```


### Seed

Create an instance: `const seed = client.seed`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const seed = await client.seed.load({ id: 'seed_id' })
```


### SeedInfo

Create an instance: `const seed_info = client.seed_info`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

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

```ts
const seed_info = await client.seed_info.load({ id: 'seed_info_id' })
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
error is returned to the caller as a second return value.

### Features and hooks

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── LoremPicsum_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`LoremPicsum_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```ruby
getrandomimage = client.getrandomimage
getrandomimage.load({ "id" => "example_id" })

# getrandomimage.data_get now returns the loaded getrandomimage data
# getrandomimage.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
