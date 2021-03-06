import fs from 'fs';

export class CSVFileReader {
  data: string[][] = [];
  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8' //returns a string
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      });
  }
}
