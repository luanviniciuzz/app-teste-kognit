import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import colors from '../assets/styles/colors';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CardNotification({body, title, nome_icone, ...props}){
  return (
    <View 
            onPress={()=> props.onPress()}
            style={{
              width: "98%",
              borderRadius: 16,
              shadowColor: '#000',
              shadowOffset: {
              width: 0,
              height: 1,
              },
              shadowOpacity: 0.20,
              shadowRadius: 1.41,
              elevation: 2,
              padding:15,
              marginLeft: '1%',
              backgroundColor: 'white',
              flexDirection:'row',
              justifyContent:'space-between'
        }}>
          <View>
              <Text style={{ color: 'green', fontSize: 12, fontWeight:'bold', lineHeight: 14, letterSpacing: 0.5, marginBottom:5}}>
                  {title.substring(0, 30)}
              </Text>

            <View style={{width:250}}>
              <Text style={{ color: 'black', fontSize: 10, lineHeight: 12}}>
                  {body}
              </Text>
            </View>
             
          </View>
            



          <View style={{alignItems:'center', justifyContent:'center'}}>
            <TouchableOpacity onPress={() => props.excluirModal()}>
              <Icon name="close-circle" size={20} style={{color: colors['tema_padrao'].icones['close_modal']}}/>
            </TouchableOpacity>
          </View>
          
        </View>
  );
};