import React, {useState} from 'react';
import styled from 'styled-components';
import {signUp} from '..//API/Registration';

const SignUp = () => {
  let body = {
    email: '',
    password: '',
    phone_number: '',
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const handleSubmit = () => {
    signUp(body);
  };
  return (
    <>
      <Container>
        <LargeHeader>Sign Up</LargeHeader>
        <FormInput>
          <Input
            placeholder="Enter your email"
            value={email}
            onChangeText={text => setEmail(text)}
            onValueChange={models => setEmail(email)}
          />
          <Input
            placeholder="Enter your password"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Input
            placeholder="Repeat your password"
            value={repeatPassword}
            onChangeText={text => setRepeatPassword(text)}
          />
          <Input
            placeholder="Enter your phone number"
            value={phone_number}
            onChangeText={text => setPhone_number(text)}
          />
        </FormInput>
        <ButtonBox>
          <Button onPress={handleSubmit}>
            <ButtonText>Sign Up</ButtonText>
          </Button>
        </ButtonBox>
      </Container>
    </>
  );
};

export default SignUp;

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
`;
const Input = styled.TextInput`
  border-color: #000;
  width: 80%;
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
`;
const ButtonBox = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 0.5;
  margin-top: 10px;
`;
const Button = styled.TouchableOpacity`
  background-color: #000;
  padding: 10px;
  width: 80%;
  border-radius: 5px;
  margin-right: 10px;
`;
const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  align-self: center;
`;
