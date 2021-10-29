class Generic<T>
{
    obj :T;
    constructor(obj:T){
        this.obj=obj;
    }
}
let gen=new Generic<string>("asjd");
let gen1=new Generic<number>(3455);

interface employeeIntf<E>
{
    empId:E;
    empName:string;
}
class NeoDeveloper implements employeeIntf<number>
{
      empId:number;
      empName:string;
}
let develop1=new NeoDeveloper();
develop1.empId=4566;
let develop2=new NeoDeveloper();
develop2.empId=4166;

class NeoTrainer implements employeeIntf<string>
{
    empName:string;
    empId:string;
}
