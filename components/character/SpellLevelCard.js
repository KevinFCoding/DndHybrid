import React from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity} from "react-native";
import {FontAwesome} from '@expo/vector-icons';
import SpellCard from './SpellCard';

export default function SpellLevelCard(props){

    return (
        <View style={styles.box}>
            <View style={styles.row}>
                <Text>Sorts lvl {props.lvl}</Text>
                <Text>Totaux</Text>
                <Text>Restants</Text>
                <TouchableOpacity onPress={() => {
                    props.setIsLvlSpellsVisible(!props.isLvlSpellsVisible);
                }}>
                    {props.isLvlSpellsVisible ? (
                        <FontAwesome name="arrow-circle-down" size={20} color="black"/>
                    ) : (
                        <FontAwesome name="arrow-circle-right" size={20} color="black"/>
                    )}
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => {
                props.toggleFormModal(props.lvl);
            }}>
                <FontAwesome name="plus" size={20} color="black"/>
            </TouchableOpacity>
            {props.allSpells.length > 0 && props.isLvlSpellsVisible ? (
                <FlatList
                    data={props.allSpells}
                    renderItem={({item}) => {
                        return (
                            <SpellCard spell={item}/>
                        )
                    }}
                />
            ): null}

        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flex:1,
        margin: 5,
        width: Dimensions.get('window').width - 15,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth:2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    row: {
        flexDirection:'row',
        justifyContent: 'space-evenly'
    },
});