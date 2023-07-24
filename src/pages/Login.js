import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text, Image, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import colors from '../assets/styles/colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Input from '../components/Input';

import ConfirmButton from '../components/ConfirmButton';


export default function Login({navigation}) {
  
const[email, setEmail] = useState('')
const[senha, setSenha] = useState('')
const[exibirSenha, setExibirSenha] = useState(false)
const[credenciais, setCredenciais] = useState(true)

function validar_email(email) {
  const regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex_email.test(email)
}

const handleSubmit = (email) => {
  const resultado = validar_email(email)
  if(resultado && senha.length){
    navigation.navigate('HomePage')
  }else{
    setCredenciais(false)
    setTimeout(() => {
      setCredenciais(true)
    },3000)
  }
}
const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
    console.log('Texto digitado:', newEmail);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={{flex:1, backgroundColor:colors['tema_padrao'].back_ground['branco'], paddingHorizontal:'5%'}}>
     
        <View style={{ height: Dimensions.get('window').height * 0.10, justifyContent: 'center', alignItems:'center'}}>
           <Image
            source={require('../assets/img/kognit_logo.png')}
           />
        </View>

        <View style={{height: Dimensions.get('window').height * 0.45, justifyContent:'space-evenly'}}>

          <View>
            <Text style={{marginBottom:5, paddingLeft:'3%', letterSpacing:0.5}}>{'Email'}</Text>
              <Input
                nome_icone={'alternate-email'}
                value={email}
                onChangeText={setEmail}
              />
          </View>

          <View>
            <View style={{justifyContent:'space-between', flexDirection:'row'}}>
              <View>
                <Text style={{marginBottom:5, paddingLeft:'3%', letterSpacing:0.5}}>{'Senha'}</Text>
              </View>
              <View>
                <Icon onPress={() => setExibirSenha(!exibirSenha)} name={exibirSenha ? 'eye-outline' : 'eye-off-outline'} size={20} style={{paddingRight:'3%'}}/>
              </View>
            </View>

            <Input
              nome_icone={'lock-outline'}
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={!exibirSenha}
            />
          </View>

          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text style={{
                marginBottom:5,
                paddingLeft:'3%',
                letterSpacing:0.5,
                fontWeight:'bold',
                color: credenciais ? colors['tema_padrao'].back_ground['branco'] : colors['tema_padrao'].icones['close_modal']
              }}>{'Credenciais inválidas'}</Text>
            <ConfirmButton
                comando={'Entrar'}
                onPress={() => handleSubmit(email)}
            />
          </View>
            
        </View>
      
        <View style={{height: Dimensions.get('window').height * 0.25,flexDirection: "column", justifyContent:'center'}}>

          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
           
                <Text>{'2023'}</Text>
                <Icon name={'copyright'} size={20} style={{paddingHorizontal:'1%'}}/>
                <Text>{'Kognit'}</Text>
          </View>

        </View>
        
      <View
         style={{
          height: Dimensions.get('window').height * 0.15,
          justifyContent: 'center',
          alignItems: 'center',
      }}>
      </View>
    </View>
  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
 
});
