import LoginContainer from '~/containers/Login/LoginContainer'
import SignUpContainer from '~/containers/SignUp/SignUpContainer'
import GetRecoverContainer from '~/containers/GetRecover/GetRecoverContainer'
import TabNavigator from '~/TabNavigator'
import { StackNavigator } from 'react-navigation'

const navigatorOptions = {
  navigationOptions: {
    header: null,
  }
}

export default LoginNavigator = StackNavigator({
  Login: {
    screen: LoginContainer,
  },
  SignUp: {
    path: 'signup',
    screen: SignUpContainer
  },
  GetRecover: {
    path: 'getrecover',
    screen: GetRecoverContainer
  },
  TabNavigator: {
    path: 'tabnavigator',
    screen: TabNavigator
  },
}, navigatorOptions);
