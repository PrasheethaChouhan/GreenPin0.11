import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
//import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Header, Icon, Badge } from 'react-native-elements';
export default class ChatScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
        <Card style={styles.homeCard}>
          <View>
            <Text style={styles.text}>Enter your activity!</Text>
          </View>
          <CustomButton
            style={styles.button}
            title="Add your watering activity"
            onPress={() => {
              props.navigation.navigate('AddWater');
            }}
          />
        </Card>
        <Card style={styles.homeCard}>
          <View>
            <Text style={styles.text}>Track and update your plan here.</Text>
          </View>
          <CustomButton
            style={styles.button}
            title="Plan annual"
            onPress={() => {
              props.navigation.navigate('AddManure');
            }}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#1B2E0F',
  },
  header: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#092f1c',
  },
  horizontal: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 2,
    marginTop: 70,
    marginLeft: 100,
  },
  homeCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 2,
    marginTop: 70,
    marginLeft: 0,
  },
});
