import React, { useContext } from "react";
import { Text, View } from "react-native";
import { ThemeContext } from "./Provider_useContext";

export default function Paragraph() {
    const theme = useContext(ThemeContext);
    return (
        <View style={{ backgroundColor: theme === 'light' ? 'white' : 'gray' }}>
            <Text>Demo change theme react native Hook useContext</Text>
        </View>
    )
}
