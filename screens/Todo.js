import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


function Todo({ item, pressHandler }) {
    return (
        <View style={styles.listtodo}>

            <Text style={styles.textview}>{item.name}</Text>

            <TouchableOpacity onPress={() => pressHandler(item.id)} style={styles.tickview}>
                <MaterialIcons name="delete" size={30} color="black" />
            </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    listtodo: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        borderBottomWidth: 1,
    },
    textview: {
        width: '90%'
    },
    tickview: {
        margin: 5
    }
});
export default Todo;