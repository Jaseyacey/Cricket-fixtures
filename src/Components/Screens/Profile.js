/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useId, useState} from 'react';
import styled from 'styled-components';
import {DataStore} from '@aws-amplify/datastore';
import {ClubsProfile} from '../../models/index';
import {COLORS} from '../Constants/Colors';
import {useDispatch, useSelector} from 'react-redux';

const Profile = ({navigation}) => {
  const [clubName, setClubName] = useState('');
  // const [clubEmail, setClubEmail] = useState('');
  const [clubPhone, setClubPhone] = useState('+44');
  const [clubLocation, setClubLocation] = useState('');
  // const [clubWebsite, setClubWebsite] = useState('');
  const [userUuid, setUserUuid] = useState('');
  const [teamName, setTeamName] = useState({});
  const [clubDescription, setClubDescription] = useState('');
  const [newClub, setNewClub] = useState('');
  const customerInfo = useSelector(state => state.userProfile);
  let uuid = customerInfo.customerInfo.attributes.sub;
  console.log('uuid on Profile', uuid);

  async function getClubInfo() {
    let clubTeams = {
      teamName: [
        {
          teamName: teamName,
        },
      ],
    };

    await DataStore.save(
      new ClubsProfile({
        id: uuid,
        club_description: clubDescription,
        club_email: clubEmail,
        club_name: clubName,
        club_website: 'https://www.google.com',
        club_teams: clubTeams,
        club_number: clubPhone,
      }),
    );
  }
  const handleSubmit = () => {
     // console.log('clubs profile', ClubsProfile);
    navigation.navigate('Home');
  };

  return (
    <Container>
      <Header>
        <LargeHeader>Register</LargeHeader>
      </Header>
      <FormBox>
        <InputHeader>Club Name</InputHeader>
        <Input
          placeholder="Enter your name"
          placeholderTextColor={COLORS.WHITE}
          value={clubName}
          onChangeText={text => setClubName(text)}
          onValueChange={models => setClubName(clubName)}
        />

        {/*  CLUB EMAIL */}
        <InputHeader>Club Email</InputHeader>
        <Input
          placeholder="Enter your email"
          placeholderTextColor={COLORS.WHITE}
          value={clubEmail}
          onChangeText={text => setClubEmail(text)}
          onValueChange={models => setClubEmail(clubEmail)}
        />
        {/*  CLUB LOCATION */}
        <InputHeader>Club Location</InputHeader>
        <Input
          placeholder="Enter your location"
          placeholderTextColor={COLORS.WHITE}
          value={clubLocation}
          onChangeText={text => setClubLocation(text)}
          onValueChange={models => setClubLocation(clubLocation)}
        />
        {/*  CLUB NUMBER */}
        <InputHeader>Club Number</InputHeader>
        <Input
          placeholder="Enter contact number"
          placeholderTextColor={COLORS.WHITE}
          value={clubPhone}
          // setValidation={setVerifyInput}
          onChangeText={text => setClubPhone(text)}
          onValueChange={models => setClubPhone(clubPhone)}
        />
        {/*  CLUB WEBSITE */}
        <InputHeader>Club Website</InputHeader>
        <Input
          placeholder="Enter website"
          placeholderTextColor={COLORS.WHITE}
          value={clubWebsite}
          // setValidation={setVerifyInput}
          onChangeText={text => setClubWebsite(text)}
          onValueChange={models => setClubWebsite(clubWebsite)}
        />
        {/*  CLUB TEAMS */}
        <InputHeader>Club Teams</InputHeader>
        <Input
          placeholder="Enter teams"
          placeholderTextColor={COLORS.WHITE}
          value={teamName}
          onChangeText={text => setTeamName([text])}
          onValueChange={models => setTeamName(teamName)}
        />
        {/*  CLUB DESCRIPTION */}
        <InputHeader>Club Description</InputHeader>
        <Input
          placeholder="Enter description"
          placeholderTextColor={COLORS.WHITE}
          value={clubDescription}
          multiline={true}
          // setValidation={setVerifyInput}
          onChangeText={text => setClubDescription(text)}
          onValueChange={models => setClubDescription(clubDescription)}
        />
      </FormBox>
      <ButtonBox>
        <Button
          // disabled={!verifyInput}
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

export default Profile;

const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.WHITE};
`;
const Header = styled.View`
  flex: 0.2;
  justify-content: center;
  border-radius: 25px;
  background-color: ${COLORS.CRIC_BLUE};
  align-items: center;
`;
const LargeHeader = styled.Text`
  font-size: 30px;
  color: ${COLORS.WHITE};
  font-weight: bold;
`;
const FormBox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.CRIC_GREEN};
  margin-top: 20px;
  border-radius: 25px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;
const InputHeader = styled.Text`
  font-size: 20px;
  align-self: flex-start;
  padding-left: 10%;
  color: ${COLORS.WHITE};
`;

const Input = styled.TextInput`
  border-color: #000;
  border-width: 1px;
  border-radius: 25px;
  border-color: ${COLORS.WHITE};
  padding: 10px;
  margin-top: 10px;
  width: 90%;
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
  border-radius: 25px;
  width: 80%;
  margin-right: 10px;
`;
const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  align-self: center;
  font-weight: bold;
`;
