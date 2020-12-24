import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../screen/Splash';
import Home from '../screen/Home';
import Pendahuluan from '../screen/Pendahuluan';
import Petunjuk from '../screen/Petunjuk';
import AsahOtak from '../screen/AsahOtak';
import Tentang from '../screen/Tentang';
import Kegiatan from '../screen/Kegiatan';
import PetunjukSimbol from '../screen/PetunjukSimbol';
import PetunjukSiswa from '../screen/PetunjukSiswa';
import PetunjukGuru from '../screen/PetunjukGuru';
import KegiatanSatu from '../screen/Kegiatan/KegiatanSatu';
import KegiatanDua from '../screen/Kegiatan/KegiatanDua';
import KegiatanTiga from '../screen/Kegiatan/KegiatanTiga';
import TujuanAkhir from '../screen/Pendahuluan/TujuanAkhir';
import KompetensiDasar from '../screen/Pendahuluan/KompetensiDasar';
import KompetensiInti from '../screen/Pendahuluan/KompetensiInti';
import DaftarPustaka from '../screen/Tentang/DaftarPustaka';
import ProfilPengembang from '../screen/Tentang/ProfilPengembang';
import PetaKonsepSatu from '../screen/Kegiatan/KegiatanSatu/PetaKonsep';
import MitigasiBencana from '../screen/Kegiatan/MitigasiBencana';
import MateriPembelajaranSatu from '../screen/Kegiatan/KegiatanSatu/MateriPembelajaranSatu';
import MateriPembelajaranDua from '../screen/Kegiatan/KegiatanDua/MateriPembelajaranDua';
import MateriPembelajaranTiga from '../screen/Kegiatan/KegiatanTiga/MateriPembelajaranTiga';

const Stack = createStackNavigator();

function rootStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#185b52',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen name="Splash" component={Splash}
                options={{
                    headerShown: null
                }} />

            <Stack.Screen name="Home" component={Home}
                options={{
                    headerShown: null
                }} />
            <Stack.Screen name="Kegiatan" component={Kegiatan}
                options={{
                    headerTitle: "Kegiatan Pembelajaran"
                }}
            />
            <Stack.Screen name="Mitigasi Bencana" component={MitigasiBencana}
                options={{
                    headerTitle: "Mitigasi Bencana"
                }}
            />
            <Stack.Screen name="Kegiatan Satu" component={KegiatanSatu}
                options={{
                    headerTitle: "Kegiatan Pembelajaran 1"
                }}
            />

            <Stack.Screen name="Peta Konsep Satu" component={PetaKonsepSatu}
                options={{
                    headerTitle: "Peta Konsep"
                }}
            />
            <Stack.Screen name="Kegiatan Dua" component={KegiatanDua}
                options={{
                    headerTitle: "Kegiatan Pembelajaran 2"
                }}
            />
            <Stack.Screen name="Kegiatan Tiga" component={KegiatanTiga}
                options={{
                    headerTitle: "Kegiatan Pembelajaran 3"
                }}
            />

            <Stack.Screen name="Materi Pembelajaran Satu" component={MateriPembelajaranSatu}
                options={{
                    headerTitle: "Materi Pembelajaran"
                }}
            />
            <Stack.Screen name="Materi Pembelajaran Dua" component={MateriPembelajaranDua}
                options={{
                    headerTitle: "Materi Pembelajaran"
                }}
            />
            <Stack.Screen name="Materi Pembelajaran Tiga" component={MateriPembelajaranTiga}
                options={{
                    headerTitle: "Materi Pembelajaran"
                }}
            />

            <Stack.Screen name="Pendahuluan" component={Pendahuluan}
            />
            <Stack.Screen name="Tujuan Akhir" component={TujuanAkhir}
                options={{
                    headerTitle: "Tujuan Akhir"
                }}
            />
            <Stack.Screen name="Kompetensi Dasar" component={KompetensiDasar}
                options={{
                    headerTitle: "Kompetensi Dasar"
                }}
            />
            <Stack.Screen name="Kompetensi Inti" component={KompetensiInti}
                options={{
                    headerTitle: "Kompetensi Inti"
                }}
            />
            <Stack.Screen name="Petunjuk" component={Petunjuk}
                options={{
                    headerTitle: "Petunjuk Penggunaan"
                }}
            />
            <Stack.Screen name="Petunjuk Simbol" component={PetunjukSimbol}
                options={{
                    headerTitle: "Keterangan Menu dan Tombol"
                }}
            />

            <Stack.Screen name="Petunjuk Siswa" component={PetunjukSiswa}
                options={{
                    headerTitle: "Petunjuk Siswa"
                }}
            />

            <Stack.Screen name="Petunjuk Guru" component={PetunjukGuru}
                options={{
                    headerTitle: "Petunjuk Guru"
                }}
            />
            <Stack.Screen name="AsahOtak" component={AsahOtak}
            />
            <Stack.Screen name="Tentang" component={Tentang}
            />
            <Stack.Screen name="Daftar Pustaka" component={DaftarPustaka}
                options={{
                    headerTitle: "Daftar Pustaka"
                }}
            />
            <Stack.Screen name="Profil Pengembang" component={ProfilPengembang}
                options={{
                    headerTitle: "Profil Pengembang"
                }}
            />

        </Stack.Navigator>

    )
}

export default rootStack;