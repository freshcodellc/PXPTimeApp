import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearMessages } from '~/actions/MessageActions';
import { loginWithKey, loginWithCreds, setApiKey } from '~/actions/LoginActions';
import pxpLogo from '~/assets/images/Pxplogo.png';
import config from '~/config';
import Success from '~/components/alerts/Success';
import Failure from '~/components/alerts/Failure';
import {
  AsyncStorage,
  Dimensions,
  Image,
  ImageBackground,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';


class LoginContainer extends Component {
  constructor() {
    super();
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleAlternateClick = this.handleAlternateClick.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleTokenInputChange = this.handleTokenInputChange.bind(this);
    this.handleSignUpClick = this.handleSignUpClick.bind(this);
    this.handleForgotPasswordClick = this.handleForgotPasswordClick.bind(this);
    this.hideModalClick = this.hideModalClick.bind(this);
    this.state = {
      email: '',
      password: '',
      showTokenLogin: false,
      signInType: 'Api Key'
    }
  }

  componentWillMount() {
    AsyncStorage.getItem('apikey').then((key) => {
      if (key) {
        this.props.dispatch(setApiKey(key));
        this.props.navigation.navigate('TabNavigator');
      }
    }).done();
    this.setState({
      email: '',
      password: '',
      showTokenLogin: false
    })
  }

  handleUserNameChange(text) {
    this.setState({
      email: text
    })
  }

  handlePasswordChange(text) {
    this.setState({
      password: text
    })
  }

  handleTokenInputChange(text) {
    this.setState({
      tokenInput: text
    })
  }

  handleAlternateClick() {
    if (this.state.showTokenLogin === false) {
      this.setState({
        showTokenLogin: true,
        signInType: 'Credentials'
      })
    } else {
      this.setState({
        showTokenLogin: false,
        signInType: 'Api Key'
      })
    }
  }

  handleSignUpClick() {
    this.props.navigation.navigate('SignUp');
  }

  handleForgotPasswordClick() {
    console.log(this.props)
    this.props.navigation.navigate('GetRecover');
  }

  hideModalClick() {
    this.props.dispatch(clearMessages());
  }

  handleLoginClick() {
    if (this.state.showTokenLogin) {
      this.props.dispatch(loginWithKey(this.state.tokenInput, this.props.navigation.navigate))
    } else {
      const { email, password } = this.state;
      this.props.dispatch(loginWithCreds(email, password, this.props.navigation.navigate));
    }
  }

  render() {
    return (
      <ImageBackground style={styles.mainContainer} resizeMode="cover" source={require('~/assets/images/loginBackground.jpg')}>
        <StatusBar
          barStyle="light-content"
        />
        {
          this.props.message.errorMessage &&
          <Failure
            message={this.props.message.errorMessage}
            hideModalClick={this.hideModalClick} />
        }
        <View style={styles.topContentWrapper}>
          <Image source={pxpLogo} resizeMode="contain" style={styles.logoIcon}/>
        </View>
        <View style={styles.contentWrapper}>
          <View style={styles.formWrapper}>
            {
              this.state.showTokenLogin &&
              <View style={styles.formFieldsWrapperSmall}>
                <View style={styles.inputWrap}>
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="API Key"
                    style={styles.textInput}
                    onChangeText={this.handleTokenInputChange}/>
                  <Image style={styles.basicIcon} resizeMode="contain" source={require('~/assets/images/lockIcon.png')} />
                </View>
              </View>
            }
            {
              !this.state.showTokenLogin &&
              <View style={styles.formFieldsWrapper}>
                <View style={styles.inputWrapWithBorder}>
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Email Address"
                    style={styles.textInput}
                    onChangeText={this.handleUserNameChange}/>
                  <Image style={styles.basicIcon} resizeMode="contain" source={require('~/assets/images/emailIcon.png')} />
                </View>
                <View>
                  <TextInput
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Password"
                    style={styles.textInput}
                    onChangeText={this.handlePasswordChange}/>
                  <Image style={styles.basicIcon} resizeMode="contain" source={require('~/assets/images/lockIcon.png')} />
                </View>
              </View>
            }
          </View>
          <TouchableOpacity style={styles.buttonOrange} onPress={this.handleLoginClick}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonClear} onPress={this.handleAlternateClick}>
            <Text style={styles.buttonText}>SIGN IN WITH {this.state.signInType.toUpperCase()}</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>- or -</Text>
          <TouchableOpacity style={styles.buttonClear} onPress={this.handleSignUpClick}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleForgotPasswordClick}>
            <Text style={styles.orText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const { width, height } = Dimensions.get('window');
import { colors } from '~/constants/colors';

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: 'transparent'
  },
  backgroundImage: {
    width: width,
    height: height
  },
  topContentWrapper: {
    width: width,
    height: height/2,
    paddingTop: height/10,
    alignItems: 'center'
  },
  contentWrapper: {
    width: width,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingBottom: 20
  },
  logoIcon: {
    width: width/2,
    height: width/3
  },
  mainText: {
    color: colors.WHITE,
    fontSize: 30
  },
  formFieldsWrapper: {
    borderRadius: 3,
    height: 108,
    backgroundColor: colors.WHITE,
    borderColor: colors.LIGHTER_GREY,
    borderWidth: 2
  },
  formFieldsWrapperSmall: {
    borderRadius: 3,
    height: 54,
    backgroundColor: colors.WHITE,
    borderColor: colors.LIGHTER_GREY,
    borderWidth: 2
  },
  inputWrapWithBorder: {
    height: 54,
    width: width-50,
    borderBottomColor: colors.LIGHTER_GREY,
    borderBottomWidth: 2
  },
  textInput: {
    height: 54,
    backgroundColor: 'transparent',
    width: width-50,
    color: colors.LIGHT_GREY,
    paddingLeft: 46
  },
  basicIcon: {
    width: 16,
    height: 16,
    position: 'absolute',
    top: 19,
    left: 15
  },
  buttonClear: {
    height: 46,
    width: width-50,
    backgroundColor: 'transparent',
    borderRadius: 3,
    borderColor: colors.WHITE,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonOrange: {
    height: 46,
    width: width-50,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: colors.PXP_ORANGE,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: colors.WHITE,
    fontSize: 16
  },
  orText: {
    color: colors.WHITE,
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10
  }
});

export default connect(state => ({
    message: state.message
  })
)(LoginContainer);
