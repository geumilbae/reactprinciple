var add = (first, second) => {
    return first + second;
};

var add = (first, second) => first + second;
var addAndMultiple = (first, second) => (
    {
        add: first + second,
        multiply: first * second;
    }
);

// currying
function addNumber(num) {
    return function (value) {
        return num + value;
    };
}
var addNumber = num => num + value;

// error caused by the "this" area of callback function
class MyClass {
    value = 10;
    constructor() {
        var addThis2 = function (first, second) {
            return this.value + first + second;
        }.bind(this);
        var addThis3 = (first, second) => this.value + first + second;
    }
}