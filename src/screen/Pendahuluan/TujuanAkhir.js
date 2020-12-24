//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const TujuanAkhir = () => {
    return (
        <View style={styles.container}>
            <View style={{ margin: 20 }}>

                <View style={{ backgroundColor: '#dbf6e9', padding: 15, borderRadius: 10 }}>

                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                        <Text style={{ marginRight: 5 }}>1.</Text>
                        <Text>Siswa dapat memahami kecenderungan sifat fisik dan sifat kimia unsur golongan utama, unsur periode 3, serta golongan transisi.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                        <Text style={{ marginRight: 5 }}>2.</Text>
                        <Text>Siswa dapat mengemukakan kelimpahan dan manfaat unsur golongan utama, unsur periode 3, serta golongan transisi.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                        <Text style={{ marginRight: 5 }}>3.</Text>
                        <Text>Siswa dapat memahami proses pembuatan unsur golongan utama, unsur periode 3, serta golongan transisi.</Text>
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
export default TujuanAkhir;
