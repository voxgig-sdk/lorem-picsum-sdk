# LoremPicsum SDK

from utility.voxgig_struct import voxgig_struct as vs
from core.utility_type import LoremPicsumUtility
from core.spec import LoremPicsumSpec
from core import helpers

# Load utility registration (populates Utility._registrar)
from utility import register

# Load features
from feature.base_feature import LoremPicsumBaseFeature
from features import _make_feature


class LoremPicsumSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = LoremPicsumUtility()
        self._utility = utility

        from config import make_config
        config = make_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features from config.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        if feature_opts is not None:
            feature_items = vs.items(feature_opts)
            if feature_items is not None:
                for item in feature_items:
                    fname = item[0]
                    fopts = helpers.to_map(item[1])
                    if fopts is not None and fopts.get("active") is True:
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        extend = vs.getprop(self.options, "extend")
        if isinstance(extend, list):
            for f in extend:
                if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                    utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return LoremPicsumUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = LoremPicsumSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    def direct(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }


    @property
    def get_random_image(self):
        """Idiomatic facade: client.get_random_image.list() / client.get_random_image.load({"id": ...})."""
        from entity.get_random_image_entity import GetRandomImageEntity
        cached = getattr(self, "_get_random_image", None)
        if cached is None:
            cached = GetRandomImageEntity(self, None)
            self._get_random_image = cached
        return cached

    def GetRandomImage(self, data=None):
        # Deprecated: use client.get_random_image instead.
        from entity.get_random_image_entity import GetRandomImageEntity
        return GetRandomImageEntity(self, data)


    @property
    def get_random_square_image(self):
        """Idiomatic facade: client.get_random_square_image.list() / client.get_random_square_image.load({"id": ...})."""
        from entity.get_random_square_image_entity import GetRandomSquareImageEntity
        cached = getattr(self, "_get_random_square_image", None)
        if cached is None:
            cached = GetRandomSquareImageEntity(self, None)
            self._get_random_square_image = cached
        return cached

    def GetRandomSquareImage(self, data=None):
        # Deprecated: use client.get_random_square_image instead.
        from entity.get_random_square_image_entity import GetRandomSquareImageEntity
        return GetRandomSquareImageEntity(self, data)


    @property
    def height(self):
        """Idiomatic facade: client.height.list() / client.height.load({"id": ...})."""
        from entity.height_entity import HeightEntity
        cached = getattr(self, "_height", None)
        if cached is None:
            cached = HeightEntity(self, None)
            self._height = cached
        return cached

    def Height(self, data=None):
        # Deprecated: use client.height instead.
        from entity.height_entity import HeightEntity
        return HeightEntity(self, data)


    @property
    def heightwebp(self):
        """Idiomatic facade: client.heightwebp.list() / client.heightwebp.load({"id": ...})."""
        from entity.heightwebp_entity import HeightwebpEntity
        cached = getattr(self, "_heightwebp", None)
        if cached is None:
            cached = HeightwebpEntity(self, None)
            self._heightwebp = cached
        return cached

    def Heightwebp(self, data=None):
        # Deprecated: use client.heightwebp instead.
        from entity.heightwebp_entity import HeightwebpEntity
        return HeightwebpEntity(self, data)


    @property
    def id_info(self):
        """Idiomatic facade: client.id_info.list() / client.id_info.load({"id": ...})."""
        from entity.id_info_entity import IdInfoEntity
        cached = getattr(self, "_id_info", None)
        if cached is None:
            cached = IdInfoEntity(self, None)
            self._id_info = cached
        return cached

    def IdInfo(self, data=None):
        # Deprecated: use client.id_info instead.
        from entity.id_info_entity import IdInfoEntity
        return IdInfoEntity(self, data)


    @property
    def idn(self):
        """Idiomatic facade: client.idn.list() / client.idn.load({"id": ...})."""
        from entity.idn_entity import IdnEntity
        cached = getattr(self, "_idn", None)
        if cached is None:
            cached = IdnEntity(self, None)
            self._idn = cached
        return cached

    def Idn(self, data=None):
        # Deprecated: use client.idn instead.
        from entity.idn_entity import IdnEntity
        return IdnEntity(self, data)


    @property
    def list(self):
        """Idiomatic facade: client.list.list() / client.list.load({"id": ...})."""
        from entity.list_entity import ListEntity
        cached = getattr(self, "_list", None)
        if cached is None:
            cached = ListEntity(self, None)
            self._list = cached
        return cached

    def List(self, data=None):
        # Deprecated: use client.list instead.
        from entity.list_entity import ListEntity
        return ListEntity(self, data)


    @property
    def seed(self):
        """Idiomatic facade: client.seed.list() / client.seed.load({"id": ...})."""
        from entity.seed_entity import SeedEntity
        cached = getattr(self, "_seed", None)
        if cached is None:
            cached = SeedEntity(self, None)
            self._seed = cached
        return cached

    def Seed(self, data=None):
        # Deprecated: use client.seed instead.
        from entity.seed_entity import SeedEntity
        return SeedEntity(self, data)


    @property
    def seed_info(self):
        """Idiomatic facade: client.seed_info.list() / client.seed_info.load({"id": ...})."""
        from entity.seed_info_entity import SeedInfoEntity
        cached = getattr(self, "_seed_info", None)
        if cached is None:
            cached = SeedInfoEntity(self, None)
            self._seed_info = cached
        return cached

    def SeedInfo(self, data=None):
        # Deprecated: use client.seed_info instead.
        from entity.seed_info_entity import SeedInfoEntity
        return SeedInfoEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None):
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk
