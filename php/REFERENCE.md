# LoremPicsum PHP SDK Reference

Complete API reference for the LoremPicsum PHP SDK.


## LoremPicsumSDK

### Constructor

```php
require_once __DIR__ . '/lorem-picsum_sdk.php';

$client = new LoremPicsumSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `LoremPicsumSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = LoremPicsumSDK::test();
```


### Instance Methods

#### `GetRandomImage($data = null)`

Create a new `GetRandomImageEntity` instance. Pass `null` for no initial data.

#### `GetRandomSquareImage($data = null)`

Create a new `GetRandomSquareImageEntity` instance. Pass `null` for no initial data.

#### `Height($data = null)`

Create a new `HeightEntity` instance. Pass `null` for no initial data.

#### `Heightwebp($data = null)`

Create a new `HeightwebpEntity` instance. Pass `null` for no initial data.

#### `IdInfo($data = null)`

Create a new `IdInfoEntity` instance. Pass `null` for no initial data.

#### `Idn($data = null)`

Create a new `IdnEntity` instance. Pass `null` for no initial data.

#### `List($data = null)`

Create a new `ListEntity` instance. Pass `null` for no initial data.

#### `Seed($data = null)`

Create a new `SeedEntity` instance. Pass `null` for no initial data.

#### `SeedInfo($data = null)`

Create a new `SeedInfoEntity` instance. Pass `null` for no initial data.

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## GetRandomImageEntity

```php
$get_random_image = $client->get_random_image();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->get_random_image()->load(["id" => "get_random_image_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): GetRandomImageEntity`

Create a new `GetRandomImageEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## GetRandomSquareImageEntity

```php
$get_random_square_image = $client->get_random_square_image();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->get_random_square_image()->load(["id" => "get_random_square_image_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): GetRandomSquareImageEntity`

Create a new `GetRandomSquareImageEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## HeightEntity

```php
$height = $client->height();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->height()->load(["id" => "height_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): HeightEntity`

Create a new `HeightEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## HeightwebpEntity

```php
$heightwebp = $client->heightwebp();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->heightwebp()->load(["id" => "heightwebp_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): HeightwebpEntity`

Create a new `HeightwebpEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## IdInfoEntity

```php
$id_info = $client->id_info();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->id_info()->load(["id" => "id_info_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): IdInfoEntity`

Create a new `IdInfoEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## IdnEntity

```php
$idn = $client->idn();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->idn()->load(["id" => "idn_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): IdnEntity`

Create a new `IdnEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## ListEntity

```php
$list = $client->list();
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

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->list()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): ListEntity`

Create a new `ListEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## SeedEntity

```php
$seed = $client->seed();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->seed()->load(["id" => "seed_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): SeedEntity`

Create a new `SeedEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## SeedInfoEntity

```php
$seed_info = $client->seed_info();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->seed_info()->load(["id" => "seed_info_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): SeedInfoEntity`

Create a new `SeedInfoEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new LoremPicsumSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

