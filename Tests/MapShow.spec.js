const sinon = require('sinon')

const Map = require('../src/Map')
const Floor = require('../src/Floor')
const Point = require('../src/Point')

describe('Map.render(output)', () => {

    const floor = Floor("...")
    let map = new Map()
    map.add(Point(0, 0), floor)
    map.add(Point(1, 0), floor)
    map.add(Point(2, 0), floor)
    map.add(Point(3, 0), floor)

    it('should call output show method', () => {

        const output = {
            show(obj) {

            }
        }
        const mock = sinon.mock(output)

        mock.expects('show')
            .exactly(4)
            .withArgs(floor)

        map.render(output)

        mock.verify()
    })
})