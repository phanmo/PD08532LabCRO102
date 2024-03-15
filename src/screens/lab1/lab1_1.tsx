import React from "react";
import { SafeAreaView } from "react-native";
import Header from "../../components/Header";

const Lab1_1 =()=>{
    return(
      <SafeAreaView>
        <Header
        title="Header"
        iconLeft={require('../../assets/icons/leftIcon.png')}
        />
      </SafeAreaView>
    )
  }
  export default Lab1_1;
  