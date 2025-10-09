const methods = (iface) => {
    const result = [];
    for (const name in iface) {
        if (typeof iface[name] === 'function') {
            result.push([name, iface[name].length]);
        }
    }
    return result;
}

const obj = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
};

console.log(JSON.stringify(methods(obj)));
