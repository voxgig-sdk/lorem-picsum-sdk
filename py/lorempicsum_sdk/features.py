# LoremPicsum SDK feature factory

from lorempicsum_sdk.feature.base_feature import LoremPicsumBaseFeature
from lorempicsum_sdk.feature.ratelimit_feature import LoremPicsumRatelimitFeature
from lorempicsum_sdk.feature.retry_feature import LoremPicsumRetryFeature
from lorempicsum_sdk.feature.test_feature import LoremPicsumTestFeature
from lorempicsum_sdk.feature.timeout_feature import LoremPicsumTimeoutFeature


_FEATURES = {
    "base": lambda: LoremPicsumBaseFeature(),
    "ratelimit": lambda: LoremPicsumRatelimitFeature(),
    "retry": lambda: LoremPicsumRetryFeature(),
    "test": lambda: LoremPicsumTestFeature(),
    "timeout": lambda: LoremPicsumTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
