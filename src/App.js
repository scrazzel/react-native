import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component{

    state = {loggedIn: null};

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDETqXNQf2Ikp1ju5dKP2vZ6WKtmO3MvJ4",
            authDomain: "authentication-9c9be.firebaseapp.com",
            databaseURL: "https://authentication-9c9be.firebaseio.com",
            projectId: "authentication-9c9be",
            storageBucket: "authentication-9c9be.appspot.com",
            messagingSenderId: "188124769052"
          });

          // jezeli sie zaloguje => istnieje obiekt user
          // jezeli sie wyloguje => nie ma obiektu user
        firebase.auth().onAuthStateChanged((user) => {
            if (user){
                this.setState({loggedIn: true});
            }
            else {
                this.setState({loggedIn: false});
            }
        })
    }

    renderContent(){
        switch(this.state.loggedIn){
            case true:
                return(
                    <Button onPress={() => firebase.auth().signOut()}>
                        Wyloguj się
                    </Button>
                );

            case false:
                return (<LoginForm />);

            default:
                return (<Spinner size="large" />);
        }
    }

    render(){
        return(
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;