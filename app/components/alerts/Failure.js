import React, { Component, PropTypes } from 'react'
import {
  Image,
  Modal,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { activityStyles } from '../../assets/ActivityStyle';
import { iconStyles } from '../../assets/IconStyles';
import Exclamation from '../../assets/images/Exclamation.png';
import { BLUE } from '../../constants/colors';

const propTypes = {
  hideModalClick: PropTypes.func.isRequired
};

class Failure extends Component {
  render() {
    return (
      <Modal
        onPress
        transparent={true}
        visible={true}>
        <TouchableHighlight
          style={activityStyles.messageWrap}
          onPress={this.props.hideModalClick}>
          <View style={activityStyles.failure}>
            <Image source={Exclamation} style={iconStyles.alertIcon}/>
          </View>
        </TouchableHighlight>
      </Modal>
    );
  }
}

Failure.propTypes = propTypes;

export default Failure;
