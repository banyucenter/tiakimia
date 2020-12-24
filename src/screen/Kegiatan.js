//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

// create a component
const Kegiatan = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{margin:15}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Kegiatan Satu')}>
                    <View style={{backgroundColor:'#c24914', padding:15,borderRadius:10, marginVertical:5}}>
                        <Text style={{color:'white'}}>Kegiatan Pembelajaran 1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Kegiatan Dua')}>
                    <View style={{backgroundColor:'#03506f', padding:15,borderRadius:10, marginVertical:5}}>
                        <Text style={{color:'white'}}>Kegiatan Pembelajaran 2</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Kegiatan Tiga')}>
                    <View style={{backgroundColor:'#583d72', padding:15,borderRadius:10, marginVertical:5}}>
                        <Text style={{color:'white'}}>Kegiatan Pembelajaran 3</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Mitigasi Bencana')}>
                    <View style={{backgroundColor:'#456268', padding:15,borderRadius:10, marginVertical:5}}>
                        <Text style={{color:'white'}}>Mitigasi Bencana</Text>
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
export default Kegiatan;
