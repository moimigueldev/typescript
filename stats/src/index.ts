import { CSVFileReader } from './CSVFileReader';
import { matchResult } from './MatchResult';
const reader = new CSVFileReader('football.csv');

reader.read();

// enum = enumaration
// enums are used to signal relationships of very closely related values
// USED TO SIGNAL TO OTHER ENGINEERS

let maUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === matchResult.HomeWin) {
    maUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === matchResult.AwayWin) {
    maUnitedWins++;
  }
}

console.log(`Man United won: ${maUnitedWins} games`);
