# LoremPicsum TypeScript SDK Reference

Complete API reference for the LoremPicsum TypeScript SDK.


## LoremPicsumSDK

### Constructor

```ts
new LoremPicsumSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `LoremPicsumSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = LoremPicsumSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `LoremPicsumSDK` instance in test mode.


### Instance Methods

#### `GetRandomImage(data?: object)`

Create a new `GetRandomImage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GetRandomImageEntity` instance.

#### `GetRandomSquareImage(data?: object)`

Create a new `GetRandomSquareImage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GetRandomSquareImageEntity` instance.

#### `Height(data?: object)`

Create a new `Height` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HeightEntity` instance.

#### `Heightwebp(data?: object)`

Create a new `Heightwebp` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HeightwebpEntity` instance.

#### `IdInfo(data?: object)`

Create a new `IdInfo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IdInfoEntity` instance.

#### `Idn(data?: object)`

Create a new `Idn` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IdnEntity` instance.

#### `List(data?: object)`

Create a new `List` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListEntity` instance.

#### `Seed(data?: object)`

Create a new `Seed` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeedEntity` instance.

#### `SeedInfo(data?: object)`

Create a new `SeedInfo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeedInfoEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `LoremPicsumSDK.test()`.

**Returns:** `LoremPicsumSDK` instance in test mode.


---

## GetRandomImageEntity

```ts
const get_random_image = client.GetRandomImage()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GetRandomImage().load({ height: 1, width: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GetRandomImageEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoremPicsumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GetRandomSquareImageEntity

```ts
const get_random_square_image = client.GetRandomSquareImage()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GetRandomSquareImage().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GetRandomSquareImageEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoremPicsumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HeightEntity

```ts
const height = client.Height()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Height().load({ height: 1, width: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HeightEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoremPicsumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HeightwebpEntity

```ts
const heightwebp = client.Heightwebp()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Heightwebp().load({ height: 1, width: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HeightwebpEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoremPicsumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IdInfoEntity

```ts
const id_info = client.IdInfo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `string` | Yes |  |
| `download_url` | `string` | Yes |  |
| `height` | `number` | Yes |  |
| `id` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `width` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IdInfo().load({ id: 'id_info_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IdInfoEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoremPicsumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IdnEntity

```ts
const idn = client.Idn()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Idn().load({ id: 'idn_id', height: 1, width: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IdnEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoremPicsumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListEntity

```ts
const list = client.List()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `string` | Yes |  |
| `download_url` | `string` | Yes |  |
| `height` | `number` | Yes |  |
| `id` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `width` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.List().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoremPicsumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeedEntity

```ts
const seed = client.Seed()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Seed().load({ height: 1, seed: 'seed', width: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeedEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoremPicsumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeedInfoEntity

```ts
const seed_info = client.SeedInfo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `string` | Yes |  |
| `download_url` | `string` | Yes |  |
| `height` | `number` | Yes |  |
| `id` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `width` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SeedInfo().load({ id: 'seed_info_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeedInfoEntity` instance with the same client and
options.

#### `client()`

Return the parent `LoremPicsumSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new LoremPicsumSDK({
  feature: {
    test: { active: true },
  }
})
```

