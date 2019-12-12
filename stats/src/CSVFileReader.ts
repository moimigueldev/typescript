import fs from 'fs';
import { dateStringToDate } from './utils';
import { matchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, matchResult, string];

export class CSVFileReader {
  data: MatchData[] = [];
  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8' //returns a string
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(
        (row: string[]): MatchData => {
          return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as matchResult, /// 'H', 'A', 'D',
            row[6]
          ];
        }
      );
  }
}
