//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , TouchableOpacity} from 'react-native';

// create a component
const Petunjuk = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{margin:15}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Petunjuk Simbol')}>
                    <View style={{backgroundColor:'#c24914', padding:15,borderRadius:10, marginVertical:5}}>
                        <Text style={{color:'white'}}>Petunjuk Menu dan Simbol</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Petunjuk Siswa')}>
                    <View style={{backgroundColor:'#03506f', padding:15,borderRadius:10, marginVertical:5}}>
                        <Text style={{color:'white'}}>Petunjuk bagi Siswa</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Petunjuk Guru')}>
                    <View style={{backgroundColor:'#583d72', padding:15,borderRadius:10, marginVertical:5}}>
                        <Text style={{color:'white'}}>Petunjuk bagi Guru</Text>
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
export default Petunjuk;
