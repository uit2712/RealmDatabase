import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    Text
} from 'react-native';
import Car from '../models/Car';
import CarView from './CarView';

export default class ListCarView extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.state = {
            cars: this.props.cars
        }
    }

    renderCarsInfo = () => {
        if (!this.state.cars || this.state.cars.length == 0)
            return <Text>There is no car!</Text>

        let result;
        result = this.state.cars.map((car: Car, key: any) => 
            <CarView car={car} key={key}/>
        )

        return result;
    }

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                {this.renderCarsInfo()}
            </ScrollView>
        )
    }
}