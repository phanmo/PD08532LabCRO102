import React, { useEffect, useRef, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function CountDown() {
    const [count, setCount] = useState(30);
    const [counter, setCounter] = useState(1);
    let timerID= useRef();
    console.log(timerID);

    const handleIncrease =()=>{
        setCounter(counter+1);
    }

    const handleStart = () => {
        timerID.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000);
        console.log('handleStart'+timerID.current);
    };
    const handleStop =()=>{
        clearInterval(timerID.current);
        console.log('handleStop'+timerID.current);
    };

    useEffect(()=>{
        console.log('useEffect này chạy mỗi lần component re-render');
    });

    useEffect(()=>{
        console.log('useEffect này chạy 1 lần khi component re-render');
    },[]);

    useEffect(()=>{
        console.log('useEffect này chạy mỗi lần khi state count thay đổi giá trị');
    }, [count]);

    return (
        <View style={styles.container} >
            <Text style={styles.counter}>{counter}</Text>
            <TouchableOpacity style={styles.clickContainer} onPress={handleIncrease}>
                <Text style={styles.clickText}>Click</Text>
            </TouchableOpacity>
            <Text style={styles.counter}>{count}</Text>
            <TouchableOpacity style={styles.clickContainer} onPress={handleStart}>
                <Text style={styles.clickText}>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clickContainer} onPress={handleStop}>
                <Text style={styles.clickText}>Stop</Text>
            </TouchableOpacity>
        </View >
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