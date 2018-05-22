import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';
import {Card, CardSection, Button, Input, Spinner} from './common';
import firebase from 'firebase';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress(){
        const {email,password} = this.state;

        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginSuccess(){
        this.setState({email: '', password: '', error: '', loading: false});
    }

    onLoginFail(){
        this.setState({error: 'Nie udalo sie utworzyc konta.', loading: false});
    }

    renderButton(){
        if (this.state.loading){
        return (<Spinner size="small"/>);
        }
        else {
            return(
                <Button onPress={this.onButtonPress.bind(this)}>
                    Zaloguj się
                </Button>
            );
        }
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder="Enter Your email"
                        onChangeText={email => this.setState({email: email})}
                        value={this.state.email}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label='Password'
                        placeholder="Enter Your password"
                        onChangeText={password => this.setState({password: password})}
                        value={this.state.password}
                        secureTextEntry={true}
                    />

                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>               
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;