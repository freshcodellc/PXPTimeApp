import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LoginNavigator from '~/LoginNavigator'

const { width, height } = Dimensions.get('window');

class AppContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginNavigator/>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  loader: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: (height / 2) - 40,
    left: (width / 2) - 40,
    borderRadius: 5,
    backgroundColor: 'transparent'
  }
});

export default connect(state => ({
    loading: state.loading
  })
)(AppContainer);
