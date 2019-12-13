"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("./MatchResult");
var MatchReader_1 = require("./MatchReader");
var CSVFileReader_1 = require("./CSVFileReader");
// const reader = new MatchReader('./football.csv');
// reader.read();
// Create an object that satisfies the 'DataReader' interface
var csvFileReader = new CSVFileReader_1.CSVFileReader('./football.csv');
// Create an instance of MatchReader and pass something statisfing the data reader interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches()
// enum = enumaration
// enums are used to signal relationships of very closely related values
// USED TO SIGNAL TO OTHER ENGINEERS
var maUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.matchResult.HomeWin) {
        maUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.matchResult.AwayWin) {
        maUnitedWins++;
    }
}
console.log("Man United won: " + maUnitedWins + " games");
