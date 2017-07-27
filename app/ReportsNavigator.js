import ReportsContainer from '~/containers/Reports/ReportsContainer'
import ClientReportsContainer from '~/containers/Reports/ClientReportsContainer'

import { StackNavigator } from 'react-navigation'

const navigatorOptions = {
  navigationOptions: {
    header: null,
  }
}

export default ReportsNavigator = StackNavigator({
  Home: {
    screen: ReportsContainer,
  },
  Clients: {
    screen: ClientReportsContainer,
  }
}, navigatorOptions);
