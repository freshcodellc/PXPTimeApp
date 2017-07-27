import { TabNavigator } from 'react-navigation'

import TimerNavigator from '~/TimerNavigator'
import ReportsContainer from '~/containers/Reports/ReportsContainer'
import WeeklyContainer from '~/containers/Weekly/WeeklyContainer'
import SettingsContainer from '~/containers/Settings/SettingsContainer'

export default MainTabNavigator = TabNavigator({
  Timer: {
    screen: TimerNavigator,
  },
  Weekly: {
    screen: WeeklyContainer,
  },
  Reports: {
    screen: ReportsContainer,
  },
  Settings: {
    screen: SettingsContainer,
  }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});
