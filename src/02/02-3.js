var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
const combined = [...array1, ...array2];
const [ first, second, three = 'empty', ...others ] = array1;
function test(...args) { var [first, ...others] = args; return [ first, others ]; }
console.log(test('1', '2', '3', '4'));

console.log("last line for debug.")
