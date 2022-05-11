import React from 'react';
import styled from 'styled-components';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('SignUp');
  }, 3000);

  return (
    <>
      <Container>
          <Header>
        <LargeHeader>SplashScreen</LargeHeader>
        </Header>
        <FormInput>
            <Input
            placeholder="Enter your name"
            />
        </FormInput>
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
