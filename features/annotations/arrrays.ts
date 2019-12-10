// const carMakers = ['ford', 'toyota', 'chevy'];
const carMakers: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corola'], ['camaro']];

// Help with inference when extracting values
const myCar = carMakers[0];
const myCar2 = carMakers.pop();

// Prevent Incompatable values

// carMakers.push(100);

// Help with 'map'

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types

const importantArrays: (Date | string)[] = [new Date(), '2030-10-10'];
importantArrays.push('2040-12-11');
importantArrays.push(new Date());
// importantArrays.push(100);
