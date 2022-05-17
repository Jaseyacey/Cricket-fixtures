import React, {useState} from 'react';
import {DataStore} from 'aws-amplify';
import {ClubProfile} from '../../models';
import styled from 'styled-components';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';
// import react native paper
import {Modal, Portal, Text, Button, Provider} from 'react-native-paper';

const Home = ({navigation}) => {
  // modal visible
  const [modalVisible, setModalVisible] = React.useState(false);
  const showModalFixtures = {
    visible: modalVisible,
  };
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const [modalDate, setModalDate] = useState('');
  const fixtureDate = modalDate.day;
  console.log('modalDate', modalDate.day);
  const containerStyle = {
    backgroundColor: '#f5fcff',
    padding: 20,
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    shadowColor: '#000',
  };
  // set todays date with moment
  const today = moment().format('YYYY-MM-DD');
  // get redux store data
  const customerInfo = useSelector(state => state.userProfile);
  const dispatch = useDispatch();
  // query the data store for the current user
  setTimeout(() => {
    console.log('userUuid here!!!!!', customerInfo.customerInfo.username);
  }, 1000);
  const clubName = customerInfo.customerInfo.username;
  return (
    <>
      <Container>
        <Header>
          <LargeHeader>Welcome {clubName}</LargeHeader>
        </Header>
        <CalendarBox>
          {/* // add a calendar here */}
          <Calendar current={today} onDayPress={setModalDate} />
        </CalendarBox>
        <AddFixtures>
          <MenuRow>
            <Icon
              name="emoji-people"
              size={30}
              onPress={() => navigation.navigate('Profile')}
            />

            <Icon
              name="chat"
              size={30}
              onPress={() => navigation.navigate('ChatScreen')}
            />
            <Icon
              name="add"
              size={30}
              onPress={() => navigation.navigate('AddFixtures')}
            />
            <Icon
              name="settings"
              size={30}
              onPress={() => navigation.navigate('Settings')}
            />
          </MenuRow>
          <Buttons>
            <Button onPress={showModal}>View Fixtures</Button>
          </Buttons>
          <TextRow>
            <TinyText>Fixtures</TinyText>
            <TinyText>Chat</TinyText>
            <TinyText>Profile</TinyText>
            <TinyText>Settings</TinyText>
          </TextRow>
        </AddFixtures>
      </Container>
      <Provider>
        <Portal>
          <Modal
            visible={modalVisible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <Text>Hello {fixtureDate}</Text>
            <Button mode="contained" onPress={hideModal}>
              Close
            </Button>
          </Modal>
        </Portal>
      </Provider>
    </>
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

const CalendarBox = styled.View`
  flex: 0.8;
  width: 100%;
  background-color: #f5fcff;
  opacity: 0.8;
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
const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-around;  
  align-items: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
