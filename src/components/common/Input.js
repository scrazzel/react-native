import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = (prop) => {
const {inputStyle, labelStyle, containerStyle} = styles;

    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>{prop.label}</Text>
            <TextInput
                secureTextEntry={prop.secureTextEntry}
                placeholder={prop.placeholder}
                autoCorrect={false} 
                style={inputStyle}
                value={prop.value}
                onChangeText={prop.onChangeText}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export { Input };

