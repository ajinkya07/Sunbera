import React, { Component } from 'react';
import { color } from '@values/colors';
import { View, Image, Platform, Text } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Header, Left, Body, Right, Button, Title } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { Theme } from '@values/Theme';

class _Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      showBack,
      showLogo,
      onSearchPress,
      onNotificationPress,
      onCallingPress,
      title,
      showSearch,
      showCalling,
      showNotification,
      headerColor,
    } = this.props;

    return (
      <Header
        style={{
          width: wp(100),
          height: hp(7),
          alignItems: 'center',
          backgroundColor: headerColor ? '#' + headerColor : '#fff',
        }}>
        <Button transparent>
          {showBack ? (
            <Image
              style={{ height: hp(2.5), width: hp(2.5) }}
              source={require('../../assets/image/Account/back_button.png')}
            />
          ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center', left: -5
                }}>
                <Image
                  source={require('../../assets/Home-Icon.png')}
                  style={{ height: 38, width: 38 }}
                  resizeMode={'contain'}
                />

                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Lato-Bold',
                    left: 5, letterSpacing: 1,
                    color: '#fff',
                  }}>
                  SUNBERA
                </Text>
              </View>
            )}
        </Button>

        {/* right side operation */}

        <Right>
          {showSearch ? (
            <Button transparent onPress={onSearchPress}>
              <Image
                style={{ height: hp(3.2), width: hp(3.2) }}
                source={require('../../assets/image/BlueIcons/Search-White.png')}
                resizeMode={'contain'}
              />
            </Button>
          ) : null}

          {showCalling ? (
            <Button transparent onPress={onCallingPress}>
              <Image
                style={{ height: hp(3.2), width: hp(3.2) }}
                source={require('../../assets/image/BlueIcons/Mobile.png')}
                resizeMode={'contain'}
              />
            </Button>
          ) : null}

          {showNotification ? (
            <Button transparent onPress={onNotificationPress}>
              <Image
                style={{ height: hp(3.2), width: hp(3.2), }}
                source={require('../../assets/image/BlueIcons/Notification-White.png')}
                resizeMode={'contain'}
              />
            </Button>
          ) : null}
        </Right>
      </Header>
    );
  }
}

export default _Header;
