# LoremPicsum SDK

Drop-in placeholder images via simple URL paths — random, seeded, grayscale, or blurred

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Lorem Picsum

[Lorem Picsum](https://picsum.photos) is a placeholder-image service created by David Marby and Nijiko Yonskai. It serves random photos sourced from [Unsplash](https://unsplash.com) through a simple URL-based API, with infrastructure powered by Fastly.

What you get from the API:

- Random images at any size: `https://picsum.photos/{width}/{height}` or `https://picsum.photos/{size}` for squares.
- Specific images by ID: `/id/{image_id}/{width}/{height}`.
- Reproducible random images by seed: `/seed/{seed}/{width}/{height}`.
- A paginated list of available images via `/v2/list` (supports `?page` and `?limit`).
- Image metadata (author, dimensions, URLs) via `/id/{id}/info` or `/seed/{seed}/info`.
- Visual effects through query parameters: `?grayscale`, `?blur={1-10}`, and `?random={n}` for cache busting. Effects can be combined.
- Format selection by extension: `.jpg` or `.webp`.

The service requires no authentication or API key. CORS is not enabled, so image requests are typically made from `<img>` tags or server-side rather than via browser `fetch`.

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

## 30-second quickstart

### TypeScript

```ts
import { LoremPicsumSDK } from 'lorem-picsum'

const client = new LoremPicsumSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

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
| **GetRandomImage** | Fetch a random placeholder image at a given width and height — `GET /{width}/{height}`. | `/{width}/{height}` |
| **GetRandomSquareImage** | Fetch a random square placeholder image at a given size — `GET /{size}`. | `/{size}` |
| **Height** | Variant routes for requesting an image at a specific height (and width), returned as JPEG. | `/{width}/{height}.jpg` |
| **Heightwebp** | Variant routes for requesting an image at a specific height (and width), returned as WebP via the `.webp` extension. | `/{width}/{height}.webp` |
| **IdInfo** | Metadata for a specific image identified by `id` — `GET /id/{id}/info`, returning author, dimensions, and URLs. | `/id/{id}/info` |
| **Idn** | Fetch a specific image by numeric `id` at a given width and height — `GET /id/{id}/{width}/{height}`. | `/id/{id}/{width}/{height}` |
| **List** | Paginated list of available images with metadata — `GET /v2/list` (supports `?page` and `?limit`). | `/v2/list` |
| **Seed** | Fetch a reproducible random image keyed by a `seed` string — `GET /seed/{seed}/{width}/{height}`. | `/seed/{seed}/{width}/{height}` |
| **SeedInfo** | Metadata for the image that a given `seed` resolves to — `GET /seed/{seed}/info`. | `/seed/{seed}/info` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from lorempicsum_sdk import LoremPicsumSDK

client = LoremPicsumSDK({})


# Load a specific getrandomimage
getrandomimage, err = client.GetRandomImage(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'lorempicsum_sdk.php';

$client = new LoremPicsumSDK([]);


// Load a specific getrandomimage
[$getrandomimage, $err] = $client->GetRandomImage(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/lorem-picsum-sdk/go"

client := sdk.NewLoremPicsumSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "LoremPicsum_sdk"

client = LoremPicsumSDK.new({})


# Load a specific getrandomimage
getrandomimage, err = client.GetRandomImage(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("lorem-picsum_sdk")

local client = sdk.new({})


-- Load a specific getrandomimage
local getrandomimage, err = client:GetRandomImage(nil):load(
  { id = "example_id" }, nil
)
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
client = LoremPicsumSDK.test(None, None)
result, err = client.GetRandomImage(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = LoremPicsumSDK::test(null, null);
[$result, $err] = $client->GetRandomImage(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.GetRandomImage(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = LoremPicsumSDK.test(nil, nil)
result, err = client.GetRandomImage(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:GetRandomImage(nil):load(
  { id = "test01" }, nil
)
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

## Using the Lorem Picsum

- Upstream: [https://picsum.photos](https://picsum.photos)

- Images are sourced from [Unsplash](https://unsplash.com) and served via Picsum's CDN.
- The Picsum service itself is free to use; the underlying [source code](https://github.com/DMarby/picsum-photos) is open source.
- No attribution is required by Picsum, though the original photographers can be looked up via the `/id/{id}/info` endpoint.

---

Generated from the Lorem Picsum OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
