//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// create a component
const KompetensiInti = () => {
    return (
        <View style={styles.container}>
            <View style={{ margin: 10 }}>

                <View style={{ padding: 15, borderRadius: 10 }}>
                    <ScrollView>
                        <View style={{ backgroundColor: '#adce74', flexDirection: 'row', marginVertical: 5, padding: 15 }}>
                            <Text style={{ marginRight: 5 }}>KI-1</Text>
                            <Text style={{ flex: 1 }}>Menghayati dan mengamalkan ajaran agama dianutnya.</Text>
                        </View>
                        <View style={{ backgroundColor: '#adce74', flexDirection: 'row', marginVertical: 5, padding: 15 }}>
                            <Text style={{ marginRight: 5 }}>KI-2</Text>
                            <Text style={{ flex: 1 }}>Menunjukkan perilaku jujur, disiplin, tanggungjawab, peduli (gotong royong, kerjasama, toleran, damai), santun, responsive dan proaktif dan menunjukkan sikap sebagai bagian dari solusi atas berbagai permasalahan dalam berinteraksi secara efektif dengan lingkungan sosial dan alam serta dalam menempatkan diri sebagai cerminan bangsa dalam pergaulan dunia.</Text>
                        </View>
                        <View style={{ backgroundColor: '#adce74', flexDirection: 'row', marginVertical: 5, padding: 15 }}>
                            <Text style={{ marginRight: 5 }}>KI-3</Text>
                            <Text style={{ flex: 1 }}>Memahami, menerapkan, menganalisis dan mengevaluasi pengetahuan faktual, konseptual, prosedural, dan metakognitif berdasarkan rasa ingin tahunya tentang ilmu pengetahuan, teknologi, seni, budaya, dan humaniora dengan wawasan kemanusiaan, kebangsaan, kenegaraan, dan peradaban terkait penyebab fenomena dan kejadian, serta menerapkan pengetahuan prosedural pada bidang kajian yang spesifik sesuai dengan bakat dan minatnya untuk memecahkan masalah.</Text>
                        </View>
                        <View style={{ backgroundColor: '#adce74', flexDirection: 'row', marginVertical: 5, padding: 15 }}>
                            <Text style={{ marginRight: 5 }}>KI-4</Text>
                            <Text style={{ flex: 1 }}>Mengolah, menalar, menyaji, dan mencipta dalam ranah konkrit dan ranah abstrak terkait dengan pengembangan dari yang dipelajarinya di sekolah secara mandiri serta bertindak secara efektif dan kreatif, dan mampu menggunakan metode sesuai kaidah keilmuan.</Text>
                        </View>
                    </ScrollView>

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
export default KompetensiInti;
