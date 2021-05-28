import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, Picker } from "react-native";
import Button from "../Button";
import axios from "axios";

export default function SpellForm(props){

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const [availableSpells, setAvailableSpells] = useState([]);
    const [selectedSpell, setSelectedSpell] = useState({});

    useEffect(() => {
        const fetchUrl = async () => {
            try {
                const resSpells = await axios.get(`https://www.dnd5eapi.co/api/classes/`+props.characterClass+`/spells/`);

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
    const sendFormData = () => {
        const newSpells = [];
        props.allSpells.map(e =>
            newSpells.push(e)
        )
        newSpells.push(selectedSpell)
        props.setAllSpells(newSpells);
        props.setIsFormModalVisible(false);
    }

    return (
        <View style={styles.container}>
            <Picker
                style={styles.picker}
                selectedValue={selectedSpell}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedSpell(itemValue)
                }
            >
                {availableSpells.map(e =>
                    (<Picker.Item label={e.name} value={e.url} key={e.index}/>)
                )}
            </Picker>
            <Text>{error}</Text>
            <Button onPress={sendFormData}>Sélectionner votre nouveau sort</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,125,125,0.8)'
    },
})