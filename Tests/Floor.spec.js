const Floor = require('../src/Floor')
const Cookie = require('../src/Cookie')
const Nothing = require('../src/Nothing')
const Map = require('../src/Map')
const Point = require('../src/Point')

describe('Map.add(point, obj)', () => {

    describe('should add floor to especific point', () => {

        const floor = Floor()
        const cookie = Cookie()
        const nothing = Nothing()
        const map = new Map()

        map.add(Point(0, 0), floor)
        map.add(Point(1, 0), cookie)

        it('we can find floor in point 0,0', () => {
            expect(
                map.getElementByPosition(Point(0, 0))
            ).toEqual(floor)
        })
        it('we can find cookie in point 1,0', () => {
            expect(
                map.getElementByPosition(Point(1, 0))
            ).toEqual(cookie)
        })
        it('we can find nothing in point 2,0', () => {
            expect(
                map.getElementByPosition(Point(2, 0)).equals(nothing)
            )
            .toBeTruthy()
        })
    })
})