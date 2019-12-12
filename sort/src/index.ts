import { NumbersCollection } from './numbers.collection';
import { Sorter } from './sorter';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);

const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log('sorter', numbersCollection.data);
