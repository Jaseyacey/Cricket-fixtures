import React, {useEffect} from 'react';
import {DataStore} from 'aws-amplify';
import {ClubProfile} from '../../models';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = ({navigation}) => {
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
      <Calendar>
        <LargeHeader>Calendar</LargeHeader>
        {/* // add a calendar here */}
        <Calendar />
      </Calendar>
      <AddFixtures>
        <MenuRow>
          <Icon
            name="add"
            size={30}
            onPress={() => navigation.navigate('Profile')}
          />

          <Icon name="chat" size={30} />
          <Icon name="emoji-people" size={30} />
          <Icon 
            name="settings"
            size={30}
            onPress={() => navigation.navigate('Settings')}
          />
        </MenuRow>
        <TextRow>
          <TinyText>Fixtures</TinyText>
          <TinyText>Chat</TinyText>
          <TinyText>Profile</TinyText>
          <TinyText>Settings</TinyText>
        </TextRow>
      </AddFixtures>
    </Container>
  );
};

export default Home;

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

const Calendar = styled.View`
  flex: 0.8;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

const AddFixtures = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
  margin-top: 20px;
`;
const MenuRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  margin-top: 20px;
`;
const TextRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;
`;
const TinyText = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;
