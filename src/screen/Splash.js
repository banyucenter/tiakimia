//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import image from '../assets/images/splashscreen.png'

// create a component
const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => navigation.navigate('Home'), 5000);
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <Image source={image} style={styles.image}>

            </Image>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#185b52'
    },
    image: {
        flex: 1,
        width: windowWidth,
        height: windowHeight,
        resizeMode: 'center'
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
    }
});

//make this component available to the app
export default Splash;
