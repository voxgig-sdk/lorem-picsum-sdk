
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { LoremPicsumSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = LoremPicsumSDK.test()
    equal(testsdk instanceof LoremPicsumSDK, true,
      'LoremPicsumSDK.test() must return a client synchronously')
  })

})
