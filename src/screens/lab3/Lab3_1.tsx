import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export default function Lab3_1() {
    const offset = useSharedValue(0);
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: offset.value }],
        };
    });
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, animatedStyles]} />
            <TouchableOpacity style={styles.button} onPress={() => (offset.value = Math.random() * 225)}>
                <Text style={styles.buttonText}>Move</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 10,
        
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'violet',
        borderRadius: 8,
    },
    button:{
        width: 100,
        backgroundColor: 'tomato',
        padding: 10,
        borderRadius: 4,
        marginVertical: 20,
        alignSelf: 'center',
    },
    buttonText:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign:'center'
    }
});