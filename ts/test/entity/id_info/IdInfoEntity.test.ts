

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"author":{"a":true,"h":"Author","n":"author","r":true,"sh":"Name of the image author","t":"`$STRING`","key$":"author","index$":0},"download_url":{"a":true,"fo":"uri","h":"Download Url","n":"download_url","r":true,"sh":"URL to download the image from Picsum","t":"`$STRING`","key$":"download_url","index$":1},"height":{"a":true,"h":"Height","n":"height","r":true,"sh":"Original height of the image in pixels","t":"`$INTEGER`","key$":"height","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the image","t":"`$STRING`","key$":"id","index$":3},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":true,"sh":"URL to the original image on Unsplash","t":"`$STRING`","key$":"url","index$":4},"width":{"a":true,"h":"Width","n":"width","r":true,"sh":"Original width of the image in pixels","t":"`$INTEGER`","key$":"width","index$":5}},"id":{"field":"id","name":"id"},"name":"id_info","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /id/{id}/info","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/id/{id}/info","q":{"exist":["id"]},"r":{},"s":[{"lit":"id"},{"var":"id"},{"lit":"info"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"id_info","name__orig":"id_info","Name":"IdInfo","name_":"id_info","name-":"id-info","NAME":"ID_INFO","index$":4}, {"active":true,"entity":"id_info","key$":"BasicIdInfoFlow","kind":"basic","name":"BasicIdInfoFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"id_info_ref01","srcdatavar":"id_info_ref01_data","suffix":"_dt0"},"m":{"id":"id_info01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-id_info_ref01"}}],"index$":0}]}, 'IdInfo', {"GET /id/{id}/info":{"protocol":"http","operationId":"getImageInfoById","responses":{"200":{"description":"Image information retrieved successfully","content":{"application/json":{"schema":{"type":"object","properties":{"id":{"description":"Unique identifier for the image","key$":"id","type":"string"},"author":{"description":"Name of the image author","key$":"author","type":"string"},"width":{"description":"Original width of the image in pixels","key$":"width","type":"integer"},"height":{"description":"Original height of the image in pixels","key$":"height","type":"integer"},"url":{"description":"URL to the original image on Unsplash","format":"uri","key$":"url","type":"string"},"download_url":{"description":"URL to download the image from Picsum","format":"uri","key$":"download_url","type":"string"}},"required":["id","author","width","height","url","download_url"],"x-ref":"#/components/schemas/ImageMetadata","index$":0}}}}},"parameters":[{"name":"id","in":"path","required":true,"description":"ID of the image","schema":{"type":"string"},"index$":0}],"securitySource":"unspecified"}})
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
  
