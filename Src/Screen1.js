import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Screen1({navigation}){
    return(
        <View style={styles.container}>
            <Image source={require("../Image/Image 95.png")} style={styles.img1}/>
            <Text style={styles.t1}> MANAGE YOUR TASK </Text>
            <View style={styles.v2}>
                <TextInput style={styles.t2} placeholder="Enter your name"></TextInput>
            </View>
            <Pressable style={styles.v3} 
                onPress={()=>{
                navigation.navigate("Screen2")
                }}> 
                <Text style={styles.t3}> GET STARTED </Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img1:{
        
        height: 250,
        width: 250,
        resizeMode: 'contain',
        //marginLeft: 20,
    },
    t1:{
        fontSize: 25,
        fontWeight: 'bold',
        width: 200,
        textAlign: 'center',
        color: 'purple',
        marginTop: 25,
    },
    v2:{
        width: 350,
        height: 45,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 50,
    },
    t2:{
        fontSize: 18,
        marginTop: 10,
        paddingLeft: 25,
    },
    v3:{
        width: 200,
        height: 45,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 80,
        backgroundColor: 'blue'
    },
    t3:{
        fontSize: 20,
        //fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
        color: 'white'
    },
});
export default Screen1;