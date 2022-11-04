import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Pessoa(props){
    return(
        <View style={styles.card}>
            <Text style={styles.texto}>{props.nome}</Text>
            <Text style={styles.texto}>{props.cargo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        height: 200,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'blue',
        padding: 10
    },
    texto:{
        color: 'white',
        fontSize: 30
    }

})