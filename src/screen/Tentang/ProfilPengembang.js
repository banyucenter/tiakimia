//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const ProfilPengembang = () => {
    return (
        <View style={styles.container}>
            <View style={{ margin: 20 }}>

                <View style={{ backgroundColor: '#dbf6e9', padding: 15, borderRadius:10 }}>
                    <Text>
                    E-Modul Kimia Unsur berorientasi Mitigasi Bencana merupakan media pembelajaran kimia online berbasis android berisi materi Kimia Unsur kelas XII SMA/MA, pendidikan kebencanaan, dan mitigasi bencana tanah longsor serta dilengkapi evaluasi yang secara interaktif dapat membantu siswa SMA/MA belajar mandiri.
 
                </Text>
                    <View style={{ marginVertical: 5 }}>
                        <Text style={{fontWeight:'bold'}}>Pengembang Media :</Text>
                        <Text>Septya Nur Afijah</Text>
                    </View>
                    <View style={{marginVertical: 5 }}>
                        <Text style={{fontWeight:'bold'}}>Dosen pembimbing :</Text>
                        <Text>Apriliana Drastisianti, M.Pd</Text>
                        <Text>Wirda Udaibah, M.Si</Text>
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
export default ProfilPengembang;
