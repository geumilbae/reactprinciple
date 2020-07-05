class Shape {
    static create(x, y) {
        return new Shape(x, y);
    }
    name = 'Shape';
    constructor (x, y) {
        this.move(x, y);
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
    area() {
        return 0;
    }
}
var s = new Shape(0, 0);
s.area();

// 클래스 구현해서는 var, let, const 를 사용하지 않습니다.

console.log("last line for debug.")
