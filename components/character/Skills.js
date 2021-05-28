import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text, View, Alert } from 'react-native';
import axios from 'axios';
import {useEffect, useState} from "react";

const Separator = () => (
    <View style={styles.separator} />
);
const DoubleSeparator = () => (
  <View style={styles.doubleSeparator} />
);

export default function Skills(props) {

  // Tools

  const [toolsList, SetToolList] = useState([]);




  useEffect(() => {
    const fetchUrl = async () => {
        try {
            // tools
            const restools = await axios.get('https://www.dnd5eapi.co/api/equipment-categories/tools');
            const toolsDatas = resTools.equipment.name;
            console.log(toolsDatas);
            const tools = [];

            toolsDatas.map(e => {
                tools.push(e.name);
            })

            setTimeout(() => {
                setToolList(tools);
    
                setIsLoading(false);
            }, 3000)
        } catch (err) {
            setError(err.message)
            setIsLoading(false)
        }
    }
    fetchUrl()
}, [])


  const alertDisplay = () => {
    Alert.alert({tools});
}
return (

    <SafeAreaView style={styles.container}>     
      <View style={styles.nameView}>
        <Text style={styles.nameText}>
        {props.characterName}
        </Text>
      </View>


      <DoubleSeparator />

      <View style={styles.view}>
        <TouchableOpacity onPress={alertDisplay}>
          <Text style={styles.text}>
            comp Racial du perso 
          </Text>
          <Text style={styles.text}>
          {props.Skills} 
          </Text>
        </TouchableOpacity>        
      </View>
        <Separator />

      <View style={styles.view}>
        <TouchableOpacity onPress={alertDisplay}>
          <Text style={styles.text, styles.toolTextColor}>
                outils
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={alertDisplay}>
          <Text style={styles.text, styles.languageTextColor}>
                langues
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={alertDisplay}>
          <Text style={styles.text, styles.stuffTextColor}>
                armes & armures maitrisés
          </Text>
        </TouchableOpacity>
      </View>

      <Separator />

      <View style={styles.view}>
      <TouchableOpacity onPress={alertDisplay}>
            <Text style={styles.text, styles.cardTextColor}>
                cards /
            </Text>
            <Text style={styles.text, styles.capacityTextColor}>
                / capacités
            </Text> 
      </TouchableOpacity>             
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
    },
    nameView: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20 ,
    },
    nameText: {
      fontSize : 24 ,
      backgroundColor: '#ddd',
      alignItems: 'center',
      justifyContent: 'center',
 },
    view: {
         marginHorizontal:20, 
         padding : 40 ,
         backgroundColor: '#ddd',
         alignItems: 'center',
         justifyContent: 'center',
    },
    text: {

      justifyContent: 'center',
    },
    toolTextColor: {
      borderColor: '#0080ff',
      borderWidth: 2,
      borderRadius: 5,
    },
    languageTextColor: {
      borderColor: '#ff0000',
      borderWidth: 2,
      borderRadius: 5,
    },
    stuffTextColor: {
      borderColor: '#ffff00',
      borderWidth: 2,
      borderRadius: 5,
    },
    cardTextColor: {
      borderColor: '#00ff00',
      borderWidth: 2,
      borderRadius: 5,
    },
    capacityTextColor: {
      borderColor: '#00ffff',
      borderWidth: 2,
      borderRadius: 5,
    },
    buttonView: {
      marginHorizontal:20, 
      padding : 20,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
      color : '#ffffff',
      backgroundColor : '#7B1B91',
      alignItems: 'center',
      justifyContent: 'center',
    },  
    
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
    },
    doubleSeparator: {
      marginVertical: 16,
      borderBottomColor: '#737373',
  },
});

