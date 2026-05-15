
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { LoremPicsumSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await LoremPicsumSDK.test()
    equal(null !== testsdk, true)
  })

})
