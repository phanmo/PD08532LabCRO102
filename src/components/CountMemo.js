import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ContentMemo from "./ContentMemo";

export default function CountMemo() {
    const [counter, setCounter] = useState(1);
    const [count, setCount] = useState(1);
    const handleIncrease = () => {
        setCounter(counter + 1);
    }
    const handleIncrease2 = () => {
        setCount(count + 1);
    }

    return (
        <View style={styles.container}>
            <ContentMemo count={count}></ContentMemo>
            <Text style={styles.counter}>{counter}</Text>
            <TouchableOpacity style={styles.clickContainer} onPress={handleIncrease}>
                <Text style={styles.clickText}>Click Counter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clickContainer} onPress={handleIncrease2}>
                <Text style={styles.clickText}>Click Count</Text>
            </TouchableOpacity>
        </View>
    );
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