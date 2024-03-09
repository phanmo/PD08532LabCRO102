import React, { ReactNode } from "react";
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from "react-native";

interface HeaderProps{
    title?: string;
    iconLeft?: ImageSourcePropType;
    iconRight?: ImageSourcePropType;
    onPressRight?: ()=> void;
    onPressLeft?: ()=> void;
    leftComponent?: ReactNode;
    centerComponent?: ReactNode;
    rightComponent?: ReactNode;
    bgColor?: string;
    iconLeftColor?: string;
    iconRightColor?: string;
    leftIconSize?: number;
    rightIconSize?: number;
}
const Header = (props: HeaderProps) => {
    const { title, iconLeft, iconRight, onPressLeft, onPressRight, leftComponent, centerComponent, rightComponent, leftIconSize, rightIconSize } = props;

    const renderLeft = () => {
        return (
            leftComponent || (
                <View>
                    {iconLeft ? (
                        <Pressable hitSlop={15} onPress={onPressLeft}>
                            <Image
                                source={iconLeft}
                                style={styles.leftIcon}
                            />
                        </Pressable>
                    ) : (
                        <View style={{width: leftIconSize, height: rightIconSize}} />
                    )}
                </View>
            )
        );
    };

    const renderCenter = () => {
        return (
            centerComponent || (
                <View>
                    <Text style={styles.title}>{title}</Text>
                </View>
            )
        )
    };

    const renderRight = () => {
        return (
            rightComponent || (
                <View>
                    {iconRight ? (
                        <Pressable hitSlop={15} onPress={onPressRight}>
                            <Image
                                source={iconRight}
                                style={styles.rightIcon}
                            />
                        </Pressable>
                    ) : (
                        <View style={{width: rightIconSize, height: rightIconSize}} />
                    )}
                </View>
            )
        )
    };

    return (
        <View style={[styles.container, { backgroundColor: props.bgColor || 'white' }]}>
            {renderLeft()}
            {renderCenter()}
            {renderRight()}
        </View>
    );

}
export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#EFEFF0',
    },
    leftIcon: {
        width: 24,
        height: 24,
    },
    rightIcon: {
        width: 24,
        height: 24,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
})
