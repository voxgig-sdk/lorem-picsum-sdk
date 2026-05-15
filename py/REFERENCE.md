# LoremPicsum Python SDK Reference

Complete API reference for the LoremPicsum Python SDK.


## LoremPicsumSDK

### Constructor

```python
from lorem-picsum_sdk import LoremPicsumSDK

client = LoremPicsumSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `LoremPicsumSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = LoremPicsumSDK.test()
```


### Instance Methods

#### `GetRandomImage(data=None)`

Create a new `GetRandomImageEntity` instance. Pass `None` for no initial data.

#### `GetRandomSquareImage(data=None)`

Create a new `GetRandomSquareImageEntity` instance. Pass `None` for no initial data.

#### `Height(data=None)`

Create a new `HeightEntity` instance. Pass `None` for no initial data.

#### `Heightwebp(data=None)`

Create a new `HeightwebpEntity` instance. Pass `None` for no initial data.

#### `IdInfo(data=None)`

Create a new `IdInfoEntity` instance. Pass `None` for no initial data.

#### `Idn(data=None)`

Create a new `IdnEntity` instance. Pass `None` for no initial data.

#### `List(data=None)`

Create a new `ListEntity` instance. Pass `None` for no initial data.

#### `Seed(data=None)`

Create a new `SeedEntity` instance. Pass `None` for no initial data.

#### `SeedInfo(data=None)`

Create a new `SeedInfoEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> tuple`

Make a direct HTTP request to any API endpoint. Returns `(result, err)`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `(result_dict, err)`

#### `prepare(fetchargs=None) -> tuple`

Prepare a fetch definition without sending. Returns `(fetchdef, err)`.


---

## GetRandomImageEntity

```python
get_random_image = client.GetRandomImage()
```

### Operations

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.GetRandomImage().load({"id": "get_random_image_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GetRandomImageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GetRandomSquareImageEntity

```python
get_random_square_image = client.GetRandomSquareImage()
```

### Operations

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.GetRandomSquareImage().load({"id": "get_random_square_image_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GetRandomSquareImageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HeightEntity

```python
height = client.Height()
```

### Operations

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Height().load({"id": "height_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HeightEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HeightwebpEntity

```python
heightwebp = client.Heightwebp()
```

### Operations

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Heightwebp().load({"id": "heightwebp_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HeightwebpEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IdInfoEntity

```python
id_info = client.IdInfo()
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

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.IdInfo().load({"id": "id_info_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IdInfoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IdnEntity

```python
idn = client.Idn()
```

### Operations

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Idn().load({"id": "idn_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IdnEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListEntity

```python
list = client.List()
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

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.List().list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SeedEntity

```python
seed = client.Seed()
```

### Operations

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Seed().load({"id": "seed_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SeedInfoEntity

```python
seed_info = client.SeedInfo()
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

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.SeedInfo().load({"id": "seed_info_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeedInfoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = LoremPicsumSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

