# LoremPicsum SDK



Available for [Golang](go/) and [Lua](lua/) and [PHP](php/) and [Python](py/) and [Ruby](rb/) and [TypeScript](ts/).


## Entities

The API exposes 9 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **GetRandomImage** |  | `/{width}/{height}` |
| **GetRandomSquareImage** |  | `/{size}` |
| **Height** |  | `/{width}/{height}.jpg` |
| **Heightwebp** |  | `/{width}/{height}.webp` |
| **IdInfo** |  | `/id/{id}/info` |
| **Idn** |  | `/id/{id}/{width}/{height}` |
| **List** |  | `/v2/list` |
| **Seed** |  | `/seed/{seed}/{width}/{height}` |
| **SeedInfo** |  | `/seed/{seed}/info` |

Each entity supports the following operations where available: **load**, **list**, **create**,
**update**, and **remove**.


## Architecture

### Entity-operation model

Every SDK call follows the same pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

At each stage a feature hook fires (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), allowing features to inspect or modify the pipeline.

### Features

Features are hook-based middleware that extend SDK behaviour.

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

You can add custom features by passing them in the `extend` option at
construction time.

### Direct and Prepare

For endpoints not covered by the entity model, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`, `headers`,
and `body`.


## Quick start

### Golang

```go
import sdk "github.com/voxgig-sdk/lorem-picsum-sdk"

client := sdk.NewLoremPicsumSDK(map[string]any{
    "apikey": os.Getenv("LOREM-PICSUM_APIKEY"),
})

```

### Lua

```lua
local sdk = require("lorem-picsum_sdk")

local client = sdk.new({
  apikey = os.getenv("LOREM-PICSUM_APIKEY"),
})


-- Load a specific getrandomimage
local getrandomimage, err = client:GetRandomImage(nil):load(
  { id = "example_id" }, nil
)
```

### PHP

```php
<?php
require_once 'lorempicsum_sdk.php';

$client = new LoremPicsumSDK([
    "apikey" => getenv("LOREM-PICSUM_APIKEY"),
]);


// Load a specific getrandomimage
[$getrandomimage, $err] = $client->GetRandomImage(null)->load(
    ["id" => "example_id"], null
);
```

### Python

```python
import os
from lorempicsum_sdk import LoremPicsumSDK

client = LoremPicsumSDK({
    "apikey": os.environ.get("LOREM-PICSUM_APIKEY"),
})


# Load a specific getrandomimage
getrandomimage, err = client.GetRandomImage(None).load(
    {"id": "example_id"}, None
)
```

### Ruby

```ruby
require_relative "LoremPicsum_sdk"

client = LoremPicsumSDK.new({
  "apikey" => ENV["LOREM-PICSUM_APIKEY"],
})


# Load a specific getrandomimage
getrandomimage, err = client.GetRandomImage(nil).load(
  { "id" => "example_id" }, nil
)
```

### TypeScript

```ts
import { LoremPicsumSDK } from 'lorem-picsum'

const client = new LoremPicsumSDK({
  apikey: process.env.LOREM-PICSUM_APIKEY,
})

```


## Testing

Both SDKs provide a test mode that replaces the HTTP transport with an
in-memory mock, so tests run without a network connection.

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.GetRandomImage(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:GetRandomImage(nil):load(
  { id = "test01" }, nil
)
```

### PHP

```php
$client = LoremPicsumSDK::test(null, null);
[$result, $err] = $client->GetRandomImage(null)->load(
    ["id" => "test01"], null
);
```

### Python

```python
client = LoremPicsumSDK.test(None, None)
result, err = client.GetRandomImage(None).load(
    {"id": "test01"}, None
)
```

### Ruby

```ruby
client = LoremPicsumSDK.test(nil, nil)
result, err = client.GetRandomImage(nil).load(
  { "id" => "test01" }, nil
)
```

### TypeScript

```ts
const client = LoremPicsumSDK.test()
const result = await client.GetRandomImage().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```


## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```


## Language-specific documentation

- [Golang SDK](go/README.md)
- [Lua SDK](lua/README.md)
- [PHP SDK](php/README.md)
- [Python SDK](py/README.md)
- [Ruby SDK](rb/README.md)
- [TypeScript SDK](ts/README.md)

