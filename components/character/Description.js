import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity } from "react-native";
import Modal from 'react-native-modal';
import DescriptionForm from '../form/DescriptionForm';
import Button from '../Button';
import CameraScreen from '../CameraScreen';

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

    const [imageUri, setImageUri] = useState('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.searchpng.com%2Fwp-content%2Fuploads%2F2019%2F02%2FCamera-Icon-PNG.png&f=1&nofb=1');
    const [isCameraVisible, setIsCameraVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const triggerCamera = () => {
        setIsCameraVisible(!isCameraVisible);
    }

    if(isCameraVisible){
        return (<CameraScreen setImageUri={setImageUri} triggerCamera={triggerCamera}></CameraScreen>);
    }
    else {
        return (
            <View >
                <View style={styles.box}>
                    <View style={styles.row}>
                        <View style={styles.bigRow}>
                            <Text style={styles.text}>Nom du joueur</Text>
                            <Text>{character.name}</Text>
                        </View>
                        <View style={styles.smallRow}>
                            <Text style={styles.text}>Taille</Text>
                            <Text>{character.size} cm</Text>
                        </View>
                        <View style={styles.smallRow}>
                            <Text style={styles.text}>Âge</Text>
                            <Text>{character.age}</Text>
                        </View>
                        <View style={styles.smallRow}>
                            <Text style={styles.text}>Sexe</Text>
                            <Text>{character.sex}</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={triggerCamera}>
                                <Image source={{uri: imageUri,}} style={styles.image}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>Traits de personnalité</Text>
                    <Text>{character.personnality}</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>Idéaux</Text>
                    <Text>{character.ideals}</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>Liens</Text>
                    <Text>{character.links}</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>Défauts</Text>
                    <Text>{character.defaults}</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.text}>Description/bio du personnage</Text>
                    <Text>{character.description}</Text>
                </View>
                <Button onPress={toggleModal}>Modifier fiche personnage</Button>
                <Modal
                    isVisible={isModalVisible}>
                    <View>
                        <DescriptionForm setCharacterData={setCharacter} setIsModalVisible={setIsModalVisible} character={character}/>
                    </View>
                </Modal>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    box: {
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
    }
  });