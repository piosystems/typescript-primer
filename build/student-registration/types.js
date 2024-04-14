"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModeOfEntry = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["female"] = 1] = "female";
    Gender[Gender["male"] = 2] = "male";
})(Gender || (exports.Gender = Gender = {}));
var ModeOfEntry;
(function (ModeOfEntry) {
    ModeOfEntry[ModeOfEntry["UTME"] = 1] = "UTME";
    ModeOfEntry[ModeOfEntry["DirectEntry"] = 2] = "DirectEntry";
    ModeOfEntry[ModeOfEntry["Transfer"] = 3] = "Transfer";
})(ModeOfEntry || (exports.ModeOfEntry = ModeOfEntry = {}));
