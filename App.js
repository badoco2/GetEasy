import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight, KeyboardAvoidingView  } from 'react-native';
import Style from './src/Style'



export default function App() {
  return(
    <KeyboardAvoidingView
      behavior={Platform.select({
        ios: 'padding',
        android: 'heigth',
      })}
      style={Style.container}
    >
      <View style={Style.container1}>
      <Text style={Style.logo}> GetEase</Text>
      </View>
      <View style={Style.container2}>
        <Text style={Style.h1}>Seja bem-vindo(a)</Text>
        <Text style={Style.h2}>Faça login para continuar.</Text>
        <TextInput style={Style.login} placeholder={'Name'} />
        <TextInput style={Style.formulario} placeholder={'Senha'} />
        <TouchableHighlight underlayColor="white">
          <Text style={Style.entrar}>Entrar</Text>
        </TouchableHighlight>
      </View>
      </KeyboardAvoidingView>
  )


}