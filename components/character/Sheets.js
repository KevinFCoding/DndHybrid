import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, Button } from "react-native";
import Modal from 'react-native-modal';
import DescriptionForm from '../form/DescriptionForm';

const character = {
    "nom":"",
    "taille":"",
    "age":"",
    "sexe":"",
    "personnalite":"",
    "ideaux":"",
    "liens":"",
    "defauts":"",
    "description" : "Description test ceci est un test",
}

export default function Description() {

    const [character, setCharacter] = useState(
        {
            "name":"",
            "size":"",
            "age":"",
            "sex":"",
            "personnality":"",
            "ideals":"",
            "links":"",
            "defaults":"",
            "description":"",
        }
    );

    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View >
            <View style={styles.box}>
                <View>
                    <Text>Nom du joueur</Text>
                    <Text>{character.name}</Text>
                </View>
                <View>
                    <Text>Insérer une image</Text>
                    <Image></Image>
                </View>
                <View>
                    <Text>Taille</Text>
                    <Text>{character.size}</Text>
                </View>
                <View>
                    <Text>Âge</Text>
                    <Text>{character.age}</Text>
                </View>
                <View>
                    <Text>Sexe</Text>
                    <Text>{character.sex}</Text>
                </View>
            </View>
            <View style={styles.box}>
                <Text>Traits de personnalité</Text>
                <Text>{character.personnality}</Text>
            </View>
            <View style={styles.box}>
                <Text>Idéaux</Text>
                <Text>{character.ideals}</Text>
            </View>
            <View style={styles.box}>
                <Text>Liens</Text>
                <Text>{character.links}</Text>
            </View>
            <View style={styles.box}>
                <Text>Défauts</Text>
                <Text>{character.defaults}</Text>
            </View>
            <View style={styles.box}>
                <Text>Description/bio du personnage</Text>
                <Text>{character.description}</Text>
            </View>
            <Button title="Click here to Modify" onPress={toggleModal} />
            <Modal
                isVisible={isModalVisible}>
                <View>
                    <DescriptionForm setCharacterData={setCharacter} setIsModalVisible={setIsModalVisible} character={character}/>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        borderWidth: 1,
        padding:20
    },
});