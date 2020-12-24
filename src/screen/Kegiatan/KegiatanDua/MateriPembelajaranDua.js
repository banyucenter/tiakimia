import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { WebView } from 'react-native-webview';

 
export default class MateriPembelajaranDua extends React.Component {
    render() {
        return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
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