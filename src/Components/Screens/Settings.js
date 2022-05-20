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
      <SettingsBox>
        <SettingsHeader>Account</SettingsHeader>
        <SettingsList>
          <SettingsItem>
            <SettingsItemText>
              Edit my profile
              <Icon name="keyboard-arrow-right" size={20} color="red" />
            </SettingsItemText>
            <SettingsItemText>
              Notifications
              <Icon name="keyboard-arrow-right" size={20} color="red" />
            </SettingsItemText>
          </SettingsItem>
      </SettingsList>
      </SettingsBox>
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
const SettingsBox = styled.View`
  flex: 0.75;
  background-color: #f5fcff;
`;
const MenuRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  margin-top: 20px;
`;
const SettingsHeader = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const SettingsList = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;
const SettingsItem = styled.View`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const SettingsItemText = styled.Text`
  font-size: 20px;
  width: 100%;
  justify-content: center;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;
