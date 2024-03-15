import React, { FC, memo, useState } from "react";
import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { UserType } from "./Main";

type BodyType = {
    onUpdateInfor: (user: UserType) => void;
    onClickChangBgFooter: () => void;
}
export const Body: FC<BodyType> = memo(props => {
    const { onUpdateInfor, onClickChangBgFooter } = props;
    const [name, setName] = useState('');
    const [linkImage, setLinkImage] = useState('');
    const handleChangInfor = () => {
        if (name.length > 0 && linkImage.length > 0) {
            onUpdateInfor({ name, avatar: linkImage });
        } else {
            ToastAndroid.show('Không được để trống', ToastAndroid.SHORT);
        }
    };
    const handleChangBGFooter=()=>{
        onClickChangBgFooter();
    }
    return (
        <View style= {styles.container}>
            <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name"/>
            <TextInput style={styles.input} value={linkImage} onChangeText={setLinkImage} placeholder="Image link"/>
            <TouchableOpacity style={styles.clickContainer} onPress={handleChangInfor}>
                <Text style={styles.clickText}>Cập nhật thông tin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clickContainer} onPress={handleChangBGFooter}>
                <Text style={styles.clickText}>Đổi màu footer</Text>
            </TouchableOpacity>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: '100%',
        padding: 5,
        borderRadius: 4,
        borderWidth: 1,
        marginVertical: 10,
    },
    clickContainer: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'tomato',
        borderRadius: 5,
        width: '100%'
    },
    clickText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
    }
});