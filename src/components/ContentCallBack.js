import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
function ContentCallBack({onIncrease}) {
    console.log('ContentCallBack Re-render');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Demo react callback </Text>
            <TouchableOpacity style={styles.clickContainer} onPress={onIncrease}>
                <Text style={styles.clickText}>Click</Text>
            </TouchableOpacity>
        </View>
    )
}
export default memo(ContentCallBack);


const styles = StyleSheet.create({
    container:{
        marginTop: 50,
        alignItems: 'center'
    },
    title:{
        color: 'tomato',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
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