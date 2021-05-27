import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default function App() {

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const res = await axios.get(`https://www.dnd5eapi.co/api/races`)
        console.log(res);
        const classDatas = res.data.results;
        classDatas.forEach(classes => {
          console.log(classes.name);
        })
        setTimeout(() => {
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
        <Title>Welcome to the Nasa Project</Title>

        {isLoading ? (
            <Text>Loading…</Text>
        ) : null}

        {error ? (
            <Text>{error}</Text>
        ) : null}

        {nearEarthObjects.length > 0 ? (
            <>
              <Text style={styles.subtitle}>Asteroid of the month</Text>
              <NearEarthObjectCard
                  neo={nearEarthObjects[0]}
                  style={styles.neoCardOfTheMonth}
              />
              <Text style={styles.subtitle}>All Asteroids</Text>
              {nearEarthObjects.map((neo) => {
                return (
                    <NearEarthObjectCard
                        key={neo.id}
                        neo={neo}
                        style={styles.neoCard}
                    />
                )
              })}
            </>
        ) : null}
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
