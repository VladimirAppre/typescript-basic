function add(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.trim().toLocaleUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, "default": a.toString() };
    }
    return { x: a, y: b };
}
console.log('Empty', position());
console.log('one param', position(42));
console.log('two param', position());

// spread
function spreadFunc(arguments : string) {
    var others = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        others[_i - 1] = arguments[_i];
    }
}


var obj = {
    name: 'Vladimir',
    surname: 'Pinki',
    hello: function (surname) {
        console.log(this.name, surname);
    }
};
obj.hello('petye');
