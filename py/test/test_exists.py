# ProjectName SDK exists test

import pytest
from lorempicsum_sdk import LoremPicsumSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = LoremPicsumSDK.test(None, None)
        assert testsdk is not None
