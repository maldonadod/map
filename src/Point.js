const Point = (x, y) => {
    return {
        x,
        y,
        equals(p) {
            return p.x === x && p.y === y
        }
    }
}

module.exports = Point