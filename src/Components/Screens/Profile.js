import React, {useState} from 'react';
import styled from 'styled-components';
import {DataStore} from '@aws-amplify/datastore';
import {CricketClub} from '../../models';

const models = DataStore.query(CricketClub);
console.log('MODELS HERE', models);

const Profile = () => {
  const handleSubmit = () => {
    const newClub = new CricketClub();
    newClub.name = clubName;
    newClub.save();
  };
  const [clubName, setClubName] = useState('');
  
  return (
    <Container>
      <Header>
        <LargeHeader>Profile</LargeHeader>
        <Input
          placeholder="Enter your name"
          value={clubName}
          onChangeText={text => setClubName(text)}
          onValueChange={(models) => setClubName(clubName)}
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
