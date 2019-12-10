const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// type alias
type Drink = [string, boolean, number];

// Annotation makes it a tuple
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 0];

const carSpecs: [number, number] = [400, 3354];

// An object format makes it obvious as to what the values mean
const carStats = {
  horsePower: 400,
  weight: 3354
};
