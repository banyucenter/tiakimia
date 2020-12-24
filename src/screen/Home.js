//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, Image, FlatList , TouchableOpacity, Alert} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import image from '../assets/images/perpustakaan.jpg'
import home from '../assets/images/menu/home.png'
import pendahuluan from '../assets/images/menu/pendahuluan.png'
import petunjuk from '../assets/images/menu/petunjuk.png'
import asahotak from '../assets/images/menu/asahotak.png'
import kegiatan from '../assets/images/menu/kegiatan.png'
import tentang from '../assets/images/menu/tentang.png'

// create a component
const Home = ({ navigation }) => {

    const [menu, setMenu] = useState([
        {
            id: "1",
            menu: 'Beranda',
            link: 'Home',
            icon: home
        },
        {
            id: "2",
            menu: 'Kegiatan Pembelajaran',
            link: 'Kegiatan',
            icon: kegiatan
        },
        {
            id: "3",
            menu: 'Petunjuk Penggunaan',
            link: 'Petunjuk',
            icon: petunjuk
        },
        
        {
            id: "4",
            menu: 'Asah Otak',
            link: 'AsahOtak',
            icon: asahotak
        },
        {
            id: "5",
            menu: 'Pendahuluan',
            link: 'Pendahuluan',
            icon: pendahuluan
        },
        {
            id: "6",
            menu: 'Tentang',
            link: 'Tentang',
            icon: tentang
        }
    ])


    const renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, margin: 15 }}>
                <TouchableOpacity onPress={()=>navigation.navigate(item.link)}>
                    <View style={{ backgroundColor: 'green', height: 60, flexDirection: 'row', alignItems: 'center', padding: 15, alignContent: 'center', borderRadius: 20 }}>
                        <Image source={item.icon} style={{ width: 30, height: 30 }} />
                        <Text style={{ flex: 1, fontSize: 12, color: 'white', fontWeight: 'bold', marginLeft: 10 }}>{item.menu}</Text>
                    </View>
                </TouchableOpacity>
            </View>

        )
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={{ backgroundColor: '#185b52', padding: 20, marginHorizontal: 15, marginBottom: 15, borderWidth: 2, borderColor: 'yellow' }}>
                    <Text style={{ textAlign: 'center', color: 'yellow', fontWeight: 'bold', fontSize: 24 }}>
                        Selamat Datang di Modul
                        </Text>
                    <Text style={{ textAlign: 'center', color: 'yellow', fontWeight: 'bold', fontSize: 24 }}>
                        Kimia Unsur Online
                        </Text>
                    <Text style={{ textAlign: 'center', color: 'yellow', fontSize: 14, fontStyle: 'italic' }}>
                        "Kenali Kimia Peduli bencana"
                        </Text>
                </View>

                <View style={{ margin: 5 }}>
                    <FlatList data={menu} numColumns={2} renderItem={renderItem} keyExtractor={(item) => item.id} />
                </View>

            </ImageBackground>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#185b52',

    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
    }
});

//make this component available to the app
export default Home;
