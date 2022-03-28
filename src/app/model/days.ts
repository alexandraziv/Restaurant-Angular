import { Day } from './day';
export class Days{
    '1': Day;
    '2': Day;
    '3': Day;
    '4': Day;
    '5': Day;
    '6': Day;
    '7': Day;

    constructor(obj?:any){
        this[1] = obj && obj[1] || null;
        this[2] = obj && obj[2] || null;
        this[3] = obj && obj[3] || null;
        this[4] = obj && obj[4] || null;
        this[5] = obj && obj[5] || null;
        this[6] = obj && obj[6] || null;
        this[7] = obj && obj[7] || null;
    }
}