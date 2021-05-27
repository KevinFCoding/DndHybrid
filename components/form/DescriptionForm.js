import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { Picker } from 'react-native-picker';

export default function DescriptionForm(props) {

    console.log(props.character);
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
        props.setIsModalVisible(false);
        props.setCharacterData(data);
    }

    return (
        <View style={styles.container}>
            <Text> Description Form </Text>
            <View>
                <TextInput placeholder="Enter Player Name" 
                    onChangeText={text => setName(text)}
                    value={name}
                />
                <TextInput placeholder="Enter Character size" 
                    onChangeText={text => setSize(text)}
                    value={size}
                />
                <TextInput placeholder="Enter Character age" 
                    onChangeText={text => setAge(text)}
                    value={age}
                />
                <TextInput placeholder="Enter Character sex" 
                    onChangeText={text => setSex(text)}
                    value={sex}
                />
                <TextInput placeholder="Enter Character peronnality traits" 
                    onChangeText={text => setPersonnality(text)}
                    value={personnality}
                />
                <TextInput placeholder="Enter Character ideals" 
                    onChangeText={text => setIdeals(text)}
                    value={ideals}
                />
                <TextInput placeholder="Enter Character links" 
                    onChangeText={text => setLinks(text)}
                    value={links}
                />
                <TextInput placeholder="Enter Character defaults" 
                    onChangeText={text => setDefaults(text)}
                    value={defaults}
                />
                <TextInput placeholder="Enter Character description" 
                    onChangeText={text => setDescription(text)}
                    value={description}
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