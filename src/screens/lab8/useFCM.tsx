import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { requestNotifications } from "react-native-permissions";
import messaging from '@react-native-firebase/messaging';
import PushNotification from "react-native-push-notification";

const UseFCM = () => {
    const requestUserPermission = async () => {
        try {
            const { status, settings } = await requestNotifications(['alert', 'sound']);
            console.log('requestNotifications', { status, settings });
        } catch (error) {
            console.log('requestUserPermission', error);
        }
    };

    const createNotificationChannel = () => {
        PushNotification.createChannel(
            {
                channelId: "channel-id",
                channelName: "My channel",
                soundName: 'default',
            },
            created => {
                console.log('createChannel', created);
            }
        );
    };

    const configurePushNotifications = () => {
        PushNotification.configure({
            onNotification: function (notification) {
                console.log('onNotification', notification);
            },
            permissions: {
                alert: true,
                badge: true,
                sound: true,
            }
        });
    };

    const handleIncomingMessage = (remoteMessage: any) => {
        console.log('onMessage', remoteMessage);
        PushNotification.localNotification({
            channelId: 'channel-id',
            title: remoteMessage?.notification?.title || '',
            bigText: remoteMessage?.notification?.body || '',
            message: remoteMessage?.notification?.body || '',
        });
    };

    useEffect(() => {
        requestUserPermission();
        createNotificationChannel();
        configurePushNotifications();
        const unsubscribe = messaging().onMessage(handleIncomingMessage);
        return () => unsubscribe();
    }, []);
};

export default UseFCM;