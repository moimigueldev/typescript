import { NumbersCollection } from './numbers.collection';
import { Sorter } from './sorter';
import { CharactersCollection } from './Characters.collection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const charactersCollection = new CharactersCollection('Hello');
// const linkedList = new LinkedList();

// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-2);
// linkedList.add(4);

numbersCollection.sort();

console.log(numbersCollection.data);
