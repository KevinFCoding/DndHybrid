import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView, FlatList, TouchableOpacity, Switch} from "react-native";
import {FontAwesome} from '@expo/vector-icons';
import SpellCard from './SpellCard';
import SpellForm from "../form/SpellForm";
import Modal from 'react-native-modal';

export default function Spells(props) {

    //Tableaux des niveaux des de sorts en fonction du niveau de personnage (objet 1:4,2:2,3:1... )

    //Décrementation des différents emplacements précédents selon le nombre de sorts choisis
    //Sorts en fonction de la classe du personnage (api/classes/{nom classe en anglais}/spells)

    // api/classes/ranger/levels/1 -> spellcasting -> spells_known

    const [isLvl0SpellsVisible, setIsLvl0SpellsVisible] = useState(false);
    const [isLvl1SpellsVisible, setIsLvl1SpellsVisible] = useState(false);
    const [isLvl2SpellsVisible, setIsLvl2SpellsVisible] = useState(false);
    const [isLvl3SpellsVisible, setIsLvl3SpellsVisible] = useState(false);
    const [isLvl4SpellsVisible, setIsLvl4SpellsVisible] = useState(false);
    const [isLvl5SpellsVisible, setIsLvl5SpellsVisible] = useState(false);
    const [isLvl6SpellsVisible, setIsLvl6SpellsVisible] = useState(false);
    const [isLvl7SpellsVisible, setIsLvl7SpellsVisible] = useState(false);
    const [isLvl8SpellsVisible, setIsLvl8SpellsVisible] = useState(false);
    const [isLvl9SpellsVisible, setIsLvl9SpellsVisible] = useState(false);

    //For each item of the objetc, the key correspond to the spell level, and in the array, the index 0 is the current
    //available slots, and the index 1 is the max slots
    const [spellSlots, setSpellsSlot] = useState({
        0:[0,0],
        1:[0,0],
        2:[0,0],
        3:[0,0],
        4:[0,0],
        5:[0,0],
        6:[0,0],
        7:[0,0],
        8:[0,0],
        9:[0,0],
    })

    //An array of spells, each item will contains object corresponding to spells
    const [allSpells, setAllSpells] = useState({
        'level0':[],
        'level1':[{
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
        }],
        'level2':[],
        'level3':[],
        'level4':[],
        'level5':[],
        'level6':[],
        'level7':[],
        'level8':[],
        'level9':[],
    })

    const [isFormModalVisible, setIsFormModalVisible] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState('0');

    const toggleFormModal = (lvl) => {
        setSelectedLevel(lvl)
        setIsFormModalVisible(!isFormModalVisible);
    };

    return(
        <View style={styles.container}>
            <Text>{props.characterName}</Text>
            <Text>Caractéristique de lancement de sort</Text>
            <Text>DD</Text>
            <Text>Bonus sorts</Text>
            <ScrollView>

                <View style={[styles.row, styles.box]}>
                    <Text>Sorts lvl 0</Text>
                    <FontAwesome name="arrow-circle-right" size={50} color="black"/>
                </View>

                <View style={styles.box}>
                    <View style={styles.row}>
                        <Text>Sorts lvl 1</Text>
                        <Text>Totaux</Text>
                        <Text>Restants</Text>
                        <TouchableOpacity onPress={() => {
                            setIsLvl1SpellsVisible(!isLvl1SpellsVisible);
                        }}>
                            {isLvl1SpellsVisible ? (
                                <FontAwesome name="arrow-circle-down" size={20} color="black"/>
                            ) : (
                                <FontAwesome name="arrow-circle-right" size={20} color="black"/>
                            )}
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => {
                        toggleFormModal('1');
                    }}>
                        <FontAwesome name="plus" size={20} color="black"/>
                    </TouchableOpacity>
                    {allSpells.level1.length > 0 && isLvl1SpellsVisible ? (
                        <FlatList
                            data={allSpells.level1}
                            renderItem={({item}) => {
                                return (
                                    <SpellCard spell={item}/>
                                )
                            }}
                        />
                    ): null}

                </View>

                <View style={[styles.row, styles.box]}>
                    <Text>Sorts lvl 2</Text>
                    <FontAwesome name="arrow-circle-right" size={50} color="black"/>
                </View>
                <View style={[styles.row, styles.box]}>
                    <Text>Sorts lvl 3</Text>
                    <FontAwesome name="arrow-circle-right" size={50} color="black"/>
                </View>
                <View style={[styles.row, styles.box]}>
                    <Text>Sorts lvl 4</Text>
                    <FontAwesome name="arrow-circle-right" size={50} color="black"/>
                </View>
                <View style={[styles.row, styles.box]}>
                    <Text>Sorts lvl 5</Text>
                    <FontAwesome name="arrow-circle-right" size={50} color="black"/>
                </View>
                <View style={[styles.row, styles.box]}>
                    <Text>Sorts lvl 6</Text>
                    <FontAwesome name="arrow-circle-right" size={50} color="black"/>
                </View>
                <View style={[styles.row, styles.box]}>
                    <Text>Sorts lvl 7</Text>
                    <FontAwesome name="arrow-circle-right" size={50} color="black"/>
                </View>
                <View style={[styles.row, styles.box]}>
                    <Text>Sorts lvl 8</Text>
                    <FontAwesome name="arrow-circle-right" size={50} color="black"/>
                </View>
                <View style={[styles.row, styles.box]}>
                    <Text>Sorts lvl 9</Text>
                    <FontAwesome name="arrow-circle-right" size={50} color="black"/>
                </View>
                <Modal isVisible={isFormModalVisible}>
                    <View>
                        <SpellForm allSpells={allSpells} setAllSpells={setAllSpells} characterClass={'ranger'} setIsFormModalVisible={setIsFormModalVisible}/>
                    </View>
                </Modal>
            </ScrollView>
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
    smallRow: {
        flexBasis:'auto',
        flexShrink: 1,
        flexGrow: 0
    },
    bigRow: {
        flexBasis:'auto',
        flexGrow: 1,
        flexShrink: 0
    },
    text: {
        borderColor: 'white',
        borderBottomColor: 'black',
        borderWidth: 1
    },
    image: {
        height:100,
        width:100,
        borderRadius: 50
    },
    modalImage: {
        flexDirection:'row',
        backgroundColor: 'rgba(0,125,125,1)',
        justifyContent: 'space-evenly',
        paddingTop:20,
        paddingBottom:20
    }
});