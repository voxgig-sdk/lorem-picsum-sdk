# LoremPicsum PHP SDK



The PHP SDK for the LoremPicsum API — an entity-oriented client using PHP conventions.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
composer require voxgig/lorem-picsum-sdk
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'lorempicsum_sdk.php';

$client = new LoremPicsumSDK([
    "apikey" => getenv("LOREM-PICSUM_APIKEY"),
]);
```

### 3. Load a getrandomimage

```php
[$result, $err] = $client->GetRandomImage()->load(["id" => "example_id"]);
if ($err) { throw new \Exception($err); }
print_r($result);
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
if ($err) { throw new \Exception($err); }

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
}
```

### Prepare a request without sending it

```php
[$fetchdef, $err] = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);
if ($err) { throw new \Exception($err); }

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = LoremPicsumSDK::test();

[$result, $err] = $client->LoremPicsum()->load(["id" => "test01"]);
// $result contains mock response data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new LoremPicsumSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
LOREM-PICSUM_TEST_LIVE=TRUE
LOREM-PICSUM_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### LoremPicsumSDK

```php
require_once 'lorempicsum_sdk.php';
$client = new LoremPicsumSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = LoremPicsumSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### LoremPicsumSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `GetRandomImage` | `($data): GetRandomImageEntity` | Create a GetRandomImage entity instance. |
| `GetRandomSquareImage` | `($data): GetRandomSquareImageEntity` | Create a GetRandomSquareImage entity instance. |
| `Height` | `($data): HeightEntity` | Create a Height entity instance. |
| `Heightwebp` | `($data): HeightwebpEntity` | Create a Heightwebp entity instance. |
| `IdInfo` | `($data): IdInfoEntity` | Create a IdInfo entity instance. |
| `Idn` | `($data): IdnEntity` | Create a Idn entity instance. |
| `List` | `($data): ListEntity` | Create a List entity instance. |
| `Seed` | `($data): SeedEntity` | Create a Seed entity instance. |
| `SeedInfo` | `($data): SeedInfoEntity` | Create a SeedInfo entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `($reqmatch, $ctrl): array` | List entities matching the criteria. |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return `[$result, $err]`. The first value is an
`array` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `const get_random_image = client.GetRandomImage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const get_random_image = await client.GetRandomImage().load({ id: 'get_random_image_id' })
```


### GetRandomSquareImage

Create an instance: `const get_random_square_image = client.GetRandomSquareImage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const get_random_square_image = await client.GetRandomSquareImage().load({ id: 'get_random_square_image_id' })
```


### Height

Create an instance: `const height = client.Height()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const height = await client.Height().load({ id: 'height_id' })
```


### Heightwebp

Create an instance: `const heightwebp = client.Heightwebp()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const heightwebp = await client.Heightwebp().load({ id: 'heightwebp_id' })
```


### IdInfo

Create an instance: `const id_info = client.IdInfo()`

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
const id_info = await client.IdInfo().load({ id: 'id_info_id' })
```


### Idn

Create an instance: `const idn = client.Idn()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const idn = await client.Idn().load({ id: 'idn_id' })
```


### List

Create an instance: `const list = client.List()`

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
const lists = await client.List().list()
```


### Seed

Create an instance: `const seed = client.Seed()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const seed = await client.Seed().load({ id: 'seed_id' })
```


### SeedInfo

Create an instance: `const seed_info = client.SeedInfo()`

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
const seed_info = await client.SeedInfo().load({ id: 'seed_info_id' })
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
error is returned to the caller as the second element in the return array.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── lorempicsum_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`lorempicsum_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$moon = $client->Moon();
[$result, $err] = $moon->load(["planet_id" => "earth", "id" => "luna"]);

// $moon->dataGet() now returns the loaded moon data
// $moon->matchGet() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
