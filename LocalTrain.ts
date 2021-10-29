
export let stationName="CST";
export function modify(){
    stationName="Pushpak";
}
export function test(){
    console.log(stationName);
}

class LocalTrain{
    trainId:number;
    source:string;
    destination:string;
    trainLine:string;

    getDetails(){
        return `${this.trainId}  ${this.source}  ${this.destination}  ${this.trainLine}`;
    }

}

export * as train from './LocalTrain';