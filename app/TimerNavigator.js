import TimerContainer from '~/containers/Timer/TimerContainer'
import BoardsContainer from '~/containers/Boards/BoardsContainer'
import CardsContainer from '~/containers/Cards/CardsContainer'
import { StackNavigator } from 'react-navigation'

const navigatorOptions = {
  navigationOptions: {
    header: null,
  }
}

export default TimerNavigator = StackNavigator({
  Timer: {
    screen: TimerContainer,
  },
  Boards: {
    path: 'boards',
    screen: BoardsContainer
  },
  Cards: {
    path: 'cards',
    screen: CardsContainer
  }
}, navigatorOptions);
