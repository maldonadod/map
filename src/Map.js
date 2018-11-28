const Nothing = require('./Nothing')

class Map {
    constructor() {
        this.mapping = []
    }
    add(point, obj) {
        this.mapping.push({
            equals(p) {
                return point.equals(p)
            },
            value() {
                return obj
            }
        })
    }
    getElementByPosition(point) {
        const element = this.mapping
            .filter(obj => obj.equals(point))
        const e = element.pop()
        return e ? e.value() : Nothing()
    }
    render(output) {
        this.mapping.forEach(obj => {
            output.show(obj.value())
        })
    }
}
module.exports = Map