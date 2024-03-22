import React, { useState } from "react";
import { Alert, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ImageLibraryOptions, ImagePickerResponse, OptionsCommon, launchImageLibrary } from "react-native-image-picker";

export default function Lab4_2() {
    const [images, setImages] = useState<ImagePickerResponse["assets"]>([]);
    const commonOptions: OptionsCommon = {
        mediaType: 'photo',
        maxWidth: 500,
        maxHeight: 500,
    };

    const libraryOptions: ImageLibraryOptions = {
        selectionLimit: 5,
        ...commonOptions,
    }

    const onOpenLibrary = async () => {
        const response: ImagePickerResponse = await launchImageLibrary(libraryOptions);
        if (response?.assets) {
            setImages(response.assets);
        } else {
            Alert.alert('Có lỗi xảy ra', response.errorMessage || 'Đã xảy ra lỗi khi chọn ảnh.');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                {images?.map((image, index) => (
                    <Image
                        key={index}
                        source={{ uri: image.uri }}
                        style={styles.image}
                    />
                ))}
            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={onOpenLibrary}>
                <Text style={styles.btnText}>Chọn ảnh từ thư viện</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        marginBottom: 20,
    },
    image: {
        width: 180, 
        height: 180,
        borderRadius: 10,
        margin: 5,
    },
    btn: {
        flex: 1,
        backgroundColor: 'tomato',
        padding: 10,
        borderRadius: 8,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    }
});
