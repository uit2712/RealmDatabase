/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ToastAndroid } from "react-native";
import { getAllCars, addNewCar } from './controllers/CarController';
import Car from "./models/Car";
import ListCarView from './views/ListCarView';

export default class App extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.state = {
            car: new Car()
        }
    }

    addNewCar = () => {
        ToastAndroid.show(addNewCar(this.state.car), ToastAndroid.SHORT);
    }

    getAllCars = () => {
        let cars = getAllCars();
        return cars;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <Text style={[styles.generalFontSize]}>Manufacturer: </Text>
                    <TextInput
                        style={[styles.generalFontSize]}
                        placeholder="Made by..."
                        onChangeText={text => {
                            let car = this.state.car;
                            car.make = text;
                            this.setState({ car });
                        }}
                    />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={[styles.generalFontSize]}>Model: </Text>
                    <TextInput
                        style={[styles.generalFontSize]}
                        placeholder="Model..."
                        onChangeText={text => {
                            let car = this.state.car;
                            car.model = text;
                            this.setState({ car });
                        }}
                    />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={[styles.generalFontSize]}>Miles: </Text>
                    <TextInput
                        style={[styles.generalFontSize]}
                        placeholder="Miles..."
                        onChangeText={text => {
                            let car = this.state.car;
                            car.miles = Number(text);
                            this.setState({ car });
                        }}
                    />
                </View>
                <TouchableOpacity>
                    <Text
                        style={[styles.generalFontSize]}
                        onPress={this.addNewCar}>Add new car</Text>
                </TouchableOpacity>
                <ListCarView cars={this.getAllCars()}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        width: '100%'
    },
    generalFontSize: {
        fontSize: 20
    }
});
