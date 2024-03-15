import React, { FC, memo } from "react";
import { UserType } from "./Main";
import { Image, StyleSheet, Text, View, ViewStyle } from "react-native";


type HeaderType ={
    user: UserType;
};

export const Header: FC<HeaderType> = memo(props => {
    const {user} = props;
    console.log('re-render header');
    return(
        <View
        style={containerStyle({
            height: 100,
            backgroundColor:'white',
            padding:10,
            flexDirection:'row',
            alignItems:'center',
        })}>
            <Image
            resizeMode="center"
            style={styles.avatar}
            source={{uri: user.avatar}}
            />
            <View>
                <Text style={styles.title}>Chào ngày mới</Text>
                <Text style={styles.name}>{user.name}</Text>
            </View>
        </View>
    );
});
const styles = StyleSheet.create({
    avatar:{
        width: 80,
        height: 80,
        borderRadius: 80,
        marginRight: 20,
    },
    title:{
        color: 'green',
    },
    name:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'tomato'
    }

});

const containerStyle = (props: ViewStyle) => ({
    ...props,
});
    

