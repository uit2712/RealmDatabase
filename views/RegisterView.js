import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    ToastAndroid
} from 'react-native';
import Account from '../models/Account';
import { register } from '../controllers/AccountController';

export default class RegisterView extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.state = {
            account: new Account(),
        };
    }

    setUsername = (username: string) => {
        let account = this.state.account;
        if (!account)
            account = new Account();

        account.username = username;
        this.setState({ account });
    }

    setPassword = (password: string) => {
        let account = this.state.account;
        if (!account)
            account = new Account();

        account.password = password;
        this.setState({ account });
    }

    setName = (name: string) => {
        let account = this.state.account;
        if (!account)
            account = new Account();

        account.name = name;
        this.setState({ account });
    }

    register = () => {
        let registerResult = register(this.state.account);
        if (registerResult)
            ToastAndroid.show(registerResult.message, ToastAndroid.SHORT);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={[styles.generalFontSize, styles.input]}
                    placeholder="Username..."
                    onChangeText={(text) => this.setUsername(text)}
                    />
                <TextInput
                    style={[styles.generalFontSize, styles.input]}
                    placeholder="Password..."
                    secureTextEntry={true}
                    onChangeText={(text) => this.setPassword(text)}
                    />
                <TextInput
                    style={[styles.generalFontSize, styles.input]}
                    placeholder="Name..."
                    onChangeText={(text) => this.setName(text)}
                    />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.register}>
                    <Text style={[styles.buttonText, styles.generalFontSize]}>Register</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        alignSelf: 'center',
    },
    generalFontSize: {
        fontSize: 20,
    },
    input: {
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: 'blue',
        marginVertical: 10,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        height: 50,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
    },
    registerText: {
        textDecorationLine: 'underline',
        marginVertical: 10,
    }
});