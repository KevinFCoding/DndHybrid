import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView, FlatList, TouchableOpacity} from "react-native";
import SpellForm from "../form/SpellForm";
import Modal from 'react-native-modal';
import SpellLevelCard from './SpellLevelCard';

export default function Spells(props) {

    //Tableaux des niveaux des de sorts en fonction du niveau de personnage (objet 1:4,2:2,3:1... )

    //Décrementation des différents emplacements précédents selon le nombre de sorts choisis
    //Sorts en fonction de la classe du personnage (api/classes/{nom classe en anglais}/spells)

    // api/classes/ranger/levels/1 -> spellcasting -> spells_known

    //Pour tri en fonction des niveaux de spells : dans chaque Spell -> level : nb
    //Il faudra faire un call API pour chaque spell et vérifier son niveau puis le comparer au lvl de SpellForm avant de l'afficher
    //Le spell étant déjà call il faudra changer la manière de récupérer et d'enregistrer les spells (plus d'appel lors de l'enregistrement mais appel avant puis enregistrement de l'appel déjà appelé)

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
        'level1':[],
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

    if(props.selectedClass != '' || props.characterClass !== undefined){
        return(
            <View style={styles.container}>
                <Text>{props.characterName}</Text>
                <Text>Caractéristique de lancement de sort</Text>
                <Text>DD</Text>
                <Text>Bonus sorts</Text>
                <ScrollView style={styles.scrollView}>
    
                    <SpellLevelCard setIsLvlSpellsVisible={setIsLvl0SpellsVisible} isLvlSpellsVisible={isLvl0SpellsVisible} toggleFormModal={toggleFormModal} allSpells={allSpells.level0} lvl='0'/>
                    <SpellLevelCard setIsLvlSpellsVisible={setIsLvl1SpellsVisible} isLvlSpellsVisible={isLvl1SpellsVisible} toggleFormModal={toggleFormModal} allSpells={allSpells.level1} lvl='1'/>
                    <SpellLevelCard setIsLvlSpellsVisible={setIsLvl2SpellsVisible} isLvlSpellsVisible={isLvl2SpellsVisible} toggleFormModal={toggleFormModal} allSpells={allSpells.level2} lvl='2'/>
                    <SpellLevelCard setIsLvlSpellsVisible={setIsLvl3SpellsVisible} isLvlSpellsVisible={isLvl3SpellsVisible} toggleFormModal={toggleFormModal} allSpells={allSpells.level3} lvl='3'/>
                    <SpellLevelCard setIsLvlSpellsVisible={setIsLvl4SpellsVisible} isLvlSpellsVisible={isLvl4SpellsVisible} toggleFormModal={toggleFormModal} allSpells={allSpells.level4} lvl='4'/>
                    <SpellLevelCard setIsLvlSpellsVisible={setIsLvl5SpellsVisible} isLvlSpellsVisible={isLvl5SpellsVisible} toggleFormModal={toggleFormModal} allSpells={allSpells.level5} lvl='5'/>
                    <SpellLevelCard setIsLvlSpellsVisible={setIsLvl6SpellsVisible} isLvlSpellsVisible={isLvl6SpellsVisible} toggleFormModal={toggleFormModal} allSpells={allSpells.level6} lvl='6'/>
                    <SpellLevelCard setIsLvlSpellsVisible={setIsLvl7SpellsVisible} isLvlSpellsVisible={isLvl7SpellsVisible} toggleFormModal={toggleFormModal} allSpells={allSpells.level7} lvl='7'/>
                    <SpellLevelCard setIsLvlSpellsVisible={setIsLvl8SpellsVisible} isLvlSpellsVisible={isLvl8SpellsVisible} toggleFormModal={toggleFormModal} allSpells={allSpells.level8} lvl='8'/>
                    <SpellLevelCard setIsLvlSpellsVisible={setIsLvl9SpellsVisible} isLvlSpellsVisible={isLvl9SpellsVisible} toggleFormModal={toggleFormModal} allSpells={allSpells.level9} lvl='9'/>
                    
                    <Modal isVisible={isFormModalVisible}>
                        <View>
                            <SpellForm selectedLevel={selectedLevel} allSpells={allSpells} setAllSpells={setAllSpells} characterClass={props.selectedClass} setIsFormModalVisible={setIsFormModalVisible}/>
                        </View>
                    </Modal>
                </ScrollView>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <Text style={{color:'red'}}>Veuillez sélectionner une classe avant de choisir vos sorts</Text>
            </View>
        )
    }
    

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
    scrollView:{
        marginBottom: 65
    }
});