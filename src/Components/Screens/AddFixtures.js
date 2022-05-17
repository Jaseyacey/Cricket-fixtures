import React, {useState} from 'react';
import styled from 'styled-components';
import {DataStore} from '@aws-amplify/datastore';
import {ClubFixture} from '../../models/index';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

const AddFixtures = ({navigation}) => {
  const customerInfo = useSelector(state => state.userProfile);
  let userUuid = customerInfo.customerInfo.attributes.sub;
  console.log('userUuid here!!!!!', userUuid);
  const [oppoName, setOppoName] = useState('');
  const [homeTeam, setHomeTeam] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  async function AddFixture() {
    await DataStore.save(
      new AddFixtures({
        id: userUuid,
        oppo_name: oppoName,
        home_team: homeTeam,
        date: date,
        time: time,
        location: location,
      }),
    );
  }
  const handleSubmit = () => {
    AddFixture();
    console.log('fixture added', AddFixtures);
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
        <Input
          placeholder="Enter the date"
          value={date}
          onChangeText={text => setDate(text)}
          onValueChange={models => setDate(homeTeam)}
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
        <Button onPress={handleSubmit}>
          <ButtonText>Save</ButtonText>
        </Button>
      </ButtonBox>
    </Container>
  );
};

export default AddFixtures;

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
