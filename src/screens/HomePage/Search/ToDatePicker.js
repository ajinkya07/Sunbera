import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import moment from 'moment';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CalendarPicker from 'react-native-calendar-picker';
import Modal from 'react-native-modal';



export default class ToDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      // date:moment(new Date().toISOString().slice(0, 10)).format('DD-MM-YYYY')
    };
  }

  showDateTimePicker = () => {
    this.setState({
      isDateTimePickerVisible: true,
    });
  };

  hideDateTimePicker = () => {
    this.setState({
      isDateTimePickerVisible: false,
    });
  };

  handleDatePicked(date) {
    let d = moment(new Date(date).toISOString().slice(0, 10)).format('DD-MM-YYYY');

    this.setState({
      date: d,
      isDateTimePickerVisible: false,
    });
    this.props.setToDate(d)
  }

  render() {
    const { isDateTimePickerVisible, date } = this.state

    return (
      <View style={styles.container}>

        <View
          style={{
            flexDirection: 'row',
            marginright: 0,
          }}>

          <View
            style={{
              marginTop: 5,
              borderColor: 'gray',
              borderBottomWidth: 1,
              width: wp(35),
              height: 40,
            }}>
            <TouchableOpacity
              onPress={() => this.showDateTimePicker()}>
              {this.props.toDate !== '' &&
                <Text style={styles.textDatePickerStyle}> {this.props.toDate}</Text>}

              {this.props.toDate == '' && <Text style={styles.textDatePickerStyle2}>{' To Date'}</Text>}
            </TouchableOpacity>
          </View>
        </View>

        {/* {isDateTimePickerVisible && (
          <DateTimePicker
            isVisible={isDateTimePickerVisible}
            onConfirm={date => this.handleDatePicked(date)}
            onCancel={() => this.hideDateTimePicker()}
          />
        )} */}

        <Modal
          isVisible={isDateTimePickerVisible}
          onRequestClose={() => this.setState({ isDateTimePickerVisible: false })}
          onBackdropPress={() => this.setState({ isDateTimePickerVisible: false })}
          onBackButtonPress={() => this.setState({ isDateTimePickerVisible: false })}
          style={{ margin: 0 }}
        >
          <View style={{ backgroundColor: '#fff', }}>
            <TouchableWithoutFeedback onPress={() => this.setState({ isDateTimePickerVisible: false })}>
              <>
                <View>
                  <CalendarPicker
                    onDateChange={(d) => this.handleDatePicked(d)}
                    selectedDayColor={headerTheme ? '#' + headerTheme : 'gray'}
                    scrollable={true}
                    headerWrapperStyle={{ marginVertical: 30, }}
                  />
                </View>

                <TouchableOpacity onPress={() => this.setState({ isDateTimePickerVisible: false })}>
                  <View style={{
                    alignItems: 'flex-end',
                    height: hp(8),
                    justifyContent: 'center',
                    marginRight: 20
                  }}>
                    <Text style={{ fontSize: 16, color: '#000000' }}>
                      Close
                      </Text>
                  </View>
                </TouchableOpacity>

              </>
            </TouchableWithoutFeedback>
          </View>

        </Modal>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  textDatePickerStyle2: {
    color: 'gray',
    marginTop: 5,
    fontSize: 18,
  },
  textDatePickerStyle: {
    color: '#000000',
    marginTop: 5,
    fontSize: 18,
  }
});
