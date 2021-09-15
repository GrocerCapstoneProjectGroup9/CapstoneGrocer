export class User {
    constructor(public _id: number, public firstNname: string, public lastName: string, public email: string, public password: string,
             public phone: string, public address: string, public funds: number, public locked: boolean ){

    }
}