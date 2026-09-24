

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('HeightEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LOREM_PICSUM_TEST_LIVE=TRUE.
  afterEach(liveDelay('LOREM_PICSUM_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LoremPicsumSDK.test()
    const ent = testsdk.Height()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LOREM_PICSUM_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'height.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"height","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /{width}/{height}.jpg","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"height","or":"height","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"width","or":"width","r":true,"t":"`$INTEGER`","index$":1}],"query":[{"a":true,"k":"query","n":"blur","or":"blur","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"grayscale","or":"grayscale","r":false,"t":"`$BOOLEAN`","index$":1}]},"k":"http","m":"GET","o":"/{width}/{height}.jpg","q":{"exist":["blur","grayscale","height","width"]},"r":{},"s":[{"var":"width"},{"lit":"{height}.jpg"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"height","name__orig":"height","Name":"Height","name_":"height","name-":"height","NAME":"HEIGHT","index$":2}, {"active":true,"entity":"height","key$":"BasicHeightFlow","kind":"basic","name":"BasicHeightFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"height_ref01","srcdatavar":"height_ref01_data","suffix":"_dt0"},"m":{"height":"height01","id":"height01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-height_ref01"}}],"index$":0}]}, 'Height', {"GET /{width}/{height}.jpg":{"protocol":"http","operationId":"getRandomImageJpeg","responses":{"200":{"description":"Image successfully retrieved","content":{"image/jpeg":{"schema":{"type":"string","format":"binary"}}}}},"parameters":[{"name":"width","in":"path","required":true,"description":"Width of the image in pixels","schema":{"type":"integer","minimum":1},"index$":0},{"name":"height","in":"path","required":true,"description":"Height of the image in pixels","schema":{"type":"integer","minimum":1},"index$":1},{"name":"grayscale","in":"query","required":false,"description":"Convert image to grayscale","schema":{"type":"boolean"},"index$":2},{"name":"blur","in":"query","required":false,"description":"Apply blur effect (1-10)","schema":{"type":"integer","minimum":1,"maximum":10},"index$":3}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let height_ref01_data = Object.values(setup.data.existing.height)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const height_ref01_ent = client.Height()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/height/HeightTestData.json')

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
    ['height01','height02','height03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LOREM_PICSUM_TEST_HEIGHT_ENTID': idmap,
    'LOREM_PICSUM_TEST_LIVE': 'FALSE',
    'LOREM_PICSUM_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['LOREM_PICSUM_TEST_HEIGHT_ENTID']

  const live = 'TRUE' === env.LOREM_PICSUM_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LOREM_PICSUM_TEST_HEIGHT_ENTID']
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
  
