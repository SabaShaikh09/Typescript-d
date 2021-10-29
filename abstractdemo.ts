abstract class Train{

    test(){
       console.log("this is concrete method is abstract class");
    }
    abstract access():string;
}

abstract class LocalTrain extends Train{
    access():string{
        return "hello";
    }
}

let tr=new LocalTrain();
tr.access();
tr.test();

let tr1:Train;
tr1=new LocalTrain();
tr1.access();

let tr2:LocalTrain;
tr2=<LocalTrain>tr1;     //downcasting