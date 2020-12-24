import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
 
import { WebView } from 'react-native-webview';
 
export default class MateriPembelajaranSatu extends React.Component {
    render() {
        return <WebView source={{ uri: 'https://www.dropbox.com/s/dg5lc73knben1bj/baru%205.1-%20Keg.Pembelajaran%201.pdf?dl=0' }} />;
      }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});