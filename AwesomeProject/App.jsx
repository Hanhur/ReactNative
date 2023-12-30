import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const SCREEN_WIGHT = Dimensions.get('window').width;

export default function App() 
{
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.circle}/>
                <Image style={styles.image} source={require('./src/images/dog.png')}/>
            </View>       
            <Text style={styles.title}>Pomeranian</Text>
            <Text style={styles.text}>Taking care of a pet is my favorite, it helps me to...</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Другое фото</Text>
                </TouchableOpacity>   
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Добавить в избранное</Text>
                </TouchableOpacity> 
            </View>  
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e7dfe3',
        justifyContent: 'center',
        padding: 42,
    },
    image: {
        width: SCREEN_WIGHT - 42 * 2,
        height: SCREEN_WIGHT - 42 * 2,
        marginBottom: 42,
        borderRadius: 16,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 31
    },
    text: {
        width: 303,
        marginBottom: 43
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 12,
        alignSelf: 'flex-start'
    },
    buttonText: {
        color: '#5533EA',
        fontSize: 14,
        fontWeight: '500',
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'green',
        position: 'absolute',
        top: 10,
        right: 10,
    }
});
