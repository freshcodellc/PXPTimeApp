import React, { Component } from 'react'
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';
import { listAllInvoices } from '~/actions/InvoiceActions';
import Icon from 'react-native-vector-icons/Entypo';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

import { colors } from '~/constants/colors';

class ClientReportsContainer extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    const { dispatch, user } = this.props;
    let startDate = moment().subtract(6, 'months').startOf('month').format('YYYY-MM-DD');
    let endDate = moment().endOf('month').format('YYYY-MM-DD');

    dispatch(listAllInvoices(user.asyncKey, startDate, endDate));
    this.setState({ selectedTab: 'reports' })
  }

  formatCurrency(num) {
    let x = 3;
    let n = 2;
    let re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return num.toFixed(n).replace(new RegExp(re, 'g'), '$&,');
  }

  render() {
    // Back Button
    const { goBack } = this.props.navigation;

    // Get Invoice Data
    let invoiceList = this.props.invoices.results;
    let filteredList = invoiceList.filter((obj) => {
        if (obj.public.status === 'billed') return obj;
    });
    let newInvoiceList = _(filteredList)
        .groupBy('client.public.name')
        .map((objs, key) => ({
            'client.public.name': key,
            'public.amount': _.sumBy(objs, (invoice) => parseFloat(invoice.public.amount)
        )}))
        .value();

    invoiceList = newInvoiceList.map((invoice, index) => {
        return (
            <View style={styles.invoiceCard} key={index}>
                <Text style={styles.invoiceClient}>{invoice['client.public.name'].toUpperCase()}</Text>
                <Text style={styles.invoiceAmount}>${this.formatCurrency(invoice['public.amount'])}</Text>
            </View> 
        )
    });

    return (
      <View style={styles.mainContainer}>
        <View style={styles.navWrapper}>
          <TouchableOpacity style={styles.goBackButton} onPress={() => goBack()}>
            <Icon name="chevron-small-left" size={30} color={colors.LIGHTER_GREY} />
          </TouchableOpacity>
          <View style={styles.navTitle}>
            <Text style={styles.navTitleText}>Outstanding</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <ScrollView>
            {invoiceList} 
          </ScrollView>
        </View>
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window');
let cardLenth = ((width - 50));
let cardHeight = ((height/3) - 100);

const styles = StyleSheet.create({
  goBackButton: {
    position: 'absolute',
    top: 25,
    left: 10,
    color: 'red',
    backgroundColor: 'transparent'
  },
  invoiceCard: {
    height: cardHeight / 2,
    width: cardLenth,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PXP_GREY,
  },
  invoiceClient: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
    color: colors.DARKER_GREY,
  },
  invoiceAmount: {
    fontSize: 16,
    fontWeight: '900',
    color: 'white',
  },
  mainContainer: {
    flex: 1,
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
  contentContainer: {
    height: height-60-49,
    width: width,
    marginTop: 60,
    flex: 4,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.DARKER_GREY
  },
//   sectionTotal: {
//     width: width-40,
//     height: (height-60-49-40)/4,
//     backgroundColor: '#AAAAAA',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   sectionOpen: {
//     width: width-40,
//     height: (height-60-49-40)/4,
//     backgroundColor: colors.PXP_ORANGE,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   sectionBilled: {
//     width: width-40,
//     height: (height-60-49-40)/4,
//     backgroundColor: '#008DE7',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   sectionPaid: {
//     width: width-40,
//     height: (height-60-49-40)/4,
//     backgroundColor: '#00B871',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   reportLabel: {
//     fontSize: 34,
//     color: '#FFFFFF'
//   },
//   reportAmount: {
//     fontSize: 26,
//     color: '#FFFFFF'
//   }
});

export default connect(state => ({
    message: state.message,
    invoices: state.invoices,
    user: state.user
  })
)(ClientReportsContainer);
