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
        return this.mapping.
            filter(obj => obj.equals(point)).
            reduce((nothing, obj) => {
                return obj ? obj.value() : nothing
            }, Nothing())
        }
    render(output) {
        this.mapping.forEach(obj => {
            output.show(obj.value())
        })
    }
}
module.exports = Map