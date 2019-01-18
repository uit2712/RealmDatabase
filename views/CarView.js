import React, { Component } from 'react';
import {
    Text
} from 'react-native';
import Car from "RealmDatabase/models/Car";

export default class CarView extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.state = {
            car: new Car(this.props.car)
        }
    }

    render() {
        if (!this.state.car)
            return <Text>Invalid car!</Text>

        return (
            <Text>{this.state.car.getIntroduction()}</Text>
        )
    }
}