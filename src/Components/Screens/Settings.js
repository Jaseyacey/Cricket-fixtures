/* eslint-disable no-alert */
import React, {useState} from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Auth} from 'aws-amplify';

const Settings = ({navigation}) => {
  /* Sign out function */
  async function signOutUser() {
    try {
      await Auth.signOut();
      console.log('User signed out');
      navigation.navigate('SignIn');
    } catch (err) {
      alert(err.message);
      console.log({err});
    }
  }
  const handleSubmit = () => {
    signOutUser();
  };
  return (
    <Container>
      <Header>
        <LargeHeader>Settings</LargeHeader>
      </Header>
      <MenuRow>
        <Icon
          name="add"
          size={30}
          onPress={() => navigation.navigate('Profile')}
        />
        <Icon name="chat" size={30} />
        <Icon name="emoji-people" size={30} />
        <Icon name="settings" size={30} onPress={handleSubmit} />
      </MenuRow>
    </Container>
  );
};

export default Settings;

const Container = styled.View`
  flex: 1;
  background-color: #f5fcff;
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

const Calendar = styled.View`
  flex: 0.8;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

const AddFixtures = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
  margin-top: 20px;
`;
const MenuRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  margin-top: 20px;
`;
const TextRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;
`;
const TinyText = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;
