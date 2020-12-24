//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import data from '../data/petunjuk'

// create a component
const PetunjukSimbol = () => {
    // console.log(data.data);

    const [menu, setMenu] = useState(data.data)

    const renderItem = ({ item }) => {

        return (
            <View style={{flexDirection:'row', alignItems:'center', padding:15, borderBottomWidth:1, borderBottomColor:'#ccc'}}>
                <Image source={item.icon} style={{ width: 25, height: 25 }} />  
                <Text style={{flex:1, marginLeft:10}}>{item.menu}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 20, marginTop: 10, borderBottomWidth:1, borderBottomColor:'#ccc', padding:10 }}>
                <Text style={{fontWeight:'bold'}}>Keterangan Menu dan Tombol</Text>
            </View>
            <View style={{flex:1}}>
                <FlatList data={menu} renderItem={renderItem} keyExtractor={(item) => item.id} />
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
export default PetunjukSimbol;
