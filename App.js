import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default function App() {

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
          setIsLoading(false)
        }, 1000)
      } catch (err) {
        setError(err.message)
        setIsLoading(false)
      }
    }
    fetchUrl()
  }, [])

  return (
      <View style={styles.container}>
        <StatusBar style="auto" />

        {isLoading ? (
            <Text>Loading…</Text>
        ) : null}

        {error ? (
            <Text>{error}</Text>
        ) : null}

        {/*{nearEarthObjects.length > 0 ? (*/}
        {/*    <>*/}
        {/*      <Text style={styles.subtitle}>Asteroid of the month</Text>*/}
        {/*      <NearEarthObjectCard*/}
        {/*          neo={nearEarthObjects[0]}*/}
        {/*          style={styles.neoCardOfTheMonth}*/}
        {/*      />*/}
        {/*      <Text style={styles.subtitle}>All Asteroids</Text>*/}
        {/*      {nearEarthObjects.map((neo) => {*/}
        {/*        return (*/}
        {/*            <NearEarthObjectCard*/}
        {/*                key={neo.id}*/}
        {/*                neo={neo}*/}
        {/*                style={styles.neoCard}*/}
        {/*            />*/}
        {/*        )*/}
        {/*      })}*/}
        {/*    </>*/}
        {/*) : null}*/}
      </View>
  );
}
async function test() {
  const url = 'https://www.dnd5eapi.co/api/classes';
  const datas = await fetch(url).then((url) => {
    console.log(url);
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
