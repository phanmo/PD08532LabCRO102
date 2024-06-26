/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import { playbackService } from './service';
import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';

PushNotification.configure({
    onRegister: function (token) {
      console.log("TOKEN:", token);
    },
  
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
    },
  
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
  
    popInitialNotification: true,
    requestPermissions: true,
  });

AppRegistry.registerComponent(appName, () => App);

TrackPlayer.registerPlaybackService(()=> playbackService);
