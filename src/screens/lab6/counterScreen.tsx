import React from "react";
import { View, Text, Button, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply, reset } from '../../features/counter/counterSlice'
import { RootState } from "../../app/store";
export default function CounterScreen() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <SafeAreaView>
            <Text style={styles.title}>Counter</Text>
            <Text style= {styles.title}>{count}</Text>
            <TouchableOpacity style={styles.btn}
                onPress={() => dispatch(increment())}>
                <Text style={styles.btn_text}>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}
                onPress={() => dispatch(decrement())}>
                <Text style={styles.btn_text}>Decrement</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}
                onPress={() => dispatch(multiply(3))}>
                <Text style={styles.btn_text}>Multiply</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}
                onPress={() => dispatch(reset())}>
                <Text style={styles.btn_text}>Reset</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        padding: 5,
        color: "black",
        fontWeight: "bold",
        alignSelf: "center"
    },
    btn: {
        backgroundColor: "#f194ff",
        padding: 7,
        marginHorizontal: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 4,
    },
    btn_text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 'bold',
    }

})
