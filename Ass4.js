var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.draw = function () {
        console.log("Triangle is drawn");
    };
    Triangle.prototype.area = function () {
        return "area: " + this.result + " ";
    };
    return Triangle;
}());
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.draw = function () {
        console.log("Square is drawn");
    };
    Square.prototype.area = function () {
        return "area: " + this.results;
    };
    return Square;
}());
var obj2 = new Triangle();
obj2.draw();
obj2.length = 43;
obj2.width = 12;
obj2.result = 0.5 * obj2.length * obj2.width;
console.log(obj2.area());
var obj3 = new Square();
obj3.draw();
obj3.side = 4;
obj3.results = obj3.side * obj3.side;
console.log(obj3.area());
var obj;
obj = new Triangle();
obj.draw(); //run time polymorphism
obj = new Square();
obj.draw(); //run time polymorphism
