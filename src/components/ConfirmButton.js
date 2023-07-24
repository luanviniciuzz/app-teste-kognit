import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import colors from '../assets/styles/colors';

export default function ConfirmButton({comando,...props}){
  return (
    <TouchableOpacity 
        style={{
          width:'100%',
          height:54,
          borderRadius: 16,
          backgroundColor:colors['tema_padrao'].blue['base_button'],
          justifyContent:'center',
          alignItems:'center'
        }}
        onPress={() => props.onPress()}
    >
      <Text style={{fontSize:20,letterSpacing:0.5, color:'white'}}>
        {comando}
      </Text>
        
    </TouchableOpacity>
  );
};