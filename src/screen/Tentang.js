//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const Tentang = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{margin:15}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Daftar Pustaka')}>
                    <View style={{backgroundColor:'#c24914', padding:15,borderRadius:10, marginVertical:5}}>
                        <Text style={{color:'white'}}>Daftar Pustaka</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Profil Pengembang')}>
                    <View style={{backgroundColor:'#03506f', padding:15,borderRadius:10, marginVertical:5}}>
                        <Text style={{color:'white'}}>Profil Pengembang</Text>
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
export default Tentang;
