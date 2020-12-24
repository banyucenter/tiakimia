//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import image from '../../../assets/images/petakonsep.png'

// create a component
const PetaKonsepSatu = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text>Konsep</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default PetaKonsepSatu;
