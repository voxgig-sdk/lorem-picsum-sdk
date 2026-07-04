// LoremPicsum Ts SDK

import { GetRandomImageEntity } from './entity/GetRandomImageEntity'
import { GetRandomSquareImageEntity } from './entity/GetRandomSquareImageEntity'
import { HeightEntity } from './entity/HeightEntity'
import { HeightwebpEntity } from './entity/HeightwebpEntity'
import { IdInfoEntity } from './entity/IdInfoEntity'
import { IdnEntity } from './entity/IdnEntity'
import { ListEntity } from './entity/ListEntity'
import { SeedEntity } from './entity/SeedEntity'
import { SeedInfoEntity } from './entity/SeedInfoEntity'

export type * from './LoremPicsumTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { LoremPicsumEntityBase } from './LoremPicsumEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'


const stdutil = new Utility()


class LoremPicsumSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath
    const items = struct.items

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    items(this._options.feature, (fitem: [string, any]) => {
      const fname = fitem[0]
      const fopts = fitem[1]
      if (fopts.active) {
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    })

    if (null != this._options.extend) {
      for (let f of this._options.extend) {
        featureAdd(this._rootctx, f)
      }
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  async direct(fetchargs?: any) {
    const utility = this._utility
    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  _get_random_image?: GetRandomImageEntity

  // Idiomatic facade: `client.get_random_image.list()` / `client.get_random_image.load({ id })`.
  get get_random_image(): GetRandomImageEntity {
    return (this._get_random_image ??= new GetRandomImageEntity(this, undefined))
  }

  /** @deprecated Use `client.get_random_image` instead. */
  GetRandomImage(data?: any) {
    const self = this
    return new GetRandomImageEntity(self,data)
  }


  _get_random_square_image?: GetRandomSquareImageEntity

  // Idiomatic facade: `client.get_random_square_image.list()` / `client.get_random_square_image.load({ id })`.
  get get_random_square_image(): GetRandomSquareImageEntity {
    return (this._get_random_square_image ??= new GetRandomSquareImageEntity(this, undefined))
  }

  /** @deprecated Use `client.get_random_square_image` instead. */
  GetRandomSquareImage(data?: any) {
    const self = this
    return new GetRandomSquareImageEntity(self,data)
  }


  _height?: HeightEntity

  // Idiomatic facade: `client.height.list()` / `client.height.load({ id })`.
  get height(): HeightEntity {
    return (this._height ??= new HeightEntity(this, undefined))
  }

  /** @deprecated Use `client.height` instead. */
  Height(data?: any) {
    const self = this
    return new HeightEntity(self,data)
  }


  _heightwebp?: HeightwebpEntity

  // Idiomatic facade: `client.heightwebp.list()` / `client.heightwebp.load({ id })`.
  get heightwebp(): HeightwebpEntity {
    return (this._heightwebp ??= new HeightwebpEntity(this, undefined))
  }

  /** @deprecated Use `client.heightwebp` instead. */
  Heightwebp(data?: any) {
    const self = this
    return new HeightwebpEntity(self,data)
  }


  _id_info?: IdInfoEntity

  // Idiomatic facade: `client.id_info.list()` / `client.id_info.load({ id })`.
  get id_info(): IdInfoEntity {
    return (this._id_info ??= new IdInfoEntity(this, undefined))
  }

  /** @deprecated Use `client.id_info` instead. */
  IdInfo(data?: any) {
    const self = this
    return new IdInfoEntity(self,data)
  }


  _idn?: IdnEntity

  // Idiomatic facade: `client.idn.list()` / `client.idn.load({ id })`.
  get idn(): IdnEntity {
    return (this._idn ??= new IdnEntity(this, undefined))
  }

  /** @deprecated Use `client.idn` instead. */
  Idn(data?: any) {
    const self = this
    return new IdnEntity(self,data)
  }


  _list?: ListEntity

  // Idiomatic facade: `client.list.list()` / `client.list.load({ id })`.
  get list(): ListEntity {
    return (this._list ??= new ListEntity(this, undefined))
  }

  /** @deprecated Use `client.list` instead. */
  List(data?: any) {
    const self = this
    return new ListEntity(self,data)
  }


  _seed?: SeedEntity

  // Idiomatic facade: `client.seed.list()` / `client.seed.load({ id })`.
  get seed(): SeedEntity {
    return (this._seed ??= new SeedEntity(this, undefined))
  }

  /** @deprecated Use `client.seed` instead. */
  Seed(data?: any) {
    const self = this
    return new SeedEntity(self,data)
  }


  _seed_info?: SeedInfoEntity

  // Idiomatic facade: `client.seed_info.list()` / `client.seed_info.load({ id })`.
  get seed_info(): SeedInfoEntity {
    return (this._seed_info ??= new SeedInfoEntity(this, undefined))
  }

  /** @deprecated Use `client.seed_info` instead. */
  SeedInfo(data?: any) {
    const self = this
    return new SeedInfoEntity(self,data)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new LoremPicsumSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return LoremPicsumSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'LoremPicsum' }
  }

  toString() {
    return 'LoremPicsum ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = LoremPicsumSDK


export {
  stdutil,

  BaseFeature,
  LoremPicsumEntityBase,

  LoremPicsumSDK,
  SDK,
}


