import React, {useEffect} from 'react';
import {DataStore} from 'aws-amplify';
import {ClubProfile} from '../../models';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {
  // get redux store data
  const customerInfo = useSelector(state => state.userProfile);
  const dispatch = useDispatch();

  // query the data store for the current user
  setTimeout(() => {
    console.log('userUuid here!!!!!', customerInfo.customerInfo.username);
  }, 1000);
  const clubName = customerInfo.customerInfo.username;
  return (
    <Container>
      <Header>
        <LargeHeader>Welcome {clubName}</LargeHeader>
      </Header>
      <Body>
      </Body>
    </Container>
  );
};

export default Home;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
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
