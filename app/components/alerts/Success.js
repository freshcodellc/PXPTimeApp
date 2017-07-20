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
import { BLUE } from '../../constants/colors';
import Check from '../../assets/images/Check.png';

const propTypes = {
  hideModalClick: PropTypes.func.isRequired
};

class Success extends Component {
  render() {
    return (
        <Modal
          onPress
          transparent={true}
          visible={true}>
          <TouchableHighlight
            style={activityStyles.messageWrap}
            onPress={this.props.hideModalClick}>
            <View style={activityStyles.success}>
              <Image source={Check} style={iconStyles.alertIcon}/>
            </View>
          </TouchableHighlight>
        </Modal>
    );
  }
}

Success.propTypes = propTypes;

export default Success;
