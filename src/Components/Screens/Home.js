import React from 'react';
import {DataStore} from 'aws-amplify';
import {ClubProfile} from '../../models';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

const Home = () => {
  // get redux store data
  const currentUser = useSelector(state => state.userProfile);
  console.log('currentUser', currentUser);
  // get club info from database
  async function getClubInfo() {
    const clubProfile = await DataStore.query(ClubProfile);
    console.log('This is the club', clubProfile[0].club_name);
  }
  setTimeout(() => {
    getClubInfo();
  }, 50);

  return (
    <Container>
      <Header>
        <LargeHeader>Welcome {'Clubname'}</LargeHeader>
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
