import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';

const { width } = Dimensions.get('screen');

import { Header, Icon, Badge } from 'react-native-elements';
export default class NotificationScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#1B2E0F',
          marginTop: 50,
        }}>
        <View style={{ flex: 0.5, flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              height: 50,
              width: 170,
              marginHorizontal: 16,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: 'white',
              marginTop: 10,
            }}
            onPress={() => {
              this.props.navigation.navigate('Community');
            }}>
            <Text style={{ textAlign: 'center', margin: 10, fontSize: 20 }}>
              Track progress
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 50,
              width: 170,
              marginHorizontal: 16,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: 'white',
              marginTop: 10,
            }}
            onPress={() => {
              this.props.navigation.navigate('PlantATree');
            }}>
            <Text style={{ textAlign: 'center', margin: 10, fontSize: 20 }}>
              PlantATree
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.5, flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              height: 50,
              width: 170,
              marginHorizontal: 16,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: 'white',
              marginTop: -40,
            }}
            onPress={() => {
              this.props.navigation.navigate('Foundation');
            }}>
            <Text style={{ textAlign: 'center', margin: 10, fontSize: 20 }}>
              get sms update
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 50,
              width: 170,
              marginHorizontal: 16,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: 'white',
              marginTop: -40,
            }}>
            <Text style={{ textAlign: 'center', margin: 10, fontSize: 20 }}>
              Top clan
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 0.5, flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              height: 50,
              width: 170,
              marginHorizontal: 16,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: 'white',
              marginTop: -50,
            }}
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <Text style={{ textAlign: 'center', margin: 10, fontSize: 20 }}>
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 50,
              width: 170,
              marginHorizontal: 16,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: 'white',
              marginTop: -50,
            }}
            onPress={() => {
              this.props.navigation.navigate('MyForest');
            }}>
            <Text style={{ textAlign: 'center', margin: 10, fontSize: 20 }}>
              MyForest
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    width: width * 0.5,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300',
  },
  divider: {
    borderRightWidth: 0.3,
  },
  products: {
    width: width - 50 * 2,
    paddingVertical: 50 * 2,
  },

  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  productDescription: {
    padding: 50,
  },
  imageStyles: {
    width: 200,
    height: 200,
  },
  shadow: {
    shadowColor: '#415136',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  imageContainer: {
    elevation: 1,
  },
});
