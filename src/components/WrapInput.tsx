import React, { ReactNode } from "react";
import { StatusBarStyle, ViewStyle } from "react-native";
interface WrapperProps{
    barStyle?: StatusBarStyle;
    children: ReactNode;
    disableAvoidKeyboard?: boolean;
    backgroundColor?: string;
    bottomSafeArea?: boolean;
    disableAvoidStatusBar?: boolean;
    style?:ViewStyle;
}
const WrapInput = ()=>{

}

