import React, { createContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Paragraph from "./Paragraph";

export const ThemeContext = createContext('light');

export default function UseContextScreen() {
    const [theme, setTheme] = useState('light');
    const handleToggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    return (
        <View style={styles.container}>
            <ThemeContext.Provider value={theme}>
                <Text style={styles.title}>UseContextScreen</Text>
                <TouchableOpacity style={styles.clickContainer} onPress={handleToggleTheme}>
                    <Text style={styles.clickText}>Change theme</Text>
                </TouchableOpacity>
                <Paragraph />
            </ThemeContext.Provider>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
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
