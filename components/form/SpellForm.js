import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, Picker } from "react-native";
import Button from "../Button";
import axios from "axios";

export default function SpellForm(props){

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const [availableSpells, setAvailableSpells] = useState([]);
    const [selectedSpellUrl, setSelectedSpellUrl] = useState('');
    const [selectedSpell, setSelectedSpell] = useState('');

    useEffect(() => {
        const fetchUrl = async () => {
            try {
                console.log(props.characterClass)
                const resSpells = await axios.get(`https://www.dnd5eapi.co/api/classes/`+props.characterClass.toLowerCase()+`/spells/`);

                setTimeout(() => {
                    const spellsData = resSpells.data.results;
                    const spells=[];

                    spellsData.map(item =>
                        spells.push(item)
                    )
                    setAvailableSpells(spells);
                }, 1000)
            } catch (err) {
                setError(err.message)
                setIsLoading(false)
            }
        }

        fetchUrl();
    }, []);

    useEffect(() => {
        if (selectedSpell != ''){
            sendFormData()
        }
    }, [selectedSpell])

    const sendFormData = () => {

        console.log(selectedSpell)

        switch(props.selectedLevel){
            case'0': 
                props.allSpells.level0.push(selectedSpell);
                break;
            case'1': 
                props.allSpells.level1.push(selectedSpell);
                break;
            case'2': 
                props.allSpells.level2.push(selectedSpell);
                break;
            case'3': 
                props.allSpells.level3.push(selectedSpell);
                break;
            case'4': 
                props.allSpells.level4.push(selectedSpell);
                break;
            case'5': 
                props.allSpells.level5.push(selectedSpell);
                break;
            case'6': 
                props.allSpells.level6.push(selectedSpell);
                break;
            case'7': 
                props.allSpells.level7.push(selectedSpell);
                break;
            case'8': 
                props.allSpells.level8.push(selectedSpell);
                break;
            case'9': 
                props.allSpells.level9.push(selectedSpell);
                break;
        }

        props.setAllSpells(props.allSpells);
        props.setIsFormModalVisible(false);
    }

    const fetchSelectedSpellUrl = async () => {
        try{
            const resSelectedSpellUrl = await axios.get(`https://www.dnd5eapi.co`+selectedSpellUrl);

            setTimeout(() => {
                
                const spellData = resSelectedSpellUrl.data;
                setSelectedSpell(spellData, () => {
                    console.log('state changed', selectedSpell)
                    sendFormData()
                });
            }, 1000)
        } catch(err) {
            setError(err.message)
            setIsLoading(false)
        }
    }

    const toggleModal = () => {
        props.setIsFormModalVisible(false)
    }

    return (
        <View style={styles.container}>
            <Picker
                style={styles.picker}
                selectedValue={selectedSpellUrl}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedSpellUrl(itemValue)
                }
            >
                {availableSpells.map(e =>
                    (<Picker.Item label={e.name} value={e.url} key={e.index}/>)
                )}
            </Picker>
            <Text>{error}</Text>
            {selectedSpellUrl != '' ? (
                <Button onPress={fetchSelectedSpellUrl}>Sélectionner votre nouveau sort</Button>
            ): null}
            
            <Button onPress={toggleModal}>Annuler</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,125,125,0.8)'
    },
})