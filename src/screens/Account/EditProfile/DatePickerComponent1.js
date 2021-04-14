import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import moment from 'moment';
import IconPack from '../../OnBoarding/Login/IconPack';
import CalendarPicker from 'react-native-calendar-picker';
import Modal from 'react-native-modal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


export default class DatePickerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      date: '',
      // date: moment(new Date().toISOString().slice(0, 10)).format('DD-MM-YYYY')
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
    let d = moment(new Date(date).toISOString().slice(0, 10)).format(
      'DD-MM-YYYY',
    );

    this.setState({
      date: d,
      isDateTimePickerVisible: false,
    });
    this.props.setAnniversaryDate(d);
  }

  render() {
    const { isDateTimePickerVisible, date } = this.state;

    return (
      <View style={styles.container}>
        <View
          style={{
            position: 'absolute',
            top: 8,
            right: 0,
            bottom: 0,
            left: 33,
          }}>
          <Text style={{ color: '#a3a3a3', fontSize: 13 }}>
            {this.props.dateLabel}
          </Text>
        </View>
        <View
          style={{
            marginTop: 32,
            flexDirection: 'row',
            marginright: 0,
          }}>
          <View style={{ marginRight: 15 }}>
            <Image
              source={IconPack.DATEEDIT}
              style={{ width: 20, height: 20, resizeMode: 'cover' }}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderColor: '#a3a3a3',
              width: '90%',
              height: 35,
            }}>
            <TouchableOpacity onPress={() => this.showDateTimePicker()}>
              <Text style={styles.textDatePickerStyle}>
                {this.props.anniversaryDate}
              </Text>
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
  textDatePickerStyle: {
    color: '#000000',
    marginTop: 5,
    fontSize: 18,
  },
});
