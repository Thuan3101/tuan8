import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Screen3({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.v1}>
                <Image source={require("../Image/Avatar 31.png")} style={styles.img1}/>
                <View style={styles.v11}>
                    <Text style={styles.t1}> Hi Twinkle </Text>
                    <Text style={styles.t2}> Have agrate day a head </Text>
                </View>
            </View>
            <Text style={styles.t3}> ADD YOUR JOB </Text>
            <View style={styles.v2}>
                <Image source={require("../Image/fxemoji_note.png")} style={styles.img2}></Image>
                <TextInput style={styles.t4} placeholder="input your job"></TextInput>
            </View>
            <Pressable style={styles.v3}
                onPress={() => {
                    navigation.navigate("Screen4")
                }}>
                <Text style={styles.t5}> FINISH </Text>
            </Pressable>
            
            <Image source={require("../Image/Image 95.png")} style={styles.img3}></Image>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    v1:{
        flexDirection: 'row',
        marginRight: 120,
    },
    v11:{
        flexDirection: 'column'
    },
    img1:{
        height: 45,
        width: 45,
        resizeMode: 'contain',
    },
    t1:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    t2:{
        fontSize: 15,
    },
    t3:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 50,
    },
    v2:{
        marginTop: 40,
        flexDirection: 'row',
        width: 300,
        height: 35,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
    },
    img2:{
        height: 20,
        width: 20,
        resizeMode: 'contain',
        paddingLeft: 15,
    },
    t4:{
        fontSize: 15,
        marginLeft: 10,
    },
    v3:{
        marginTop: 50,
        width: 200,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        backgroundColor: 'blue',
        alignItems: 'center',
    },
    t5:{
        color: 'white',
        marginTop: 5,      
    },
    img3:{
        marginTop: 45,
        width: 200,
        height: 200
    },
});
export default Screen3;