import React from 'react';
import { Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


function Header() {


    return (
        <SafeAreaView style={styles.head}>
            <Text style={styles.headtext}>My TODO'S</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    head: {
        backgroundColor: 'coral',
        height: 70,
        alignContent: 'center',
        justifyContent: 'center',
    },
    headtext: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        textAlign:'center'
        
    }

});


export default Header;