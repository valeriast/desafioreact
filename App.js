import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Pessoa from './src/Pessoa'

export default function App(){
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textoheader}>Seja Bem Vindo!</Text>
      </View>

      <Pessoa nome={'Nome: Fulano'} cargo={'Cargo: Desenvolvedor'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  header:{
    height: 55,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textoheader:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  }
});