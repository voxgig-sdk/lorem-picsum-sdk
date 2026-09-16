

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { LoremPicsumSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GetRandomSquareImageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOREM_PICSUM_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOREM_PICSUM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoremPicsumSDK.test()
    const ent = testsdk.GetRandomSquareImage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOREM_PICSUM_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_random_square_image.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"get_random_square_image","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"size","reqd":true,"type":"`$INTEGER`","index$":0}],"query":[{"active":true,"kind":"query","name":"blur","orig":"blur","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"grayscale","orig":"grayscale","reqd":false,"type":"`$BOOLEAN`","index$":1}]},"contract":{"id":"GET /{size}","json":"{\"operationId\":\"getRandomSquareImage\",\"parameters\":[{\"description\":\"Size of the square image in pixels\",\"in\":\"path\",\"name\":\"size\",\"required\":true,\"schema\":{\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Convert image to grayscale\",\"in\":\"query\",\"name\":\"grayscale\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Apply blur effect (1-10)\",\"in\":\"query\",\"name\":\"blur\",\"required\":false,\"schema\":{\"maximum\":10,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"image/jpeg\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}}},\"description\":\"Image successfully retrieved\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/{size}","rename":{"param":{"size":"id"}},"segments":[{"var":"id"}],"select":{"exist":["blur","grayscale","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_random_square_image","name__orig":"get_random_square_image","Name":"GetRandomSquareImage","name_":"get_random_square_image","name-":"get-random-square-image","NAME":"GET_RANDOM_SQUARE_IMAGE","index$":1}, {"active":true,"entity":"get_random_square_image","key$":"BasicGetRandomSquareImageFlow","kind":"basic","name":"BasicGetRandomSquareImageFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"get_random_square_image_ref01","srcdatavar":"get_random_square_image_ref01_data","suffix":"_dt0"},"match":{"id":"get_random_square_image01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_random_square_image_ref01"}}],"index$":0}]}, 'GetRandomSquareImage')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_random_square_image_ref01_data = Object.values(setup.data.existing.get_random_square_image)[0] as any

    // LOAD
    const get_random_square_image_ref01_ent = client.GetRandomSquareImage()
    const get_random_square_image_ref01_match_dt0: any = {}
    get_random_square_image_ref01_match_dt0.id = get_random_square_image_ref01_data.id
    const get_random_square_image_ref01_data_dt0 = (await get_random_square_image_ref01_ent.load(get_random_square_image_ref01_match_dt0)).data()
    assert(get_random_square_image_ref01_data_dt0.id === get_random_square_image_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_random_square_image/GetRandomSquareImageTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = LoremPicsumSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['get_random_square_image01','get_random_square_image02','get_random_square_image03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOREM_PICSUM_TEST_GET_RANDOM_SQUARE_IMAGE_ENTID': idmap,
    'LOREM_PICSUM_TEST_LIVE': 'FALSE',
    'LOREM_PICSUM_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LOREM_PICSUM_TEST_GET_RANDOM_SQUARE_IMAGE_ENTID']

  const live = 'TRUE' === env.LOREM_PICSUM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOREM_PICSUM_TEST_GET_RANDOM_SQUARE_IMAGE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new LoremPicsumSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.LOREM_PICSUM_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
