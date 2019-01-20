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
import { login } from '../controllers/AccountController';

export default class LoginView extends Component<Props> {
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
            account = new Account("", "", "");

        account.password = password;
        this.setState({ account });
    }

    login = () => {
        let loginResult = login(this.state.account);
        if (loginResult) {
            ToastAndroid.show(loginResult.message, ToastAndroid.SHORT);
            if (loginResult.result) {
                this.setState({ account: new Account() });
                const { navigate } = this.props.navigation;
                navigate('LoginSuccessful');
            }
        }
    }

    register = () => {
        const { navigate } = this.props.navigation;
        navigate('Register');
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={[styles.generalFontSize, styles.input]}
                    placeholder="Username..."
                    value={this.state.account ? this.state.account.username : ""}
                    onChangeText={(text) => this.setUsername(text)}
                    />
                <TextInput
                    style={[styles.generalFontSize, styles.input]}
                    placeholder="Password..."
                    value={this.state.account ? this.state.account.password : ""}
                    secureTextEntry={true}
                    onChangeText={(text) => this.setPassword(text)}
                    />
                <Text
                    style={[styles.registerText, styles.generalFontSize]}
                    onPress={this.register}>Register new account</Text>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.login}>
                    <Text style={[styles.buttonText, styles.generalFontSize]}>Login</Text>
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