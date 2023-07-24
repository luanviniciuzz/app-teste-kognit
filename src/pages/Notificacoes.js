import React, {useEffect, useState }from 'react';
import {Text, View, FlatList, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../assets/styles/colors';
import API from '../services/Api'

import CardNotification from '../components/CardNotification';


export default function Notificacoes(){
  const navigation = useNavigation()

  const[notificacoes, setNotificacoes] = useState([])
  const[reRender, setReRender] = useState(false)
  const[loading, setLoading] = useState(false)
  

  useEffect(() => {
    async function init(){

      await consultar_notificacoes(1)
    }
    init()
  },[])

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
          <TouchableOpacity
          onPress={() => excluir_todas_as_notificacoes()}
          style={{alignItems:'center', justifyContent:'center',height:30 , backgroundColor:colors['tema_padrao'].icones['close_modal'], paddingHorizontal:10, borderRadius:5}}
        >
          <Text style={{fontSize:15, color:'white'}}>{'Limpar'}</Text>
        </TouchableOpacity>
      ),
    });
  },[navigation])


  async function consultar_notificacoes(userId){
  try {
    let request = await API.get(`/posts?userId=${userId}`);
    return setNotificacoes(request.data)

    
  } catch (error) {
    throw new Error(`Erro: ${error.message}`);
  }
}

function excluir_uma_notificacao(item){
  const index = notificacoes.indexOf(item)
  notificacoes.splice(index, 1)
  setReRender(!reRender)
}
function excluir_todas_as_notificacoes(){
  setNotificacoes([])
}

const renderItem = ({item}) =>{
  return(
    <CardNotification
        title={item.title}
        body={item.body}
        excluirModal={() => excluir_uma_notificacao(item)}
    />
  )
}
const separatorComponent = () =>{
  return(
    <View style={{height:10}}></View>
  )
}
const renderFooter = () =>{
  return(
    <View style={{height:50}}></View>
  )
}

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal:'5%',
        backgroundColor: colors['tema_padrao'].back_ground['branco']
        
      }}>
      <FlatList
          data={notificacoes}
          extraData={reRender}
          style={{paddingTop:5}}
          keyExtractor={item => item.id}
          renderItem={(item) => renderItem(item)}
          ItemSeparatorComponent={separatorComponent}
          ListFooterComponent={renderFooter}
      />
    </View>
  );
};
