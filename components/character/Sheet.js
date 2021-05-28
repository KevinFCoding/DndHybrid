import {StyleSheet, Text, View, TextInput} from "react-native";
import React from 'react';

export default function Sheet(props) {
    let textInputToString = '';
    return (
        <View style={styles.column}>
            <View style={props.styles.namePc}>
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
            <View style={styles.row}>
                <View style={styles.box}>
                    <Text style={styles.center}>STR</Text>
                    <Text>{props.characterModifier.strength}</Text>
                    <TextInput
                        onChangeText={
                            text => {
                                textInputToString = text.toString();
                                props.setStats.strength(textInputToString);
                                getModifier(textInputToString, "str");
                            }
                        }
                        value={props.characterStats.strength}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.center}>DEX</Text>
                    <Text>{props.characterModifier.dexterity}</Text>
                    <TextInput
                        onChangeText={
                            text => {
                                textInputToString = text.toString();
                                props.setStats.dexterity(textInputToString);
                                getModifier(textInputToString, "dex");
                            }
                        }
                        value={props.characterStats.dexterity}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.center}>CON</Text>
                    <Text>{props.characterModifier.constitution}</Text>
                    <TextInput
                        onChangeText={
                            text => {
                                textInputToString = text.toString();
                                props.setStats.constitution(textInputToString);
                                getModifier(textInputToString, "con");
                            }
                        }
                        value={props.characterStats.constitution}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.center}>INT</Text>
                    <Text>{props.characterModifier.intelligence}</Text>
                    <TextInput
                        onChangeText={
                            text => {
                                textInputToString = text.toString();
                                props.setStats.intelligence(textInputToString);
                                getModifier(textInputToString, "int");
                            }
                        }
                        value={props.characterStats.intelligence}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.center}>WIS</Text>
                    <Text>{props.characterModifier.wisdom}</Text>
                    <TextInput
                        onChangeText={
                            text => {
                                textInputToString = text.toString();
                                props.setStats.wisdom(textInputToString);
                                getModifier(textInputToString, "wis");
                            }
                        }
                        value={props.characterStats.wisdom}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.center}>CHA</Text>
                    <Text>{props.characterModifier.charisma}</Text>
                    <TextInput
                        onChangeText={
                            text => {
                                textInputToString = text.toString();
                                props.setStats.charisma(textInputToString);
                                getModifier(textInputToString, "cha");
                            }
                        }
                        value={props.characterStats.charisma}
                    />
                </View>
        </View>
        </View>
    )

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