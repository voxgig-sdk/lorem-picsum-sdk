# LoremPicsum SDK utility: make_context
require_relative '../core/context'
module LoremPicsumUtilities
  MakeContext = ->(ctxmap, basectx) {
    LoremPicsumContext.new(ctxmap, basectx)
  }
end
