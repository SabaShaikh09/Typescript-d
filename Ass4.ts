interface Shape{
    length:number;
    width:number;
    height:number;

    draw():void;
    area():string;
}

class Triangle implements Shape{
    length:number;
    width:number;
    height:number;
    result:number;

    draw():void{
        console.log("Triangle is drawn");
    }

    area():string{
        return `area: ${this.result} `;

    }

}
class Square implements Shape{
    length:number;
    width:number;
    height:number;
    results:number;
    side:number;

    draw():void{
        console.log("Square is drawn");
    }

    area():string{
        return `area: ${this.results}`;
    }
}
let obj2=new Triangle();
obj2.draw();
obj2.length=43;
obj2.width=12;
obj2.result=0.5*obj2.length*obj2.width;

console.log(obj2.area());
let obj3=new Square();
obj3.draw();
obj3.side=4;
obj3.results=obj3.side*obj3.side;
console.log(obj3.area());

let obj:Shape;
obj=new Triangle();
obj.draw();           //run time polymorphism
obj=new Square();
obj.draw();           //run time polymorphism
     
