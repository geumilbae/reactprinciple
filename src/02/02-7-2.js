var list = [0, 1];
var [
    item1,
    item2,
    item3 = -1
] = list;
[item2, item1] = [item1, item2];
var obj = {
    key1: 'one',
    key2: 'two',
};
var {
    key1: newKey1,
    key2,
    key3 = 'default key3 value',
} = obj;

// ES6의 구조 분해와 구조 할당은 함수 인잣값을 다루거나 JSON 데이터를 변환할 때 유용하게 사용하므로 꼭 기역합시다.
var [item1, ...otherItems] = [0, 1, 2];
var { key1, ...others } = { key1: 'one', key2: 'two' };

