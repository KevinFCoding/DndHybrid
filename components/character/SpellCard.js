import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function SpellCard(props){

    return (
        <View style={styles.container}>
            <View>

            </View>
            <View>

            </View>
            <View>
                <Text>Description</Text>
                <Text>{props.spell.desc[0]}</Text>
            </View>

            {props.spell.higher_level !== undefined ? (
                <View>
                    <Text>Higer levels</Text>
                    <Text>{props.spell.higher_level[0]}</Text>
                </View>)
            : null}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
})
/*
"index": "animal-friendship",
    "name": "Animal Friendship",
    "desc": [
    "This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spells ends."
],
    "range": "30 feet",
    "components": [
    "V",
    "S",
    "M"
],
    "material": "A morsel of food.",
    "ritual": false,
    "duration": "24 hours",
    "concentration": false,
    "casting_time": "1 action",
    "level": 1,
    "dc": {
    "dc_type": {
        "index": "wis",
            "name": "WIS",
            "url": "/api/ability-scores/wis"
    },
    "dc_success": "none"
},
"school": {
    "index": "enchantment",
        "name": "Enchantment",
        "url": "/api/magic-schools/enchantment"
},
"classes": [
    {
        "index": "bard",
        "name": "Bard",
        "url": "/api/classes/bard"
    },
    {
        "index": "cleric",
        "name": "Cleric",
        "url": "/api/classes/cleric"
    },
    {
        "index": "druid",
        "name": "Druid",
        "url": "/api/classes/druid"
    },
    {
        "index": "ranger",
        "name": "Ranger",
        "url": "/api/classes/ranger"
    }
],
    "subclasses": [],
    "url": "/api/spells/animal-friendship"
*/
