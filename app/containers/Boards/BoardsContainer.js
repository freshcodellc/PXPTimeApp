import React, { Component, PropTypes } from 'react'
import { helperStyles } from '~/assets/HelperStyles';
import { connect } from 'react-redux';
import _ from 'lodash';
import { listBoards, selectBoard } from '~/actions/BoardActions';
import Board from '~/components/Board';
import {
  AsyncStorage,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';


class BoardsContainer extends Component {
  constructor() {
    super();
    this.handleBoardClick = this.handleBoardClick.bind(this);
  }

  componentWillMount() {
    const { dispatch, user } = this.props;
    AsyncStorage.getItem('apikey').then((value) => {
      dispatch(listBoards(value));
    }).done()
  }

  render() {
    const { selectedBoard } = this.props.boards;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.navWrapper}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
          >
            <Image style={styles.backIcon} resizeMode="contain" source={require('~/assets/images/backIcon.png')} />
          </TouchableOpacity>
          <View style={styles.navTitle}>
            <Text style={styles.navTitleText}>Boards</Text>
          </View>
        </View>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.boardListWrapper}>
            {
              this.props.boards.results.map((board, index) => {
                let selected = false;
                if (!_.isUndefined(selectedBoard.public) && selectedBoard.public.apikey === board.public.apikey) {
                  selected = true;
                };
                return (
                  <Board key={index} onBoardClick={this.handleBoardClick} board={board} selected={selected} />
                )
              })
            }
          </View>
        </ScrollView>
      </View>
    );
  }

  handleBoardClick(board) {
    const { dispatch } = this.props;
    dispatch(selectBoard(board));
    this.props.navigation.navigate('Cards');

  }
}

const { width, height } = Dimensions.get('window');
import { colors } from '~/constants/colors';


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.DARKER_GREY,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navWrapper: {
    width: width,
    height: 60,
    top: 0,
    paddingTop: 29,
    position: 'absolute',
    backgroundColor: colors.DARKER_GREY,
    borderBottomWidth: .5,
    borderBottomColor: colors.PXP_GREY
  },
  navTitle: {
    width: width/2,
    position: 'absolute',
    left: (width/2)-(width/4),
    top: 29,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navTitleText: {
    color: colors.PXP_ORANGE,
    fontSize: 18
  },
  backIcon: {
    height: 22,
    marginLeft: 15
  },
  boardListWrapper: {
    width: width,
    height: height - 152,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: .5,
    borderColor: colors.PXP_GREY
  },
  scrollContainer: {
    width: width,
    position: 'absolute',
    top: 60
  }
});

export default connect(state => ({
    boards: state.boards,
    message: state.message,
    user: state.user
  })
)(BoardsContainer);
