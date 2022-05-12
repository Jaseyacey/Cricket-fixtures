import React, {useState} from 'react';
import styled from 'styled-components';
import {DataStore} from '@aws-amplify/datastore';
import {ClubProfile} from '../../models/index';

const Profile = ({navigation}) => {
  const [clubName, setClubName] = useState('');
  const [clubEmail, setClubEmail] = useState('');
  const [clubPhone, setClubPhone] = useState('');
  const [clubLocation, setClubLocation] = useState('');
  const [clubWebsite, setClubWebsite] = useState('');
  const [clubTeams, setClubTeams] = useState({});
  const [clubDescription, setClubDescription] = useState('');
  async function getClubInfo() {
    await DataStore.save(
      new ClubProfile({
        club_email: clubEmail,
        club_name: clubName,
        club_number: clubPhone,
        club_description: clubDescription,
        club_website: clubWebsite,
        // club_teams: clubTeams,
      }),
    );
  }
  const handleSubmit = () => {
    getClubInfo();
    navigation.navigate('Home');
  };

  
  return (
    <Container>
      <Header>
        <LargeHeader>Register</LargeHeader>
      </Header>
      <FormBox>
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
        {/*  CLUB DESCRIPTION */}
        <Input
          placeholder="Enter description"
          value={clubDescription}
          multiline={true}
          onChangeText={text => setClubDescription(text)}
          onValueChange={models => setClubDescription(clubDescription)}
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

export default Profile;

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
