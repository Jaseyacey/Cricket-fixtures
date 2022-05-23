import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Auth, DataStore} from 'aws-amplify';
import {customerInfo} from '../Redux/Actions/actions';
import {useDispatch} from 'react-redux';
import {COLORS} from '../Constants/Colors';

const SplashScreen = ({navigation}) => {
  // check if user is signed in
  const dispatch = useDispatch();
  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const userInfo = user;
      console.log('user info at sign up', user);
      console.log('games info at sign up', userInfo);
      dispatch(customerInfo(user));
      navigation.navigate('Home');
    } catch (err) {
      console.log('err', err);
      navigation.navigate('SignUp');
    }
  }

  setTimeout(() => {
    checkUser();
  }, 2000);

  return (
    <Container>
      <Header>
        <LargeHeader>CricFix - Lets get organising</LargeHeader>
      </Header>
      <LogoBox>
        <Logo source={require('../Assets/Images/cricfix-logo.png')} />
      </LogoBox>
    </Container>
  );
};

export default SplashScreen;

const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.CRIC_BLUE};
`;
const LargeHeader = styled.Text`
  font-size: 30px;
  color: ${COLORS.WHITE};
  text-align: center;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
  margin-left: 20px;
`;
const LogoBox = styled.View`
  flex: 0.5;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.Image`
  padding-top: 25%;
  width: 75%;
  height: 80%;
  align-self: center;
  justify-self: center;
  border-radius: 50px;
`;

const Header = styled.View`
  flex: 0.3;
  border-radius: 25px;
  background-color: ${COLORS.CRIC_GREEN};
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;
