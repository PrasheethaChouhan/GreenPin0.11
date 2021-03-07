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
import { Header, Icon, Badge } from 'react-native-elements';

//import { AnimatedCircularProgress } from 'react-native-circular-progress';
export default class ChatScreen extends React.Component {
  oncallSms = async () => {
    const { result } = await SMS.sendSMSAsync(
      ['8921290012', '9623448771'],
      'ypur plant xyz is lacking manure,sample text please ignore-green pin',
      {}
    );
  };

  render() {
    return (
      <View
        style={(styles.horizontal, { flex: 1, backgroundColor: '#1B2E0F' })}>
        <Header
          style={styles.header}
          centerComponent={{
            text: 'Green Pin',
            style: { color: '#90A5A9', fontSize: 20, fontWeight: 'bold' },
          }}
          rightComponent={
            <Icon
              name="paw"
              type="font-awesome"
              color="#696969"
              onPress={() => {
                this.props.navigation.navigate('NotificationScreen');
              }}
            />
          }
          backgroundColor="#eaf8fe"
        />
        <Text style={{ marginLeft: 80 }}>Nurture</Text>
        <View style={{ marginTop: 10 }}>
          <AnimatedProgressWheel
            size={200}
            width={20}
            color={'yellow'}
            progress={60}
            backgroundColor={'#143908'}
            marginLeft={80}
          />
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={{ marginLeft: 80 }}>Manure</Text>
          <AnimatedProgressWheel
            size={200}
            width={20}
            color={'yellow'}
            progress={60}
            backgroundColor={'#143908'}
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
    justifyContent: 'flex-start',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#8fab33',
    marginTop: 10,
  },
  horizontal: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 2,
    marginTop: 0,
    marginLeft: 0,
  },
});
