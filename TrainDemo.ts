/* import {stationName} from './LocalTrain'
import {modify} from './LocalTrain'
import { test as getstation } from './LocalTrain'
import { LocalTrain as LTrain } from './LocalTrain'*/

import {train} from './LocalTrain';

console.log(stationName);    //global module

// stationName="Pushpak Express";        //u can modify the value also
modify();
getstation();   //alias to call actual actual function

let train1=new LTrain();  //alias
train1.trainId=1000;
train1.source="Thane";
train1.destination="Igatpuri";
train1.trainLine="central";

let dd=train1.getDetails();
console.log(dd); 

console.log(train.stationName);    //global module

// stationName="Pushpak Express";        //u cannot modify the value directly
train.modify();
train.test();  //alias to call actual actual function

let train1=new train.LocalTrain();  //alias

train1.trainId=1000;
train1.source="Thane";
train1.destination="Igatpuri";
train1.trainLine="central";

let dd=train1.getDetails();
console.log(dd);




