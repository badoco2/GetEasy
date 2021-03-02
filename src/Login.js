import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight  } from 'react-native';
import Style from './src/Style'



export default function App() {
  return(
    <View style={Style.container}>
        <Text style={Style.h1}>Seja bem-vindo(a)</Text>
        <Text style={Style.h2}>Faça login para continuar.</Text>
        <TextInput style={Style.login} placeholder={'Name'} />
        <TextInput style={Style.formulario} placeholder={'Senha'} />
        <TouchableHighlight underlayColor="white">
          <Text style={Style.entrar}>Entrar</Text>
        </TouchableHighlight>
    </View>
  )


}