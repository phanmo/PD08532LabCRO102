import React, { FC, memo } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
type FooterType = {
    timeUpdate: string;
    backgroundColor: string;
}

export const Footer: FC<FooterType> = memo(props => {
    const { timeUpdate, backgroundColor } = props;
    return (
        <View
            style={containerStyle({
                height: 100,
                backgroundColor: backgroundColor,
                alignItems: 'center',
                justifyContent: 'center',
            })}
        >
            <Text style={styles.text}>
                Thời gian bạn cập nhật thông tin: {timeUpdate}</Text>
        </View>
    );
});

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

// styleText này sẽ nhận tất cả props mà style thẻ Text có
const containerStyle = (props: ViewStyle) => ({
    ...props,
});
