import React, {useState} from 'react';
import styled from 'styled-components';
import {Auth} from 'aws-amplify';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  /* Sign up function */
  async function registerUser() {
    try {
      await Auth.signUp({
        username: username,
        password: password,
        attributes: {
          email: email,
          phone_number: phone_number,
        },
      });
      console.log('User signed up');
      navigation.navigate('PinCode');
    } catch (err) {
      alert(err.message);
      console.log({err});
    }
  }
  const handleSubmit = () => {
    registerUser();
  };
  return (
    <>
      <Container>
        <LargeHeader>Sign Up</LargeHeader>
        <FormInput>
          <Input
            placeholder="Enter your username"
            value={username}
            onChangeText={text => setUsername(text)}
            onValueChange={models => setUsername(username)}
            setIsValid={true}
          />
          <Input
            placeholder="Enter your email"
            value={email}
            onChangeText={text => setEmail(text)}
            onValueChange={models => setEmail(email)}
            setIsValid={true}
          />
          <Input
            placeholder="Enter your password"
            value={password}
            onChangeText={text => setPassword(text)}
            setIsValid={true}
          />
          <Input
            placeholder="Repeat your password"
            value={repeatPassword}
            onChangeText={text => setRepeatPassword(text)}
            setIsValid={true}
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
