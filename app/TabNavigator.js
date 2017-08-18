import React from 'react'
import { Image } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { Platform } from 'react-native'

import TimerNavigator from '~/TimerNavigator'
import ReportsNavigator from '~/ReportsNavigator'
import WeeklyContainer from '~/containers/Weekly/WeeklyContainer'
import SettingsContainer from '~/containers/Settings/SettingsContainer'

import { colors } from '~/constants/colors'

export default MainTabNavigator = TabNavigator({
  Timer: {
    screen: TimerNavigator,
    navigationOptions: {
      showLabel: false,
      tabBarIcon: ({ focused }) => (
        focused
        ? <Image resizeMode="contain" style={{height: 25}} source={require('~/assets/images/timeIconLight.png')} />
        : <Image resizeMode="contain" style={{height: 25}} source={require('~/assets/images/timeIcon.png')} />
      ),
      showIcon: true
    }
  },
  Weekly: {
    screen: WeeklyContainer,
    navigationOptions: {
      showLabel: false,
      tabBarIcon: ({ focused }) => (
        focused
        ? <Image resizeMode="contain" style={{height: 25}} source={require('~/assets/images/weeklyIconLight.png')} />
        : <Image resizeMode="contain" style={{height: 25}} source={require('~/assets/images/weeklyIcon.png')} />
      ),
      showIcon: true
    }
  },
  Reports: {
    screen: ReportsNavigator,
    navigationOptions: {
      showLabel: false,
      tabBarIcon: ({ focused }) => (
        focused
        ? <Image resizeMode="contain" style={{height: 25}} source={require('~/assets/images/reportsIconLight.png')} />
        : <Image resizeMode="contain" style={{height: 25}} source={require('~/assets/images/reportsIcon.png')} />
      ),
      showIcon: true
    }
  },
  Settings: {
    screen: SettingsContainer,
    navigationOptions: {
      showLabel: false,
      tabBarIcon: ({ focused }) => (
        focused
        ? <Image resizeMode="contain" style={{height: 25}} source={require('~/assets/images/settingsIconLight.png')} />
        : <Image resizeMode="contain" style={{height: 25}} source={require('~/assets/images/settingsIcon.png')} />
      ),
      showIcon: true
    }
  }
}, {
  tabBarOptions: {
    showIcon: true,
    activeTintColor: colors.LIGHTER_GREY,
    inactiveTintColor: colors.BLACK,
    indicatorStyle: {
      backgroundColor: colors.WHITE,
    },
    style: {
      backgroundColor: colors.PXP_GREY,
    },
    labelStyle: {
      fontSize: 14,
    },
    showLabel: (Platform.OS !== 'android'),
    iconStyle: {
      width: 35,
      height: 35
    }
  },
  tabBarPosition: 'bottom',
  swipeEnabled: false
});
