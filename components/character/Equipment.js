import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, Button } from "react-native";
import Modal from 'react-native-modal';

const equipment = {
    "Range":"",
    "Cost":"",
    "Damage":"",
}

export default function Equipment() {

    const [equipment, setEquipment] = useState(
        {
            "range":"",
            "cost":"",
            "damage":"",
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
                    <Text>Range</Text>
                    <Text>{equipment.range}</Text>
                </View>
                <View>
                    <Text>Cost</Text>
                    <Text>{equipment.cost}</Text>
                </View>
                <View>
                    <Text>Damage</Text>
                    <Text>{equipment.damage}</Text>
                </View>
            </View>
            <Button title="Click here to Modify" onPress={toggleModal} />
            <Modal
                isVisible={isModalVisible}>
                <View>
                    <DescriptionForm setEquipmentData={setEquipment} setIsModalVisible={setIsModalVisible} equipment={equipment}/>
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