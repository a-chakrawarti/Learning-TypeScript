"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    // private name: string;
    // private std: number;
    function Student(_name, _std) {
        this._name = _name;
        this._std = _std;
        // this.name = name
        // this.std = std
    }
    Student.prototype.studentInfo = function () {
        var std = this.getStd();
        console.log(this._name + " is studying in standard " + std + ".");
    };
    Student.prototype.getStd = function () {
        return this._std;
    };
    Student.prototype.setStd = function (value) {
        if (value < 0) {
            throw new Error('Standard cannot be less than 0');
        }
        this._std = value;
    };
    Object.defineProperty(Student.prototype, "name", {
        // private field with readonly access to the outside
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
exports.Student = Student;
