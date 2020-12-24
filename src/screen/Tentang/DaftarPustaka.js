//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// create a component
const DaftarPustaka = () => {
    return (
        <View style={styles.container}>
            <View style={{ margin: 20 }}>
                <ScrollView>
                    <Text style={{ marginVertical: 5 }}>Chang, Raymond. 2005. KIMIA DASAR. KONSEP- KONSEP INTI. Edisi Ketiga.Jilid 1. Terjemahan M. Abdulkadir Martoprawiro et al. Jakarta : Erlangga.</Text>
                    <Text style={{ marginVertical: 5 }}>Chang, Raymond. 2005. KIMIA DASAR. KONSEP- KONSEP INTI. Edisi Ketiga. Jilid 2 Terjemahan Suminar Setiati Achmadi. Jakarta : Erlangga.</Text>
                    <Text style={{ marginVertical: 5 }}>Ebenbohr.wordpress.com diakses 02 November 2020 pukul 08.59 WIB.</Text>
                    <Text style={{ marginVertical: 5 }}>Harnanto, Ari dan Ruminten. 2009. Kimia 3 untuk SMA/MA kelas XII. Jakarta : Pusat Perbukuan, Departemen Pendidikan Nasional</Text>
                    <Text style={{ marginVertical: 5 }}>https: //candrajunie.com diakses 14 September 2020</Text>
                    <Text style={{ marginVertical: 5 }}>https: //://youtube.be/E67mEmzYqz8 diakses 02 Desember 2020</Text>
                    <Text style={{ marginVertical: 5 }}>Lustiyati, Elisabeth Deta et al. 2009. Aktif Belajar Kimia untuk SMA&MA kelas XII. Jakarta : Pusat Perbukuan, Departemen Pendidikan Nasional.</Text>
                    <Text style={{ marginVertical: 5 }}> Nugraha, Tjandrawati. Modul Kimia Unsur SMA Kelas XII diakses 6 September 2020 pukul 14.45 WIB</Text>
                    <Text style={{ marginVertical: 5 }}>Pangajuanto, Teguh dan Tri Rahmidi. 2009. Kimia 3 untuk SMA/MA kelas XII. Jakarta : Pusat Perbukuan, Departemen Pendidikan Nasional.</Text>
                    <Text style={{ marginVertical: 5 }}>Rufaida, Anis Dyah et al. 2013. Kimia untuk SMA/MA kelas XII. Klaten : Intan Pariwara</Text>
                    <Text style={{ marginVertical: 5 }}>Sukmawati, Wening. 2009. Kimia 3 untuk SMA&MA kelas XII. Jakarta : Pusat Perbukuan, Departemen Pendidikan Nasional.</Text>
                    <Text style={{ marginVertical: 5 }}>Utami, Budi et al. 2009. Kimia 3 untuk SMA/MA kelas XII Program Ilmu Alam. Jakarta : Pusat Perbukuan, Departemen Pendidikan Nasional.</Text>
                </ScrollView>
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
export default DaftarPustaka;
