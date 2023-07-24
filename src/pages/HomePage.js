import React, {useEffect }from 'react';
import {Text, View, TouchableOpacity, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../assets/styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function HomePage(){

  
  const navigation = useNavigation()
  useEffect(() => {

      navigation.setOptions({
          headerRight: () => (
              <TouchableOpacity
              onPress={() => navigation.navigate('Notificacoes')}
              style={{alignItems:'center', justifyContent:'center', width:50, height:50}}
            >
              {Platform.OS == 'android' ? (
                <Icon name="bell" style={{fontSize: 35, color:colors['tema_padrao'].icones['auth']}}/>
              ) : (
                <Icon name="bell" style={{fontSize: 35, color:colors['tema_padrao'].icones['auth']}}/>
              )}
            </TouchableOpacity>
          ),
        });

  },[navigation])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors['tema_padrao'].back_ground['branco']
      }}>
      <Text>🇧🇷 🇲🇽</Text>
    </View>
  );
};
