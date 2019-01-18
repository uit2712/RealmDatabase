export default class Person {
    name: string;
    birthday: date;
    cars: [];
}

const PersonSchema = {
    name: "Person",
    properties: {
        name: "string",
        birthday: "date",
        cars: { type: "list", objectType: "Car" }
    }
};

Person.schema = PersonSchema;
