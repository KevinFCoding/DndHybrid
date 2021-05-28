import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function SheetForm(props) {

    const [strength, setStrength] = useState(props.stats.Strength);
    const [dexterity, setDexterity] = useState(props.stats.Dexterity);
    const [constitution, setConstitution] = useState(props.stats.Constitution);
    const [intelligence, setIntelligence] = useState(props.stats.Intelligence);
    const [wisdom, setWisdom] = useState(props.stats.Wisdom);
    const [charisma, setCharisma] = useState(props.stats.Charisma);

    const sendFormData = () => {
        const data = {
            "Strength":strength,
            "Dexterity":dexterity,
            "Constitution":constitution,
            "Intelligence":intelligence,
            "Wisdom":wisdom,
            "Charisma":charisma
        }
        props.setIsModalVisible(false);
        props.setStatsData(data);
    }

    return (
        <View style={styles.container}>
            <Text> Description Form </Text>
            <View>
                <TextInput
                           onChangeText={text => setStrength(text.toString())}
                           value={strength}
                />
                <TextInput
                           onChangeText={text => setDexterity(text.toString())}
                           value={dexterity}
                />
                <TextInput
                           onChangeText={text => setConstitution(text.toString())}
                           value={constitution}
                />
                <TextInput
                           onChangeText={text => setIntelligence(text.toString())}
                           value={intelligence}
                />
                <TextInput
                           onChangeText={text => setWisdom(text.toString())}
                           value={wisdom}
                />
                <TextInput
                           onChangeText={text => setCharisma(text.toString())}
                           value={charisma}
                />
            </View>
            <View>
                <Button title="Submit data" onPress={sendFormData} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#FFF',
    },
});