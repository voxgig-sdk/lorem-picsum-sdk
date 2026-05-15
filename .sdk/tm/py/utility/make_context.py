# LoremPicsum SDK utility: make_context

from core.context import LoremPicsumContext


def make_context_util(ctxmap, basectx):
    return LoremPicsumContext(ctxmap, basectx)
