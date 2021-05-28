import {StyleSheet, Text, View, TextInput, Picker, Dimensions, ScrollView} from "react-native";
import Button from '../Button'
import React, {useState, useEffect} from 'react';
import axios from "axios";

export default function Sheet(props) {
    let textInputToString = '';

    const [characterHp, setCharacterHp] = useState(1);
    const [characterTempHp, setCharacterTempHp] = useState("0");
    const [characterCurrentHp, setCharacterCurrentHp] = useState("0");
    const [characterAC, setCharacterAC] = useState("10");
    const [characterSpeed, setCharacterSpeed] = useState("0");
    const [rolledStats, setRolledStats] = useState([]);

    return (
        // NAME
        <ScrollView style={styles.column}>
            <View style={props.styles.characterName}>
                <TextInput
                    placeholder='Enter your character name here'
                    onChangeText={
                        text => {
                            props.setCharacterName(text);
                        }
                    }
                    value={props.characterName}
                />
            </View>
            <View style={styles.column}>
                <View style={styles.picker}>
                    <Picker
                        mode="dropdown"
                        selectedValue={props.selectedClass}
                        onValueChange={(e) => {
                            classSelected(e);
                            getHp();
                        }}>
                        {props.classes.map((item, index) => {
                            return (<Picker.Item label={item} value={item} key={index}/>)
                        })}
                    </Picker>
                </View>
                <View style={styles.picker}><Picker
                    style={styles.picker}
                    mode="dropdown"
                    selectedValue={props.selectedRace}
                    onValueChange={(e) => {
                        raceSelected(e);
                    }}>
                    {props.races.map((item, index) => {
                        return (<Picker.Item label={item} value={index} key={index}/>)
                    })}
                </Picker>
                </View>
                <View style={styles.picker}><Picker
                    style={styles.picker}
                    mode="dropdown"
                    selectedValue={props.selectedBackground}
                    onValueChange={(e) => {
                        backgroundSelected(e);
                    }}>
                    {props.backgrounds.map((item, index) => {
                        return (<Picker.Item label={item} value={index} key={index}/>)
                    })}
                </Picker>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.box}>
                    <Text>AC</Text>
                    <Text>{characterAC}</Text>
                </View>
                <View style={styles.box}>
                    <Text>Initiative</Text>
                    <Text>{props.characterModifier.dexterity}</Text>
                </View>
                <View style={styles.box}>
                    <Text>Speed</Text>
                    <TextInput
                        keyboardType="numeric"
                        onChangeText={
                            text => {
                                textInputToString = text.toString();
                                setCharacterSpeed(textInputToString);
                            }
                        }
                        value={characterSpeed}
                    />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.box}>
                    <Text>PP</Text>
                    <Text>{props.characterPP}</Text>
                </View>
                <View style={styles.box}>
                    <Text>Proficiency</Text>
                    <Text>{props.proficiencyBonus}</Text>
                </View>
                <View style={styles.box}>
                    <Text>Level</Text>
                    <TextInput
                        keyboardType="numeric"
                        onChangeText={
                            text => {
                                props.setCharacterLvl(text);
                                lvlUp();
                            }
                        }
                        value={props.characterLvl}
                    />
                </View>
            </View>
            <View style={styles.row}>
            </View>
            <View style={styles.row}>
                <View style={styles.statsBox}>
                    <Text style={styles.centerStat}>STR</Text>
                    <Text style={styles.modifierText}>{props.characterModifier.strength}</Text>
                    <TextInput
                        keyboardType="numeric"
                        onChangeText={
                            text => {
                                textInputToString = text.toString();
                                props.setStats.strength(textInputToString);
                                getModifier(textInputToString, "str");
                            }
                        }
                        value={props.characterStats.strength}
                        style={styles.statInput}

                    />
                </View>
                <View style={styles.statsBox}>
                    <Text style={styles.centerStat}>DEX</Text>
                    <Text style={styles.modifierText}>{props.characterModifier.dexterity}</Text>
                    <TextInput
                        keyboardType="numeric"
                        onChangeText={
                            text => {
                                textInputToString = text.toString();
                                props.setStats.dexterity(textInputToString);
                                getModifier(textInputToString, "dex");
                            }
                        }
                        value={props.characterStats.dexterity}
                        style={styles.statInput}

                    />
                </View>
                <View style={styles.statsBox}>
                    <Text style={styles.centerStat}>CON</Text>
                    <Text style={styles.modifierText}>{props.characterModifier.constitution}</Text>
                    <TextInput
                        keyboardType="numeric"
                        onChangeText={
                            text => {
                                textInputToString = text.toString();
                                props.setStats.constitution(textInputToString);
                                getHp();
                                getModifier(textInputToString, "con");
                            }
                        }
                        value={props.characterStats.constitution}
                        style={styles.statInput}

                    />
                </View>
                <View style={styles.statsBox}>
                    <Text style={styles.centerStat}>INT</Text>
                    <Text style={styles.modifierText}>{props.characterModifier.intelligence}</Text>
                    <TextInput
                        keyboardType="numeric"
                        onChangeText={
                            text => {
                                textInputToString = text.toString();
                                props.setStats.intelligence(textInputToString);
                                getModifier(textInputToString, "int");
                            }
                        }
                        value={props.characterStats.intelligence}
                        style={styles.statInput}

                    />
                </View>
                <View style={styles.statsBox}>
                    <Text style={styles.centerStat}>WIS</Text>
                    <Text style={styles.modifierText}>{props.characterModifier.wisdom}</Text>
                    <TextInput
                        keyboardType="numeric"
                        onChangeText={
                            text => {
                                textInputToString = text.toString();
                                props.setStats.wisdom(textInputToString);
                                getModifier(textInputToString, "wis");
                                updatePP();
                            }
                        }
                        value={props.characterStats.wisdom}
                        style={styles.statInput}
                    />
                </View>
                <View style={styles.statsBox}>
                    <Text style={styles.centerStat}>CHA</Text>
                    <Text style={styles.modifierText}>{props.characterModifier.charisma}</Text>
                    <TextInput
                        keyboardType="numeric"
                        onChangeText={
                            text => {
                                textInputToString = text.toString();
                                props.setStats.charisma(textInputToString);
                                getModifier(textInputToString, "cha");
                            }
                        }
                        value={props.characterStats.charisma}
                        style={styles.statInput}

                    />
                </View>
            </View>
            <View>
                <Text>You rolled: {rolledStats[0]}, {rolledStats[1]}, {rolledStats[2]}, {rolledStats[3]}, {rolledStats[4]}, {rolledStats[5]}</Text>
            </View>
            <View>
                <Button onPress={rollDicesForStats}>Roll stats</Button>
            </View>
            <View style={[styles.healthBox, styles.column]}>
                <View>
                    <Text>max Hp : {characterHp}</Text>
                    <TextInput
                        onChangeText={
                            text => {
                                setCharacterCurrentHp(text);
                            }
                        }
                        value={characterCurrentHp}
                    />
                </View>
            </View>
            <View style={[styles.deathBox, styles.column]}>
                <View>
                    <Text>max Hp : {characterHp}</Text>
                    <TextInput
                        onChangeText={
                            text => {
                                setCharacterCurrentHp(text);
                            }
                        }
                        value={characterCurrentHp}
                    />
                </View>
            </View>
        </ScrollView>
    )

    function getHp(){
        let totalHp = parseInt(props.characterModifier.constitution);
        console.log(totalHp + 5);

        switch (props.selectedClass){
            case 'Barbarian': // Barbarian
                totalHp = (12 + totalHp);
            case 'Bard': // Bard
                totalHp =8+totalHp
            case 'Cleric': // Cleric
                totalHp = 8+totalHp
            case 'Druid': // Druid
                totalHp =10 + totalHp
            case 'Fighter': // Fighter
                totalHp = 10+totalHp
            case 'Monk': // Monk
                totalHp= 8+totalHp
            case 'Paladin': // Paladin
                totalHp =10+totalHp
            case 'Ranger': // Ranger
                totalHp = 10+totalHp
            case 'Rogue': // Rogue
                totalHp = 8+totalHp
            case 'Sorcerer': // Sorcerer
                totalHp = 6+totalHp
            case 'Warlock': // Warlock
                totalHp =8+totalHp
            case 'Wizard': // Wizard
                totalHp = 6+totalHp
            default:
                totalHp = 8+totalHp
        }
        setCharacterHp(totalHp);
    }

    function updatePP() {
        let basePP = 10 + props.characterModifier.wisdom;
        console.log(basePP);
        console.log(typeof basePP);
        props.setPP(basePP.toString());
    }

    function lvlUp() {
        if (props.characterLvl < 5){
            props.setProficiencyBonus("2");
        } else if(props.characterLvl >= 5 && props.characterLvl < 9) {
            props.setProficiencyBonus("3");
        } else if(props.characterLvl >= 9 && props.characterLvl < 13) {
            props.setProficiencyBonus("4");
        } else if(props.characterLvl >= 13 && props.characterLvl < 17) {
            props.setProficiencyBonus("5");
        } else if(props.characterLvl >= 17) {
            props.setProficiencyBonus("6");
        }
        console.log(props.proficiencyBonus);
    }
    function getModifier(statNumber, stat) {
        let statModifier = myModifier(statNumber);
        switch (stat) {
            case "str" :
                props.setStatsModifier.strength(statModifier);
                break;
            case "dex":
                props.setStatsModifier.dexterity(statModifier);
                break;
            case "con":
                props.setStatsModifier.constitution(statModifier);
                break;
            case "int":
                props.setStatsModifier.intelligence(statModifier);
                break;
            case "wis":
                props.setStatsModifier.wisdom(statModifier);
                break;
            case "cha":
                props.setStatsModifier.charisma(statModifier);
                break;
        }
    }

    function rollDicesForStats() {
        let number = 0;
        let diceArray = [];
        while (rolledStats.length > 0 ) {
            rolledStats.pop();
        }
        for (let i = 0; i < 6; i++) {
            diceArray = [];
            number = 0;
            for (let j = 0; j < 4; j++) {
                diceArray.push(Math.floor(Math.random() * (6 - 1) + 1));
            }
            diceArray.sort();
            diceArray.shift();
            diceArray.forEach(e => {
                number = number + e;
            });
            rolledStats.push(number);
        }
    }

    function classSelected(classDnd) {
        props.setSelectedClass(classDnd);
    }

    function raceSelected(raceDnd) {
        props.setSelectedRace(raceDnd);
    }

    function backgroundSelected(background) {
        props.setSelectedBackground(background);
    }


    function myModifier(statNumber) {
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
    centerStat: {
        textAlign: 'center',
        fontSize: 20
    },
    picker: {
        backgroundColor:'white',
        borderWidth: 2,
        paddingTop: 3,
        paddingBottom:3,
        margin: 2,
        borderColor: 'black',
        width: "100%",
        height: 40,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    row: {
        flexDirection: "row",
        margin: 0,
        marginTop: 5
    },
    box: {
        margin: 3,
        width: '33%',
        padding: 5,
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
    },
    modifierText: {
        fontSize: 20,
        textAlign: 'center',
    },
    statsBox: {
        margin: 3,
        width: '15%',
        padding: 5,
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
    },
    statInput: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        borderWidth: 1,
        textAlign: 'center',
        backgroundColor: 'lightgrey',
        flexDirection: 'column',

    },
    healthBox: {
        width: '48%',
        height: '20%',
        borderWidth: 1,
        margin: 3
    },
    deathBox: {
        width: '48%',
        height: '20%',
        borderWidth: 1,
        margin: 3
    },
    savesBox: {},
    gearBox: {},
    column: {
        flexDirection: "column",
        margin: 10
    }
});