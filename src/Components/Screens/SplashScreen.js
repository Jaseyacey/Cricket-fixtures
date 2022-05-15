import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Auth} from 'aws-amplify';
import {customerInfo} from '../Redux/Actions/actions';
import {useDispatch} from 'react-redux';

const SplashScreen = ({navigation}) => {
  // check if user is signed in
  const [userUuid, setUserUuid] = useState('');
  const dispatch = useDispatch();
  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log('user info at sign up', user);
      dispatch(customerInfo(user));
      navigation.navigate('Home');
    } catch (err) {
      console.log('err', err);
      navigation.navigate('SignUp');
    }
  }

  setTimeout(() => {
    checkUser();
  }, 5000);

  return (
    <>
      <Container>
        <Header>
          <LargeHeader>SplashScreen</LargeHeader>
        </Header>
        <FormInput />
      </Container>
    </>
  );
};

export default SplashScreen;

const Container = styled.View`
  flex: 1;
`;
const LargeHeader = styled.Text`
  font-size: 30px;
  text-align: center;
  margin-top: 20%;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
  margin-left: 20px;
`;
const FormInput = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;
const Input = styled.TextInput`
  border-color: #000;
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  width: 200px;
`;
const Header = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;
