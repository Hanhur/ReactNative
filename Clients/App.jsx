import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import ChatButton from './components/ChatButton';
import ActiveButton from './components/ActiveButton';
// import Icon from './components/Icon';

export default function App() 
{
    return (
        <View style={styles.container}>
            <ChatButton text="Чат"/>
            <ActiveButton text="Звонок"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 24,
        paddingRight: 24,
        marginTop: 50,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});
