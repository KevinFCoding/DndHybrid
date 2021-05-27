import { StatusBar } from 'expo-status-bar';
import Description from './components/character/Description';
import Sheet from './components/character/Sheet';

import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';
import {useEffect, useState} from "react";

export default function App() {

  const Tab = createBottomTabNavigator();

    const [classesList, setClassesList] = useState([]);
    const [racesList, setRacesList] = useState([]);
    const [backgroundList, setBackgroundsList] = useState([]);

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchUrl = async () => {
            try {
                const resClasses = await axios.get(`https://www.dnd5eapi.co/api/classes`);
                const resRaces = await axios.get(`https://www.dnd5eapi.co/api/races`);
                const resBackgrounds = await axios.get(`https://www.dnd5eapi.co/api/backgrounds`);
                const classDatas = resClasses.data.results;
                const racesDatas = resRaces.data.results;
                const backgroundsDatas = resBackgrounds.data.results;
                const classesNames = [];
                const racesNames = [];
                const backgroundNames = [];

                classDatas.forEach(e => {
                    classesNames.push(e.name);
                });
                racesDatas.forEach(e => {
                    racesNames.push(e.name);
                });
                backgroundsDatas.forEach(e => {
                    backgroundNames.push(e.name);
                });
                setTimeout(() => {
                    setClassesList(classesNames);
                    setRacesList(racesNames);
                    setBackgroundsList(backgroundNames);
                }, 1000)
            } catch (err) {
                setError(err.message)
                setIsLoading(false)
            }
        }
        fetchUrl()
    }, [])

    return (
      <NavigationContainer>
        <StatusBar style="auto" />
        <Tab.Navigator>
          <Tab.Screen name="Sheet" component={Sheet}/>
          <Tab.Screen name="Bio" component={Description} />
          <Tab.Screen name="Skills" component={Description} />
          <Tab.Screen name="Equipment" component={Description} />
          <Tab.Screen name="Spells" component={Description} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    namePc: {
      width: '100%',
        borderBottomWidth: 1
    }
});
