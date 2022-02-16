import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native'

function Header() {


    return (
        <SafeAreaView style={styles.header}>
            <Text style={styles.headtext}>My TODO'S</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: 'coral',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headtext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    }

});


export default Header;