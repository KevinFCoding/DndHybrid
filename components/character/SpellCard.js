import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function SpellCard(props){

    if(props.spell !== undefined){
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text>{props.spell.name}</Text>
                    <Text>{props.spell.components}</Text>
                    <Text>{props.spell.ritual}</Text>
                </View>
                <View style={styles.row}>
                    <Text>{props.spell.material}</Text>
                </View>
                <View style={styles.row}>
                    <Text>{props.spell.range}</Text>
                    <Text>{props.spell.duration}</Text>
                    <Text>{props.spell.concentration}</Text>
                    <Text>{props.spell.casting_time}</Text>
                    {props.spell.damage_type !== undefined ? (
                        <Text>{props.spell.attack_type}</Text>
                    ): null}
                </View>
                <View >
                    <Text style={styles.row}>Description</Text>
                    <Text style={styles.longText}>{props.spell.desc}</Text>
                </View>
    
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        borderWidth:1,
        borderRadius: 5,
        padding: 5,
        margin: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderColor: 'transparent',
        borderBottomColor: 'black',
        borderWidth: 1,
        margin: 10
    },
    longText: {
        margin: 10
    }
});
