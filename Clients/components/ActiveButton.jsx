import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ActiveButton(props)
{
    return (
        <View style={styles.call}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    call: {
        backgroundColor: '#FB7360',
        borderRadius: 16,
        flex: 1,
        height: 52,
        marginRight: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        lineHeight: 24,
    }
});