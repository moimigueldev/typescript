import fs from 'fs';
import { matchResult } from './MatchResult';

export abstract class CSVFileReader<T> {
  data: T[] = [];
  constructor(public fileName: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8' //returns a string
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
