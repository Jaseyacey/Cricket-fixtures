import React, {useState} from 'react';
import styled from 'styled-components';
import {Auth} from 'aws-amplify';

const PinCode = ({navigation}) => {
  const [pinCode, setPinCode] = useState('');
  const [username, setUsername] = useState('');

  /* Sign up function */
  async function confirmUser() {
    try {
      await Auth.confirmSignUp(username, pinCode);
      console.log('User signed up');
      navigation.navigate('Profile');
    } catch (err) {
      console.log({err});
    }
  }
  const handleSubmit = () => {
    confirmUser();
    console.log(pinCode);
  };
  /* Sign up function */
  return (
    <Container>
      <LargeHeader>Pin Code</LargeHeader>
      <FormInput>
        <Input
          placeholder="Enter your pin code"
          value={username}
          onChangeText={text => setUsername(text)}
          onValueChange={models => setUsername(username)}
        />
        <Input
          placeholder="Enter your pin code"
          value={pinCode}
          onChangeText={text => setPinCode(text)}
        />
      </FormInput>
      <ButtonBox>
        <Button onPress={handleSubmit}>
          <ButtonText>Submit</ButtonText>
        </Button>
      </ButtonBox>
    </Container>
  );
};

export default PinCode;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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
  flex: 1;
  justify-content: center;
  align-items: center;
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
`;
