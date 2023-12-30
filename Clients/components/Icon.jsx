import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function Icon()
{
    return (
        <View style={styles.icon}>
            <Image source={require('../images/arrow-left.svg')}/>
            <Image source={require('../images/square.svg')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {

    }
});