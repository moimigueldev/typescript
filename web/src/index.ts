import { User } from './models/user';
import axios from 'axios';

const user = new User({ id: 1 });

user.fetch();

setTimeout(() => {
  console.log(user);
}, 4000);
