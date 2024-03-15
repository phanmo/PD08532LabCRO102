import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
function ContentMemo({count}) {
    console.log('ContentMemo Re-render');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Demo react memo {count}</Text>
        </View>
    )
}
export default memo(ContentMemo);


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
    }
})