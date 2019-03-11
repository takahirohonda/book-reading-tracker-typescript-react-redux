import getTimestamp from '../getTimestamp'
import { expect } from 'chai'

describe('getTimestamp() Test', () => {

  it('should return the correctly formatted timestamp', () => {

    const now = getTimestamp();
    const matchFormat = (new RegExp('[0-9]|[0-9]-[0-9]|[0-9]-[0-9]|[0-9] [0-9]|[0-9]:[0-9]|[0-9]:[0-9]|[0-9]')).test(now)
    expect(matchFormat).to.be.true
  })
})