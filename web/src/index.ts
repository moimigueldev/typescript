import { User } from './models/user';

const user = new User({ name: 'MyName', age: 20 });

user.set({ name: 'newName' });

console.log(user.get('name'));
console.log(user.get('age'));
