# LoremPicsum TypeScript SDK



The TypeScript SDK for the LoremPicsum API — a type-safe, entity-oriented client with full async/await support.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
npm install lorem-picsum
```
## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { LoremPicsumSDK } from 'lorem-picsum'

const client = new LoremPicsumSDK({
  apikey: process.env.LOREM-PICSUM_APIKEY,
})
```

### 3. Load a getrandomimage

```ts
const result = await client.GetRandomImage().load({ id: 'example_id' })

if (result.ok) {
  console.log(result.data)
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = LoremPicsumSDK.test()

const result = await client.Planet().load({ id: 'test01' })
// result.ok === true
// result.data contains mock response data
```

You can also use the instance method:

```ts
const client = new LoremPicsumSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Planet()

// First call sets internal match
await entity.load({ id: 'example' })

// Subsequent calls reuse the stored match
const data = entity.data()
console.log(data.id) // 'example'
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new LoremPicsumSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
LOREM-PICSUM_TEST_LIVE=TRUE
LOREM-PICSUM_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```


## Reference

### LoremPicsumSDK

#### Constructor

```ts
new LoremPicsumSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `GetRandomImage(data?)` | `GetRandomImageEntity` | Create a GetRandomImage entity instance. |
| `GetRandomSquareImage(data?)` | `GetRandomSquareImageEntity` | Create a GetRandomSquareImage entity instance. |
| `Height(data?)` | `HeightEntity` | Create a Height entity instance. |
| `Heightwebp(data?)` | `HeightwebpEntity` | Create a Heightwebp entity instance. |
| `IdInfo(data?)` | `IdInfoEntity` | Create a IdInfo entity instance. |
| `Idn(data?)` | `IdnEntity` | Create a Idn entity instance. |
| `List(data?)` | `ListEntity` | Create a List entity instance. |
| `Seed(data?)` | `SeedEntity` | Create a Seed entity instance. |
| `SeedInfo(data?)` | `SeedInfoEntity` | Create a SeedInfo entity instance. |
| `tester(testopts?, sdkopts?)` | `LoremPicsumSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `LoremPicsumSDK.test(testopts?, sdkopts?)` | `LoremPicsumSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Result>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Result>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Result>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Result>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<Result>` | Remove an entity. |
| `data` | `data(data?): any` | Get or set entity data. |
| `match` | `match(match?): any` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): LoremPicsumSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Result shape

All entity operations return a Result object:

```ts
{
  ok: boolean      // true if the HTTP status is 2xx
  status: number   // HTTP status code
  headers: object  // response headers
  data: any        // parsed JSON response body
}
```

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### GetRandomImage

| Field | Description |
| --- | --- |

Operations: load.

API path: `/{width}/{height}`

#### GetRandomSquareImage

| Field | Description |
| --- | --- |

Operations: load.

API path: `/{size}`

#### Height

| Field | Description |
| --- | --- |

Operations: load.

API path: `/{width}/{height}.jpg`

#### Heightwebp

| Field | Description |
| --- | --- |

Operations: load.

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

Operations: load.

API path: `/id/{id}/info`

#### Idn

| Field | Description |
| --- | --- |

Operations: load.

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

Operations: list.

API path: `/v2/list`

#### Seed

| Field | Description |
| --- | --- |

Operations: load.

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

Operations: load.

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
error is returned to the caller.

An unexpected exception triggers the `PreUnexpected` hook before
propagating.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
lorem-picsum/
├── src/
│   ├── LoremPicsumSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { LoremPicsumSDK } from 'lorem-picsum'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const moon = client.Moon()
await moon.load({ planet_id: 'earth', id: 'luna' })

// moon.data() now returns the loaded moon data
// moon.match() returns { planet_id: 'earth', id: 'luna' }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
