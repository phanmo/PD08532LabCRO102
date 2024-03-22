import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CameraOptions, ImagePickerResponse, OptionsCommon, launchCamera } from "react-native-image-picker";

export default function Lab4_1() {
    const [images, setImages] = useState<ImagePickerResponse["assets"]>([]);

    const commonOptions: OptionsCommon = {
        mediaType: 'photo',
        maxWidth: 500,
        maxHeight: 500,
    };

    const cameraOptions: CameraOptions = {
        cameraType: 'front',
        saveToPhotos: true,
        ...commonOptions,
    };

    const onOpenCamera = async () => {
        const response: ImagePickerResponse = await launchCamera(cameraOptions);
        if (response?.assets) {
            setImages(response.assets);
        } else {
            Alert.alert('Có lỗi xảy ra', response.errorMessage);
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: images?.[0]?.uri || 'https://i.pinimg.com/originals/8a/9d/6e/8a9d6e85a93b8b3a8002896da71882a3.jpg'
                }}
                style={styles.avatar}
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={onOpenCamera}>
                <Text style={styles.btnText}>Chụp hình</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 300,
        marginTop: 200,
    },
    btn: {
        backgroundColor: 'tomato',
        padding: 10,
        borderRadius: 8,
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    }
});
