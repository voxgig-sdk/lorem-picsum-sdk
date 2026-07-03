# LoremPicsum SDK

Lorem Picsum client, generated from the OpenAPI spec.

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## Try it

**TypeScript**
```bash
npm install lorem-picsum
```

**Python**
```bash
pip install lorem-picsum-sdk
```

**PHP**
```bash
composer require voxgig/lorem-picsum-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/lorem-picsum-sdk/go
```

**Ruby**
```bash
gem install lorem-picsum-sdk
```

**Lua**
```bash
luarocks install lorem-picsum-sdk
```

## Quickstart

### TypeScript

```ts
import { LoremPicsumSDK } from 'lorem-picsum'

const client = new LoremPicsumSDK({
  apikey: process.env.LOREM-PICSUM_APIKEY,
})

// Load getrandomimage data
const getrandomimage = await client.GetRandomImage().load({})
console.log(getrandomimage.data)
```

See the [TypeScript README](ts/README.md) for the full guide.

## Surfaces

| Surface | Path |
| --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | `go-cli/` |
| **MCP server** | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o lorem-picsum-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "lorem-picsum": {
      "command": "/abs/path/to/lorem-picsum-mcp"
    }
  }
}
```

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

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
import os
from lorempicsum_sdk import LoremPicsumSDK

client = LoremPicsumSDK({
    "apikey": os.environ.get("LOREM-PICSUM_APIKEY"),
})


# Load a specific getrandomimage
getrandomimage, err = client.GetRandomImage().load({"id": "example_id"})
print(getrandomimage)
```

### PHP

```php
<?php
require_once 'lorempicsum_sdk.php';

$client = new LoremPicsumSDK([
    "apikey" => getenv("LOREM-PICSUM_APIKEY"),
]);


// Load a specific getrandomimage
[$getrandomimage, $err] = $client->GetRandomImage()->load(["id" => "example_id"]);
print_r($getrandomimage);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/lorem-picsum-sdk/go"

client := sdk.NewLoremPicsumSDK(map[string]any{
    "apikey": os.Getenv("LOREM-PICSUM_APIKEY"),
})

// Load getrandomimage data
getrandomimage, err := client.GetRandomImage(nil).Load(map[string]any{}, nil)
fmt.Println(getrandomimage)
```

### Ruby

```ruby
require_relative "LoremPicsum_sdk"

client = LoremPicsumSDK.new({
  "apikey" => ENV["LOREM-PICSUM_APIKEY"],
})


# Load a specific getrandomimage
getrandomimage, err = client.GetRandomImage().load({ "id" => "example_id" })
puts getrandomimage
```

### Lua

```lua
local sdk = require("lorem-picsum_sdk")

local client = sdk.new({
  apikey = os.getenv("LOREM-PICSUM_APIKEY"),
})


-- Load a specific getrandomimage
local getrandomimage, err = client:GetRandomImage():load({ id = "example_id" })
print(getrandomimage)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = LoremPicsumSDK.test()
const result = await client.GetRandomImage().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = LoremPicsumSDK.test()
result, err = client.GetRandomImage().load({"id": "test01"})
```

### PHP

```php
$client = LoremPicsumSDK::test();
[$result, $err] = $client->GetRandomImage()->load(["id" => "test01"]);
```

### Golang

```go
client := sdk.Test()
result, err := client.GetRandomImage(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = LoremPicsumSDK.test
result, err = client.GetRandomImage().load({ "id" => "test01" })
```

### Lua

```lua
local client = sdk.test()
local result, err = client:GetRandomImage():load({ id = "test01" })
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
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

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
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

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

---

Generated from the Lorem Picsum OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
