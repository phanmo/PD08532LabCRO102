import React, { useEffect } from "react";
import messaging from '@react-native-firebase/messaging';
import { Text, View } from "react-native";

const Lab8Bai3 = () => {
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  const getToken = async () => {
    const token = await messaging().getToken();
    console.log('Token', token);
  }

  useEffect(() => {
    requestUserPermission();
    getToken();
  }, []);

  return (
    <View>
      <Text>Lab 8 Bai 2</Text>
    </View>
  )
}

export default Lab8Bai3;