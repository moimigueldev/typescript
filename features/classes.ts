class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('Beep');
  }
}

// Extends means that It will take all of the methods of Vehicle and copy them to Car class

// The private modifier means that the method/variable can only be called inside of the class its self

// The protected modifier only lets you call the method with in child Classes

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color); // the Super metho is actually the constructor of the parent class which needs to be initialized
  }

  private drive(): void {
    console.log('Broom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

const car = new Car(9, 'red');

car.startDrivingProcess();
