import { matchResult } from './MatchResult';
import { MatchReader } from './MatchReader';
import { CSVFileReader } from './CSVFileReader';

// const reader = new MatchReader('./football.csv');
// reader.read();

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CSVFileReader('./football.csv');
// Create an instance of MatchReader and pass something statisfing the data reader interface
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

// matchReader.matches()

// enum = enumaration
// enums are used to signal relationships of very closely related values
// USED TO SIGNAL TO OTHER ENGINEERS

let maUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === matchResult.HomeWin) {
    maUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === matchResult.AwayWin) {
    maUnitedWins++;
  }
}

console.log(`Man United won: ${maUnitedWins} games`);
