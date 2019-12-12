"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CSVFileReader_1 = require("./CSVFileReader");
var MatchResult_1 = require("./MatchResult");
var reader = new CSVFileReader_1.CSVFileReader('football.csv');
reader.read();
// enum = enumaration
// enums are used to signal relationships of very closely related values
// USED TO SIGNAL TO OTHER ENGINEERS
var maUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.matchResult.HomeWin) {
        maUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.matchResult.AwayWin) {
        maUnitedWins++;
    }
}
console.log("Man United won: " + maUnitedWins + " games");
