import React from "react";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Couter(){
    const [counter, setCounter] = useState(1);

    const handleIncrease =()=>{
        setCounter(counter+1);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.counter}>{counter}</Text>
            <TouchableOpacity style={styles.clickContainer} onPress={handleIncrease}>
                <Text style={styles.clickText}>Click</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        padding: 16,
        alignItems: 'center',
        justifyContent:'center',
    },
    counter:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    clickContainer:{
        margin: 20,
        padding: 10,
        backgroundColor: 'tomato',
        borderRadius: 5,
    },
    clickText:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
})