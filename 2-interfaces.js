var rect1 = {
    id: '123',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};
var rect2 = {
    id: '12345',
    size: {
        width: 5,
        height: 10
    }
};
rect2.color = 'red';
var rect3 = {};
var rect4 = {};
var rect5 = {
    id: '1230',
    size: {
        width: 10,
        height: 20
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date(); //по умолчанию
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
