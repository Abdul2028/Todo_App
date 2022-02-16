import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'


function Todo({ item, pressHandler }) {
    return (
        <View style={styles.touchable} >
            <View style={styles.view}>
                <Text>{item.name}</Text>
            </View>
            <View >
                <TouchableOpacity onPress={() => pressHandler(item.id)} style={{ width: '100%' }}>
                    <Text style={styles.ticker}>✔</Text>
                </TouchableOpacity>
            </View>



        </View>
    )
};

const styles = StyleSheet.create({

    view: {
        width: '90%',
        paddingVertical: 10
    },

    touchable: {
        flex: 1,
        flexDirection: 'row',
        margin: 3,
        paddingHorizontal: 8,
        width: '95%',
        borderWidth: 2,
        borderColor: 'lightgrey'
    },
    ticker: {
        fontSize: 20,
        backgroundColor: 'lightgrey',
        marginHorizontal: 2,
        padding: 10,
        alignContent: 'center',
        justifyContent: 'center'
    }

});
export default Todo;