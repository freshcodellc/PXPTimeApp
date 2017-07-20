import { TabNavigator } from 'react-navigation'

import TimerNavigator from '~/TimerNavigator'

export default MainTabNavigator = TabNavigator({
  Timer: {
    screen: TimerNavigator,
  }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});
