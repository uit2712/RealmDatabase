import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import HomeView from '../views/HomeView';
import React, { Component } from 'react';
import LoginSuccessfulView from '../views/LoginSuccessfulView';

const StackAccount = createStackNavigator({
    // Home: { screen: HomeView },
    Login: { screen: LoginView },
    Register: { screen: RegisterView },
    LoginSuccessful: { screen: LoginSuccessfulView }
});

const StackAccountContainer = createAppContainer(StackAccount);

export default class App extends Component<Props> {
    render() {
        return <StackAccountContainer/>
    }
}
