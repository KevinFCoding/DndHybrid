import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Button, Text, View, Alert } from 'react-native';

const Separator = () => (
    <View style={styles.separator} />
);

export default function App() {
return (
    <SafeAreaView style={styles.container}>     
      <View style={styles.base}>
        <Text style={styles.base}>
              nom perso
        </Text>
      </View>


      <Separator />

      <View style={styles.base}>
        <Text style={styles.base}>
            comp Racial du perso
        </Text>        
      </View>

        <Separator />

      <View style={styles.base}>
        <Text style={styles.base}>
              outils, langues, armes & armures maitrisés
        </Text>
      </View>

      <Separator />

      <View style={styles.base}>
        <Text style={styles.base}>
             système de cards / capacités
        </Text>        
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    base: {
         backgroundColor: '#ddd',
         alignItems: 'center',
         justifyContent: 'center',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
    },
});

