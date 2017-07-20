import { TabNavigator } from 'react-navigation'

import TimerNavigator from '~/TimerNavigator'
import ReportsContainer from '~/containers/Reports/ReportsContainer'

export default MainTabNavigator = TabNavigator({
  Timer: {
    screen: TimerNavigator,
  },
  Reports: {
    screen: ReportsContainer,
  }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});
