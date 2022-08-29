import React, { useState, useEffect, useRef } from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';
import * as Notifications from "expo-notifications"
import * as Permissions from "expo-permissions"
import Constants from 'expo-constants';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

Notifications.setNotificationChannelAsync('sound', {
  name: 'sound',
  importance: Notifications.AndroidImportance.HIGH,
  sound: 'newmessage.wav'
})

const Noti = () => { 
    Notifications.scheduleNotificationAsync({
    content: {
        title: "Lightning Warning!",
        body: "There is lightning nearby your location!",
    },
    trigger: { seconds: 1 },
    })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default Noti;