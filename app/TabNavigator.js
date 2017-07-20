import { TabNavigator } from 'react-navigation'

import TimerContainer from '~/containers/Timer/TimerContainer'

export default MainTabNavigator = TabNavigator({
  Timer: {
    screen: TimerContainer,
  }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});
