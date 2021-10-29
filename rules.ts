class A{
    readonly num1:number;
    public static readonly country:string="India";

constructor(){
    this.num1=45;
}
    test():void{
        console.log("in A");
    }
    test1():string{
        return null;
    }
}
class B extends A{
    test():string{
        return "in B";
    }
   // test1():number{    //not allowed
   //     return null
   // }
}

// if super class function void the subclass overriding function can return a covariants are aloowed