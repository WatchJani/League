import React from "react";
import { StyleSheet, Text, TextInput, View, Pressable, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useState } from "react";
import axios from '../utils/axiosBackend';
import { globalStyles } from "../styles/global";

export default function Login({ navigation }) {
    const [data, SetData] = useState({
        password: '',
        email: '',
    });

    const [error, setError] = useState({});


    const Submit = () => {
        axios
            .post('login', {
                Email: data.email,
                Password: data.password,
            })
            .then((res) => {
                navigation.navigate('Home')
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
                setError(err.response.data.errors);
                console.log(err.response.data.errors);
            });
    };

    return (
        <TouchableWithoutFeedback onPress={() => {
            // Keyboard.dismiss()
        }}>
            <View style={style.constainer}>
                <View style={style.view}>

                    <Text style={globalStyles.label}>E-mail:</Text>
                    <TextInput style={globalStyles.TextInput}
                        onChangeText={val => SetData({ ...data, email: val })} />
                    <Text style={globalStyles.errors}>{error.email}</Text>

                    <Text style={globalStyles.label}>Password:</Text>
                    <TextInput secureTextEntry={true}
                        style={globalStyles.TextInput}
                        onChangeText={val => SetData({ ...data, password: val })} />
                    <Text style={globalStyles.errors}>{error.password}</Text>

                    <Pressable style={style.button} onPress={Submit}>
                        <Text style={style.text}>Login</Text>
                    </Pressable>

                </View>
            </View >
        </TouchableWithoutFeedback>
    )
}

const style = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: "#333",
        justifyContent: "center",
    },

    view: {
        margin: 20
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: 'rgb(27, 106, 204)',
    },

    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: "white",
        padding: 15
    },

})