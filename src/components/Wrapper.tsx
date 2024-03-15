import React, { Children, ReactNode } from "react";
import { KeyboardAvoidingView, StatusBar, StatusBarStyle, StyleSheet, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
interface WrapperProps {
    barStyle?: StatusBarStyle;
    children: ReactNode;
    disableAvoidKeyboard?: boolean;
    backgroundColor?: string;
    bottomSafeArea?: boolean;
    disableAvoidStatusBar?: boolean;
    style?: ViewStyle;
}
const Wrapper = ({ barStyle, children, disableAvoidKeyboard, disableAvoidStatusBar, bottomSafeArea, backgroundColor, style }: WrapperProps) => {
    const { top, bottom } = useSafeAreaInsets();
    const paddingBottom = bottomSafeArea ? bottom : 0;
    return (
        <View style={[styles.container, { backgroundColor, paddingBottom }, style,]}>
            <KeyboardAvoidingView
                style={styles.flexFill}
                behavior={'padding'}
                enabled={!disableAvoidKeyboard}>
                <StatusBar
                    barStyle={barStyle}
                    translucent
                    backgroundColor={'transparent'} />
                {!disableAvoidStatusBar && (
                    <View style={[{ height: top }, styles.statusBar]} />
                )}
                {children}
            </KeyboardAvoidingView>
        </View>

    );
}
export default Wrapper;

const styles = StyleSheet.create({
    container: {

    },
    flexFill: {

    },
    statusBar: {

    }
})


