import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function CameraScreen(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back);
  
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={ref => {setCameraRef(ref);}}>
        <View style={styles.buttonPlacement}>

            <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                    props.triggerCamera();
                }}
            >
                <FontAwesome name="close" size={40} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.flipButton}
                onPress={() => {
                    setType(
                        type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                }}
            >
            <MaterialCommunityIcons
                name="camera-switch"
                style={{ color: "#fff", fontSize: 40}}
            />
            </TouchableOpacity>

            <TouchableOpacity 
                style={{alignSelf: 'center'}} 
                onPress={async() => {
                    if(cameraRef){
                        let photo = await cameraRef.takePictureAsync();
                        props.setImageUri(photo.uri)
                        props.triggerCamera();
                    }
                }}
            >
                <View style={styles.cameraBorder}>
                    <View style={styles.cameraCircle}>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    camera: {
        flex :1,
        width: Dimensions.get('window').width,
    },
    buttonPlacement :{
        flex:2,
        backgroundColor: 'transparent',
        justifyContent: 'flex-end'
    },
    flipButton: {
        flex: 0,
        alignSelf: 'center',
        marginBottom: 15
    },
    cameraCircle: {
        borderWidth: 2,
        borderRadius:100,
        borderColor: 'white',
        height: 100,
        width:100,
        backgroundColor: 'white'
    },
    cameraBorder: { 
        borderWidth: 2,
        borderRadius:100,
        borderColor: 'white',
        height: 110,
        width:110,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeButton: {
        flex: 1
    }

})