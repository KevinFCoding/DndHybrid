import {StatusBar} from 'expo-status-bar';
import Sheet from './components/character/Sheet';
import Bio from './components/character/Bio';
import Skills from './components/character/Skills';
import Equipment from './components/character/Equipment';
import Spells from './components/character/Spells';

import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import axios from 'axios';
import {useEffect, useState} from "react";

export default function App() {

    const Tab = createBottomTabNavigator();

    const [strength, setStrength] = useState("10");
    const [strengthModifier, setStrengthModifier] = useState("0");
    const [dexterity, setDexterity] = useState("10");
    const [dexterityModifier, setDexterityModifier] = useState("0");
    const [constitution, setConstitution] = useState("10");
    const [constitutionModifier, setConstitutionModifier] = useState("0");
    const [intelligence, setIntelligence] = useState("10");
    const [intelligenceModifier, setIntelligenceModifier] = useState("0");
    const [wisdom, setWisdom] = useState("10");
    const [wisdomModifier, setWisdomModifier] = useState("0");
    const [charisma, setCharisma] = useState("10");
    const [charismaModifier, setCharismaModifier] = useState("0");

    const [characterName, setCharacterName] = useState('WESHALORS');
    const [characterLvl, setCharacterLvl] = useState('1');
    const [proficiencyBonus, setProficiencyBonus] = useState('2')
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedRace, setSelectedRace] = useState('');
    const [selectedBackground, setSelectedBackground] = useState('');

    const [classesList, setClassesList] = useState([]);
    const [racesList, setRacesList] = useState([]);
    const [backgroundList, setBackgroundsList] = useState([]);

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const stats = {
        strength: strength,
        dexterity: dexterity,
        constitution: constitution,
        intelligence: intelligence,
        wisdom: wisdom,
        charisma: charisma
    }
    const modifier = {
        strength: strengthModifier,
        dexterity: dexterityModifier,
        constitution: constitutionModifier,
        intelligence: intelligenceModifier,
        wisdom: wisdomModifier,
        charisma: charismaModifier
    }
    const setStats = {
        strength: setStrength,
        dexterity: setDexterity,
        constitution: setConstitution,
        intelligence: setIntelligence,
        wisdom: setWisdom,
        charisma: setCharisma
    }

    const setStatsModifier = {
        strength: setStrengthModifier,
        dexterity: setDexterityModifier,
        constitution: setConstitutionModifier,
        intelligence: setIntelligenceModifier,
        wisdom: setWisdomModifier,
        charisma: setCharismaModifier
    }

    switch (characterLvl) {
        case characterLvl < 5 :
            setProficiencyBonus(2);
    }

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
            <SafeAreaView style={styles.safeArea}>
                <StatusBar style="auto"/>
                <Tab.Navigator>
                    <Tab.Screen name="Sheet">
                        {(props) =>
                            <Sheet  {...props}
                                    characterStats={stats}
                                    characterModifier={modifier}
                                    setStats={setStats}
                                    setStatsModifier={setStatsModifier}
                                    characterLvl={characterLvl}
                                    setCharacterLvl={setCharacterLvl}

                                    characterName={characterName}
                                    setCharacterName={setCharacterName}
                                    selectedClass={selectedClass}
                                    setSelectedClass={setSelectedClass}
                                    selectedRace={selectedRace}
                                    setSelectedRace={setSelectedRace}
                                    selectedBackground={selectedBackground}
                                    setSelectedBackground={setSelectedBackground}
                                    classes={classesList}
                                    races={racesList}
                                    backgrounds={backgroundList}
                                    styles={styles}
                            />}
                    </Tab.Screen>
                    <Tab.Screen name="Bio">
                    {(props) =>
                        <Bio  {...props}
                              characterName={characterName}
                              setCharacterName={setCharacterName}
                              selectedBackground={selectedBackground}
                              styles={styles}
                        />}
                    </Tab.Screen>
                    <Tab.Screen name="Skills">
                    {(props) =>
                        <Skills  {...props}
                                 strength={stats.strength}
                                 characterName={characterName}
                                 setCharacterName={setCharacterName}
                                 selectedClass={selectedClass}
                                 selectedRace={selectedRace}
                                 selectedBackground={selectedBackground}
                                 styles={styles}
                        />}
                    </Tab.Screen>
                    <Tab.Screen name="Equipment">
                    {(props) =>
                        <Equipment  {...props}
                                    characterName={characterName}
                                    setCharacterName={setCharacterName}
                                    selectedClass={selectedClass}
                                    backgrounds={backgroundList}
                                    styles={styles}
                        />}
                    </Tab.Screen>
                    <Tab.Screen name="Spells">
                    {(props) =>
                        <Spells  {...props}
                                 characterName={characterName}
                                 setCharacterName={setCharacterName}
                                 proficiencyBonus={proficiencyBonus}
                                 characterLvl={characterLvl}
                                 selectedClass={selectedClass}
                                 styles={styles}
                        />}
                    </Tab.Screen>
                </Tab.Navigator>
            </SafeAreaView>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    characterName: {
        width: '95%',
        alignItems: 'center',
        margin: 0,
        borderWidth: 1
    }
});
