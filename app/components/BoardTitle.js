import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '~/assets/StyleSheet';

const propTypes = {
  board: PropTypes.object.isRequired
};

class CardTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { board } = this.props;
    return (
      <View style={styles.boardTitle}>
          <Text style={styles.buttonText}>{board.public.name}</Text>
      </View>
    );
  }
}

CardTitle.propTypes = propTypes;

export default CardTitle;
