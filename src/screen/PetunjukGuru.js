//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const PetunjukGuru = () => {
    return (
        <View style={styles.container}>
            <View style={{ margin: 20 }}>

                <View style={{ backgroundColor: '#dbf6e9', padding: 15, borderRadius:10 }}>
                    <Text>
                    Peran guru dalam setiap kegiatan pembelajaran yaitu :
                </Text>
                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                        <Text style={{ marginRight: 5 }}>1.</Text>
                        <Text>Membimbing siswa untuk memahami konsep dan menjawab pertanyaan.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                        <Text style={{ marginRight: 5 }}>2.</Text>
                        <Text>Mengarahkan kegiatan diskusi kelompok.</Text>
                    </View>
                    
                </View>

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
export default PetunjukGuru;
