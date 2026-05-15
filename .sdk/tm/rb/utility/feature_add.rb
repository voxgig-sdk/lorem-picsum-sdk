# LoremPicsum SDK utility: feature_add
module LoremPicsumUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
