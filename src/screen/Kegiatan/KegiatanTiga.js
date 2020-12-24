//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

// create a component
const KegiatanTiga = () => {
    return (
        <View style={styles.container}>
            <View style={{ margin: 15 }}>
                <TouchableOpacity>
                    <View style={{ backgroundColor: '#c24914', padding: 15, borderRadius: 10, marginVertical: 5 }}>
                        <Text style={{ color: 'white' }}>Peta Konsep</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ backgroundColor: '#03506f', padding: 15, borderRadius: 10, marginVertical: 5 }}>
                        <Text style={{ color: 'white' }}>Materi Pembelajaran</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ backgroundColor: '#583d72', padding: 15, borderRadius: 10, marginVertical: 5 }}>
                        <Text style={{ color: 'white' }}>Tujuan Pembelajaran</Text>
                    </View>
                </TouchableOpacity>

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
export default KegiatanTiga;
