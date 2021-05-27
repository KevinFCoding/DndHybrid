import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from "react-native";
import Button from '../Button';
import { Picker } from 'react-native-picker';

export default function DescriptionForm(props) {

    const [name, setName] = useState(props.character.name);
    const [size, setSize] = useState(props.character.size);
    const [age, setAge] = useState(props.character.age);
    const [sex, setSex] = useState(props.character.sex);
    const [personnality, setPersonnality] = useState(props.character.personnality);
    const [ideals, setIdeals] = useState(props.character.ideals);
    const [links, setLinks] = useState(props.character.links);
    const [defaults, setDefaults] = useState(props.character.defaults);
    const [description, setDescription] = useState(props.character.description);

    const sendFormData = () => {
        const data = {
            "name":name,
            "size":size,
            "age":age,
            "sex":sex,
            "personnality":personnality,
            "ideals":ideals,
            "links":links,
            "defaults":defaults,
            "description":description,
        }
        props.setIsFormModalVisible(false);
        props.setCharacterData(data);
    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput placeholder="Enter Player Name" 
                    style={styles.input}
                    onChangeText={text => setName(text)}
                    value={name}
                />
                <TextInput placeholder="Enter Character size" 
                    style={styles.input}
                    onChangeText={text => setSize(text)}
                    value={size}
                />
                <TextInput placeholder="Enter Character age" 
                    style={styles.input}
                    onChangeText={text => setAge(text)}
                    value={age}
                />
                <TextInput placeholder="Enter Character sex" 
                    style={styles.input}
                    onChangeText={text => setSex(text)}
                    value={sex}
                />
                <TextInput placeholder="Enter Character peronnality traits" 
                    style={styles.input}
                    onChangeText={text => setPersonnality(text)}
                    value={personnality}
                />
                <TextInput placeholder="Enter Character ideals" 
                    style={styles.input}
                    onChangeText={text => setIdeals(text)}
                    value={ideals}
                />
                <TextInput placeholder="Enter Character links" 
                    style={styles.input}
                    onChangeText={text => setLinks(text)}
                    value={links}
                />
                <TextInput placeholder="Enter Character defaults" 
                    style={styles.input}
                    onChangeText={text => setDefaults(text)}
                    value={defaults}
                />
                <TextInput placeholder="Enter Character description" 
                    style={styles.input}
                    onChangeText={text => setDescription(text)}
                    value={description}
                />
            </View>
            <View>
                <Button onPress={sendFormData}>Validation des données</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(0,125,125,0.8)'
    },
    input: {
        backgroundColor: '#FFF',
        padding: 5,
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10
    },
  });