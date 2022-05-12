import React from 'react';
import {DataStore} from 'aws-amplify';
import {ClubProfile} from '../../models';
import styled from 'styled-components';

const Home = () => {
  // get club info from database
  async function getClubInfo() {
    const club = await DataStore.query(ClubProfile);
    console.log(club);
  }
  setTimeout(() => {
    getClubInfo();
  }, 50);

  return (
    <Container>
      <Header>
        <LargeHeader>Register</LargeHeader>
      </Header>
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
