const Nothing = () => ({
    key: "nothing",
    render(map) {
        map.show("...");
    },
    equals(n) {
        return this.key === n.key;
    }
})
module.exports = Nothing;