var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BasePerson = /** @class */ (function () {
    function BasePerson(native, work) {
        this._native = native;
        this._work = work;
    }
    BasePerson.prototype.Move = function () {
        console.log("I can move");
    };
    BasePerson.prototype.Hear = function () {
        console.log("I can hear");
    };
    BasePerson.prototype.Smell = function () {
        console.log("I can smell");
    };
    BasePerson.prototype.Touch = function () {
        console.log("I can touch");
    };
    BasePerson.prototype.Talk = function () {
        this._native.TalkInThatLanguage();
    };
    BasePerson.prototype.Work = function () {
        this._work.WorkAs();
    };
    return BasePerson;
}());
var EnglishNative = /** @class */ (function () {
    function EnglishNative() {
    }
    EnglishNative.prototype.TalkInThatLanguage = function () {
        console.log("I can talk in English");
    };
    return EnglishNative;
}());
var TurkishNative = /** @class */ (function () {
    function TurkishNative() {
    }
    TurkishNative.prototype.TalkInThatLanguage = function () {
        console.log("I can talk in Turkish");
    };
    return TurkishNative;
}());
var SoftwareDeveloper = /** @class */ (function () {
    function SoftwareDeveloper() {
    }
    SoftwareDeveloper.prototype.WorkAs = function () {
        console.log("I work as a Software Developer");
    };
    return SoftwareDeveloper;
}());
var Architect = /** @class */ (function () {
    function Architect() {
    }
    Architect.prototype.WorkAs = function () {
        console.log("I work as an Architect");
    };
    return Architect;
}());
var Person1 = /** @class */ (function (_super) {
    __extends(Person1, _super);
    function Person1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Person1;
}(BasePerson));
var p1 = new Person1(new TurkishNative(), new SoftwareDeveloper());
p1.Work();
p1.Talk();
