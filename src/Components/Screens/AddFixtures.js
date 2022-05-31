/* eslint-disable no-const-assign */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {DataStore} from '@aws-amplify/datastore';
import {AddFixtures} from '../../models/index';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {COLORS} from '../Constants/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DatePicker from 'react-native-neat-date-picker';
import moment from 'moment';

const AddNewFixtures = ({navigation}) => {
  const customerInfo = useSelector(state => state.userProfile);
  let userUuid = customerInfo.customerInfo.attributes.sub;
  console.log('userUuid here!!!!!', userUuid);
  const [oppoName, setOppoName] = useState('');
  const [homeTeam, setHomeTeam] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const dateText = date ? date : 'Select Date';
  const openDatePicker = () => {
    setShowDatePicker(true);
  };
  const onCancel = () => {
    setShowDatePicker(false);
  };
  const onConfirm = output => {
    setShowDatePicker(false);
    setDate(output.dateString);
    console.log(output.date);
    console.log(output.dateString);
  };
  let body = {
    away_team: oppoName,
    home_team: homeTeam,
    fixture_date: date,
    fixture_time: '14:00',
    fixture_location: location,
    id: userUuid,
  };

  const handleSubmit = () => {
    console.log('body', body);
    DataStore.save(new AddFixtures(body))
      .then(() => {
        console.log('saved', body);
        navigation.navigate('Home');
      })
      .catch(err => {
        console.log('err', err);
      });

    navigation.navigate('Home');
  };

  return (
    <Container>
      <Header>
        <LargeHeader>Add Fixtures</LargeHeader>
      </Header>
      <FormBox>
        {/*  OPPO NAME */}
        <Input
          placeholder="Enter your opposition name"
          value={oppoName}
          onChangeText={text => setOppoName(text)}
          onValueChange={models => setOppoName(oppoName)}
        />
        {/*  OPPO NAME */}
        <Input
          placeholder="Enter your team"
          value={homeTeam}
          onChangeText={text => setHomeTeam(text)}
          onValueChange={models => setHomeTeam(homeTeam)}
        />
        {/*  GAME TIME */}
        <Input
          placeholder="Enter game time"
          value={time}
          onChangeText={text => setTime(text)}
          onValueChange={models => setTime(time)}
        />
        {/*  GAME DATE */}
        <CalButton onPress={openDatePicker}>
          <CalText>{dateText}</CalText>
        </CalButton>
        <DatePicker
          isVisible={showDatePicker}
          onChangeText={text => setDate(text)}
          mode={'single'}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
        {/*  GAME LOCATION */}
        <Input
          placeholder="Enter the location"
          value={location}
          onChangeText={text => setLocation(text)}
          onValueChange={models => setLocation(location)}
        />
      </FormBox>
      <ButtonBox>
        <Button
          style={{
            width: '85%',
            alignSelf: 'center',
            justifyContent: 'flex-start',
            backgroundColor: `${COLORS.CRIC_BLUE}`,
          }}
          onPress={handleSubmit}>
          <ButtonText>Save</ButtonText>
        </Button>
      </ButtonBox>
    </Container>
  );
};

export default AddNewFixtures;

const Container = styled.View`
  flex: 1;
`;
const Header = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;
const LargeHeader = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;
const FormBox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

const Input = styled.TextInput`
  border-color: #000;
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  placeholdertextcolor: ${COLORS.CRIC_BLUE};
  margin-top: 10px;
  width: 200px;
`;
const ButtonBox = styled.View`
  flex: 0.2;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const Button = styled.TouchableOpacity`
  background-color: #000;
  padding: 10px;
  border-radius: 5px;
  width: 80%;
  margin-right: 10px;
`;
const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  align-self: center;
  font-weight: bold;
`;
const CalButton = styled.TouchableOpacity`
  border-color: #000;
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  width: 200px;
  height: 40px;
`;
const CalText = styled.Text`
  color: #000;
  font-size: 15px;
  align-self: center;
`;
