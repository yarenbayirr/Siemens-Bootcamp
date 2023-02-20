export class Person implements IPerson {
    constructor(public id:number, public name: string, public surname:string, public age:number){}
}

export interface IPerson {
    id: number,
    name: string,
    surname: string,
    age: number
}
