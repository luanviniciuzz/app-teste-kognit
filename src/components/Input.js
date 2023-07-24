import React,{useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../assets/styles/colors';

export default function Input({nome_icone, onChangeText, secureTextEntry,  value}){

  return (
    <>
      <View 
          style={{        
              height: 54,
              width: '99%',
              borderColor: '#E7ECF3',
              borderBottomWidth:2,
              borderTopWidth: 2,
              borderLeftWidth:2,
              borderRightWidth: 2,
              backgroundColor: "#E7ECF3",
              borderWidth: 0,
              borderRadius: 16,
              //</>fontFamily: 'Poppins-Regular',
              fontSize: 14,
              letterSpacing: 0.5,
              lineHeight: 15,
              fontWeight: '400', 
              justifyContent:'flex-start',
              alignItems:'center',
              flexDirection:'row'
            }}
      >
        <View style={{paddingHorizontal:15}}>
            <Icon 
                name={nome_icone}
                size={16}
                color={colors['tema_padrao'].icones['input']}
              /> 
        </View>
            
        <View style={{width:'80%'}}>
          <TextInput
              style={{width:'100%', color: colors['tema_padrao'].blue['base_button'], fontSize:14, lineHeight:18,letterSpacing:0.5, marginTop:1}}
              placeholderTextColor={colors['tema_padrao'].icones['input']}
              placeholder={nome_icone == "alternate-email" ? 'example@mail.com' : null}         
              autoCapitalize="none"
              secureTextEntry={secureTextEntry}
              value={value}
              onChangeText={onChangeText}

          />
        </View>    
      </View>
      {/* {error ?
        <View style={{marginLeft:'5%'}}>
            <View style={{
                //backgroundColor: colors['claro'].white[200],
                justifyContent: 'center',
                borderRadius: 16,
                position: 'absolute',
                overflow: 'visible'
            }}>
                <Text style={{ color: 'red'}}>{'oi'}</Text>
            </View>
        </View>
        : false} */}
        
      
    </>
  );
};