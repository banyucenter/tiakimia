//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const KompetensiDasar = () => {
    return (
        <View style={styles.container}>
            <View style={{ margin: 20 }}>

                <View style={{ backgroundColor: '#dbf6e9', padding: 15, borderRadius: 10 }}>
                    <Text>
                        Siswa Mampu:
                </Text>
                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                        <Text style={{ marginRight: 5 }}>3.7</Text>
                        <Text style={{ flex: 1 }}>Menganalisis kelimpahan, kecenderungan
sifat fisik dan sifat kimia, manfaat, dan proses pembuatan unsur-unsur golongan utama (gas mulia, halogen, alkali, dan alkali tanah).</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                        <Text style={{ marginRight: 5 }}>4.7</Text>
                        <Text style={{ flex: 1 }}>Menyajikan data hasil penelusuran informasi sifat dan pembuatan unsur-unsur golongan utama (halogen, alkali, dan alkali tanah)</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                        <Text style={{ marginRight: 5 }}>3.8</Text>
                        <Text style={{ flex: 1 }}>Menganalisis kelimpahan, kecenderungan
sifat fisika dan kimia, manfaat, dan proses pembuatan unsur-unsur periode 3 dan golongan transisi (periode 4).</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                        <Text style={{ marginRight: 5 }}>4.8</Text>
                        <Text style={{ flex: 1 }}>Menyajikan data hasil penelusuran informasi sifat dan pembuatan unsur-unsur Periode 3 dan unsur golongan transisi (periode 4).</Text>
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
export default KompetensiDasar;
