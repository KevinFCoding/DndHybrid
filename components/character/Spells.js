import React from 'react';
import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity } from "react-native";


export default function Spells(props) {
    return(
        <View><Text>{props.characterName}</Text></View>
    )

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
    },
    modalImage: {
        flexDirection:'row',
        backgroundColor: 'rgba(0,125,125,1)',
        justifyContent: 'space-evenly',
        paddingTop:20,
        paddingBottom:20
    }
});