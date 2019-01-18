import Car from "RealmDatabase/models/Car";

var Realm = require("realm");
var realm = new Realm({ path: "example-realm.realm", schema: [Car.schema] });

export const getAllCars = () => {
    return realm.objects('Car');
}

export const addNewCar = (car: Car) => {
    if (!car)
        return "Invalid car info";

    try {
        realm.write(() => {
            realm.create('Car', car.getInfoObject());
        });
        return "Add new car successful!";
    } catch(e) {
        return `${e.message}`;
    }
}