import { NumbersCollection } from './numbers.collection';

interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): number;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  // BUUBLE SORT
  sort(): void {
    // Deconstructor
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
