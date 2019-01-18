export default class Car {
    make: string;
    model: string;
    miles: number;

    constructor(car: any) {
        if (car) {
            this.make = car.make;
            this.model = car.model;
            this.miles = Number(car.miles);
        }
    }

    getInfoObject() {
        return {
            make: this.make,
            model: this.model,
            miles: this.miles
        };
    }

    getIntroduction() {
        if (this.make === undefined
            || this.model === undefined
            || this.miles === undefined)
            return "";

        return `Car ${this.model} made by ${this.make}, can go ${this.miles} miles`;
    }
}

const CarSchema = {
    name: "Car",
    properties: {
        make: "string",
        model: "string",
        miles: { type: "int", default: 0 }
    }
};

Car.schema = CarSchema;
