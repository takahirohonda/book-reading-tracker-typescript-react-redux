import { expect } from 'chai'
import getTodo from '../src/utils/getTodo'

const url = "'https://jsonplaceholder.typicode.com/todos"

describe('Integration test for getTodo()', () => {

    it('Should return the correct number of records', () => {
        getTodo(url);
        // expect(getTodo(url)).to.be.equal(200);
    })
})