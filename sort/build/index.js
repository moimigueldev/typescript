"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numbers_collection_1 = require("./numbers.collection");
var sorter_1 = require("./sorter");
var numbersCollection = new numbers_collection_1.NumbersCollection([10, 3, -5, 0]);
var sorter = new sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log('sorter', numbersCollection.data);
