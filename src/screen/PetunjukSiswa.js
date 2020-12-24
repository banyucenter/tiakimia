//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const PetunjukSiswa = () => {
    return (
        <View style={styles.container}>
            <View style={{ margin: 20 }}>

                <View style={{ backgroundColor: '#dbf6e9', padding: 15, borderRadius:10 }}>
                    <Text>
                        Langkah-langkah yang perlu dilakukan siswa untuk dapat memperoleh hasil belajar yang maksimal yaitu:
                </Text>
                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                        <Text style={{ marginRight: 5 }}>1.</Text>
                        <Text>Membaca dan memahami materi yang disajikan.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                        <Text style={{ marginRight: 5 }}>2.</Text>
                        <Text>Melaksanakan setiap arahan yang terdapat dalam kegiatan pembelajaran,</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                        <Text style={{ marginRight: 5 }}>3.</Text>
                        <Text>Mengerjakan evaluasi pembelajaran,</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                        <Text style={{ marginRight: 5 }}>4.</Text>
                        <Text>Apabila kurang jelas dapat membaca ulang materi dan bertanya kepada guru</Text>
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
export default PetunjukSiswa;
