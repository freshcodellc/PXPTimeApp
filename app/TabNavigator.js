import { TabNavigator } from 'react-navigation'

import TimerNavigator from '~/TimerNavigator'
import ReportsNavigator from '~/ReportsNavigator'
import SettingsContainer from '~/containers/Settings/SettingsContainer'

export default MainTabNavigator = TabNavigator({
  Timer: {
    screen: TimerNavigator,
  },
  Reports: {
    screen: ReportsNavigator,
  },
  Settings: {
    screen: SettingsContainer,
  }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});
