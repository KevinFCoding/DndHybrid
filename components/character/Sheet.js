import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, Image, View, Button, TextInput} from "react-native";
import { App } from '../../App';

const stats = {
    "Strength":"",
    "Dexterity":"",
    "Constitution":"",
    "Intelligence":"",
    "Wisdom":"",
    "Charisma":""
}

export default function Sheet(props) {

    const [characterName, setCharacterName] = useState("");

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


    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };
    let textInputToString = '';

    return (
        <View style={styles.column}>
            <View style={this.props}>
                <TextInput
                    placeholder='Enter your character name here'
                    onChangeText={
                        text => {
                            setCharacterName(text);
                        }
                    }
                    value={characterName}
                />
            </View>
            <View style={styles.row}>
                <View style={styles.box}>
                    <Text style={styles.center}>STR</Text>
                    <Text>{strengthModifier}</Text>
                    <TextInput
                        onChangeText={
                            text => {
                                textInputToString = text.toString();
                                setStrength(textInputToString);
                                getModifier(textInputToString, "str");
                            }
                        }
                        value={strength}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.center}>DEX</Text>
                    <Text>{dexterityModifier}</Text>
                    <TextInput
                        onChangeText={
                            text => {
                                textInputToString = text.toString();
                                setDexterity(textInputToString);
                                getModifier(textInputToString, "dex");
                            }
                        }
                        value={dexterity}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.center}>CON</Text>
                    <Text>{constitutionModifier}</Text>
                    <TextInput
                        onChangeText={
                            text => {
                                textInputToString = text.toString();
                                setConstitution(textInputToString);
                                getModifier(textInputToString, "con");
                            }
                        }
                        value={constitution}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.center}>INT</Text>
                    <Text>{intelligenceModifier}</Text>
                    <TextInput
                        onChangeText={
                            text => {
                                textInputToString = text.toString();
                                setIntelligence(textInputToString);
                                getModifier(textInputToString, "int");
                            }
                        }
                        value={intelligence}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.center}>WIS</Text>
                    <Text>{wisdomModifier}</Text>
                    <TextInput
                        onChangeText={
                            text => {
                                textInputToString = text.toString();
                                setWisdom(textInputToString);
                                getModifier(textInputToString, "wis");
                            }
                        }
                        value={wisdom}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.center}>CHA</Text>
                    <Text>{charismaModifier}</Text>
                    <TextInput
                        onChangeText={
                            text => {
                                textInputToString = text.toString();
                                setCharisma(textInputToString);
                                getModifier(textInputToString, "cha");
                            }
                        }
                        value={charisma}
                    />
                </View>
        </View>
        </View>
    )

    function getModifier(statNumber, stat) {
        console.log("ARE WE HERE YET MOTHERFUCKER");
        let statModifier = myModifier(statNumber);
       switch (stat) {
           case "str" :
               setStrengthModifier(statModifier);
               console.log(statModifier)
               break;
           case "dex":
               setDexterityModifier(statModifier);
               break;
           case "con":
               setConstitutionModifier(statModifier);
               break;
           case "int":
               setIntelligenceModifier(statModifier);
               break;
           case "wis":
               setWisdomModifier(statModifier);
               break;
           case "cha":
               setCharismaModifier(statModifier);
               break;
       }
    }

    function myModifier(statNumber) {
        console.log(statNumber);
        switch (parseInt(statNumber)) {
            case 0 :
            case 1 :
                return -5;
            case 2 :
            case 3 :
                return -4;
            case 4 :
            case 5 :
                return -3;
            case 6:
            case 7 :
                return -2;
            case 8 :
            case 9 :
                return -1;
            case 10 :
            case 11 :
                return 0;
            case 12 :
            case 13 :
                return 1;
            case 14 :
            case 15 :
                return 2;
            case 16 :
            case 17 :
                return 3;
            case 18:
            case 19 :
                return 4;
            case 20 :
            case 21 :
                return 5;
            case 22:
            case 23 :
                return 6;
            case 24 :
            case 25 :
                return 7;
            case 26 :
            case 27 :
                return 8;
            case 28 :
            case 29 :
                return 9;
            case 30 :
                return 10;
            default :
                return 0;
        }
    }
}


const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: "row",
        margin: 0
    },
    box: {
        width: '15%',
        height: '100%',
        borderWidth: 1,
        margin: 3
    },
    column : {
        flexDirection: "column",
        margin: 10
    }
});