import {StatusBar} from 'expo-status-bar';
import Sheet from './components/character/Sheet';
import Bio from './components/character/Bio';
import Skills from './components/character/Skills';
import Equipment from './components/character/Equipment';
import Spells from './components/character/Spells';

import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {StyleSheet, Image, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import axios from 'axios';
import {useEffect, useState} from "react";
import {LoadingIndicator} from "react-select/src/components/indicators";
import {LoadingMessage} from "react-select/src/components/Menu";
import AppLoadingPlaceholder from "expo/build/launch/AppLoadingPlaceholder";

export default function App() {

    const Tab = createBottomTabNavigator();

    //Character stats & modifier
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

    //Character name, proficiency, race, class, background & lvl
    const [characterName, setCharacterName] = useState('');
    const [characterLvl, setCharacterLvl] = useState("1");
    const [proficiencyBonus, setProficiencyBonus] = useState();
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedRace, setSelectedRace] = useState('');
    const [selectedBackground, setSelectedBackground] = useState('');

    //CLasses, Races & Backgrounds Lists
    const [classesList, setClassesList] = useState([]);
    const [racesList, setRacesList] = useState([]);
    const [backgroundList, setBackgroundsList] = useState([]);

    // Equipment
    const [weaponsList, setWeaponsList] = useState([]);
    const [armorsList, setArmorsList] = useState([]);

    // PP
    const [characterPassivePerception, setCharacterPassivePerception] = useState("10");

    // Skills

    const [skillsList, setSetSkillList] = useState([]);
    const [isProficient, setIfProcificient] = useState(false);

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

    useEffect(() => {
        const fetchUrl = async () => {
            try {
                //All classes, backgrounds & races
                const resClasses = await axios.get(`https://www.dnd5eapi.co/api/classes`);
                const resRaces = await axios.get(`https://www.dnd5eapi.co/api/races`);
                const resBackgrounds = await axios.get(`https://www.dnd5eapi.co/api/backgrounds`);
                const classDatas = resClasses.data.results;
                const racesDatas = resRaces.data.results;
                const backgroundsDatas = resBackgrounds.data.results;
                const classesNames = [];
                const racesNames = [];
                const backgroundNames = [];

                classDatas.map(e => {
                    classesNames.push(e.name);
                });
                racesDatas.map(e => {
                    racesNames.push(e.name);
                });
                backgroundsDatas.map(e => {
                    backgroundNames.push(e.name);
                });

                //Equipments

                const resWeapons = await axios.get('https://www.dnd5eapi.co/api/equipment-categories/weapon');
                const weaponsData = resWeapons.data.equipment;
                const weapons = [];
                const resArmor = await axios.get('https://www.dnd5eapi.co/api/equipment-categories/armor');
                const armorsData = resArmor.data.equipment;
                const armors = [];

                weaponsData.map(e => {
                    weapons.push(e.name);
                });
                armorsData.map(e => {
                    armors.push(e.name);
                });

                // Skills
                const resSkills = await axios.get('https://www.dnd5eapi.co/api/skills');
                const skillsDatas = resSkills.data.results;
                const skills = [];

                skillsDatas.map(e => {
                    skills.push(e.name);
                })

                setTimeout(() => {
                    setClassesList(classesNames);
                    setRacesList(racesNames);
                    setBackgroundsList(backgroundNames);
                    setWeaponsList(weapons);
                    setArmorsList(armors);
                    setSetSkillList(skills);

                    setProficiencyBonus(2);
                    let PP = parseInt(wisdomModifier) + 10;
                    setCharacterPassivePerception(PP);
                    setIsLoading(false);
                }, 3000)
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
                                    characterPP = {characterPassivePerception}
                                    setPP = {setCharacterPassivePerception}
                                    proficiencyBonus={proficiencyBonus}
                                    setProficiencyBonus={setProficiencyBonus}
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
                                    skills={skillsList}
                                    setIfProficient={setIfProcificient}
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
        margin: 5,
        width: Dimensions.get('window').width -30,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    }
});
