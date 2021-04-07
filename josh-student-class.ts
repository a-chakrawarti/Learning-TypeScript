export class Student {
    // private name: string;
    // private std: number;
    constructor(private _name:string, private _std:number) {
        // this.name = name
        // this.std = std
    }

    studentInfo() {
        const std = this.getStd()
        console.log(`${this._name} is studying in standard ${std}.`)
    }

    getStd() {
        return this._std;
    }

    setStd(value: number) {
        if (value < 0) {
            throw new Error('Standard cannot be less than 0')
        }

        this._std = value;
    }

    // private field with readonly access to the outside
    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

}