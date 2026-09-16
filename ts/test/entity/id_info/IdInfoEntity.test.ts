

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


describe('IdInfoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOREM_PICSUM_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOREM_PICSUM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoremPicsumSDK.test()
    const ent = testsdk.IdInfo()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOREM_PICSUM_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'id_info.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"author","req":true,"short":"Name of the image author","type":"`$STRING`","index$":0},{"active":true,"format":"uri","name":"download_url","req":true,"short":"URL to download the image from Picsum","type":"`$STRING`","index$":1},{"active":true,"name":"height","req":true,"short":"Original height of the image in pixels","type":"`$INTEGER`","index$":2},{"active":true,"name":"id","req":true,"short":"Unique identifier for the image","type":"`$STRING`","index$":3},{"active":true,"format":"uri","name":"url","req":true,"short":"URL to the original image on Unsplash","type":"`$STRING`","index$":4},{"active":true,"name":"width","req":true,"short":"Original width of the image in pixels","type":"`$INTEGER`","index$":5}],"id":{"field":"id","name":"id"},"name":"id_info","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /id/{id}/info","json":"{\"operationId\":\"getImageInfoById\",\"parameters\":[{\"description\":\"ID of the image\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"author\":{\"description\":\"Name of the image author\",\"type\":\"string\"},\"download_url\":{\"description\":\"URL to download the image from Picsum\",\"format\":\"uri\",\"type\":\"string\"},\"height\":{\"description\":\"Original height of the image in pixels\",\"type\":\"integer\"},\"id\":{\"description\":\"Unique identifier for the image\",\"type\":\"string\"},\"url\":{\"description\":\"URL to the original image on Unsplash\",\"format\":\"uri\",\"type\":\"string\"},\"width\":{\"description\":\"Original width of the image in pixels\",\"type\":\"integer\"}},\"required\":[\"id\",\"author\",\"width\",\"height\",\"url\",\"download_url\"],\"type\":\"object\"}}},\"description\":\"Image information retrieved successfully\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/id/{id}/info","segments":[{"lit":"id"},{"var":"id"},{"lit":"info"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"id_info","name__orig":"id_info","Name":"IdInfo","name_":"id_info","name-":"id-info","NAME":"ID_INFO","index$":4}, {"active":true,"entity":"id_info","key$":"BasicIdInfoFlow","kind":"basic","name":"BasicIdInfoFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"id_info_ref01","srcdatavar":"id_info_ref01_data","suffix":"_dt0"},"match":{"id":"id_info01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-id_info_ref01"}}],"index$":0}]}, 'IdInfo')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let id_info_ref01_data = Object.values(setup.data.existing.id_info)[0] as any

    // LOAD
    const id_info_ref01_ent = client.IdInfo()
    const id_info_ref01_match_dt0: any = {}
    id_info_ref01_match_dt0.id = id_info_ref01_data.id
    const id_info_ref01_data_dt0 = (await id_info_ref01_ent.load(id_info_ref01_match_dt0)).data()
    assert(id_info_ref01_data_dt0.id === id_info_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/id_info/IdInfoTestData.json')

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
    ['id_info01','id_info02','id_info03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOREM_PICSUM_TEST_ID_INFO_ENTID': idmap,
    'LOREM_PICSUM_TEST_LIVE': 'FALSE',
    'LOREM_PICSUM_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LOREM_PICSUM_TEST_ID_INFO_ENTID']

  const live = 'TRUE' === env.LOREM_PICSUM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOREM_PICSUM_TEST_ID_INFO_ENTID']
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
  
