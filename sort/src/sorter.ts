import { NumbersCollection } from './numbers.collection';

// DONT NEED INTERFACES WHEN CREATING AN ABSTRACT CLASS
// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }

export abstract class Sorter {
  // abstract is signifying that a child will promise to have these methods
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  constructor() {}

  // BUUBLE SORT
  sort(): void {
    // Deconstructor
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
