import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import * as SMS from 'expo-sms';
import AnimatedProgressWheel from 'react-native-progress-wheel';

//import { AnimatedCircularProgress } from 'react-native-circular-progress';
export default class AddWater extends React.Component {
  oncallSms = async () => {
    const { result } = await SMS.sendSMSAsync(
      ['8921290012', '9623448771'],
      'ypur plant xyz is lacking manure,sample text please ignore-green pin',
      {}
    );
  };

  render() {
    return (
      <View style={styles.horizontal}>
        <Text style={{ marginLeft: 80 }}>Nurture</Text>
        <View style={{ marginTop: 10 }}>
          <AnimatedProgressWheel
            size={200}
            width={20}
            color={'yellow'}
            progress={60}
            backgroundColor={'green'}
          />
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={{ marginLeft: 80 }}>Manure</Text>
          <AnimatedProgressWheel
            size={200}
            width={20}
            color={'yellow'}
            progress={60}
            backgroundColor={'green'}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#CC5500',

            marginTop: 100,
            borderWidth: 2,
            borderColor: 'cyan',
            alignItems: 'center',
            justifyContent: 'center',
            width: 250,
            height: 40,
            borderRadius: 50,
          }}
          onPress={() => {
            this.oncallSms();
          }}>
          <Text
            style={{
              fontSize: 20,
            }}>
            status
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 2,
    marginTop: 70,
    marginLeft: 100,
  },
});
