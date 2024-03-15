import React, { useCallback, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ContentCallBack from "./ContentCallBack";

export default function Count_useCallBack() {
    const [counter, setCounter] = useState(1);
    const [count, setCount] = useState(1);
    const handleIncrease = useCallback(()=>{
        setCounter(prevCounter=>prevCounter+1)
    }, [count]);

    const handleIncrease2 =()=>{
        setCount(prevCount=>prevCount+1);
    }
    return (
        <View style={styles.container}>
            <ContentCallBack onIncrease={handleIncrease}/>
            <Text style={styles.counter}>{counter}</Text>
            <Text style={styles.counter}>{count}</Text>
            <TouchableOpacity style={styles.clickContainer} onPress={handleIncrease2}>
                <Text style={styles.clickText}>Click count</Text>
            </TouchableOpacity>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    counter: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    clickContainer: {
        margin: 20,
        padding: 10,
        backgroundColor: 'tomato',
        borderRadius: 5,
    },
    clickText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
})
