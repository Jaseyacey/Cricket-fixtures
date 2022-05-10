import React, {useState} from 'react';
import styled from 'styled-components';
import {DataStore} from '@aws-amplify/datastore';
import {CricketClub} from '../../models';

const models = DataStore.query(CricketClub);
console.log('MODELS HERE', models);

const Profile = () => {
  const [clubName, setClubName] = useState('');
  const [clubEmail, setClubEmail] = useState('');
  const [clubPhone, setClubPhone] = useState('');
  const [clubLocation, setClubLocation] = useState('');
  const [clubWebsite, setClubWebsite] = useState('');
  const [clubTeams, setClubTeams] = useState('');
  const handleSubmit = () => {
    const newClub = new CricketClub({
      name: clubName,
      email: clubEmail,
      location: clubLocation,
      phone: clubPhone,
      website: clubWebsite,
    });
    DataStore.save(newClub);
    setClubName('');
    setClubEmail('');
    setClubPhone('');
    setClubLocation('');
    setClubWebsite('');
    setClubTeams('');
  };
  console.log('MODELS HERE', models);

  return (
    <Container>
      <Header>
        <LargeHeader>Club Profile</LargeHeader>
        {/*  CLUB NAME */}
        <Input
          placeholder="Enter your name"
          value={clubName}
          onChangeText={text => setClubName(text)}
          onValueChange={models => setClubName(clubName)}
        />
        {/*  CLUB EMAIL */}
        <Input
          placeholder="Enter your email"
          value={clubEmail}
          onChangeText={text => setClubEmail(text)}
          onValueChange={models => setClubEmail(clubEmail)}
        />
        {/*  CLUB LOCATION */}
        <Input
          placeholder="Enter your location"
          value={clubLocation}
          onChangeText={text => setClubLocation(text)}
          onValueChange={models => setClubLocation(clubLocation)}
        />
        {/*  CLUB NUMBER */}
        <Input
          placeholder="Enter contact number"
          value={clubPhone}
          onChangeText={text => setClubPhone(text)}
          onValueChange={models => setClubPhone(clubPhone)}
        />
        {/*  CLUB WEBSITE */}
        <Input
          placeholder="Enter website"
          value={clubWebsite}
          onChangeText={text => setClubWebsite(text)}
          onValueChange={models => setClubWebsite(clubWebsite)}
        />
        {/*  CLUB TEAMS */}
        <Input
          placeholder="Enter teams"
          value={clubTeams}
          onChangeText={text => setClubTeams(text)}
          onValueChange={models => setClubTeams(clubTeams)}
        />
        <ButtonBox>
          <Button onPress={handleSubmit}>
            <ButtonText>Save</ButtonText>
          </Button>
        </ButtonBox>
      </Header>
    </Container>
  );
};

export default Profile;

const Container = styled.View`
  flex: 1;
`;
const Header = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;
const LargeHeader = styled.Text`
  font-size: 30px;
  font-weight: bold;
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const Button = styled.TouchableOpacity`
  background-color: #000;
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
`;
const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
