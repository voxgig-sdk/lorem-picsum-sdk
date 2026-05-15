# LoremPicsum SDK feature factory

from feature.base_feature import LoremPicsumBaseFeature
from feature.test_feature import LoremPicsumTestFeature


def _make_feature(name):
    features = {
        "base": lambda: LoremPicsumBaseFeature(),
        "test": lambda: LoremPicsumTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
