/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';
// import react native paper
import {Modal, Portal, Text, Button, Provider} from 'react-native-paper';
import {FlatList} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  // modal visible
  const [modalVisible, setModalVisible] = React.useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  // declare a gllobal variable to store the selected date
  const [selectedDate, setSelectedDate] = useState('');
  // set the selected date
  const onDayPress = day => {
    setSelectedDate(day.day);
    console.log('selected day', day);
    showModal();
  };
  console.log('selected date', selectedDate);
  const containerStyle = {
    backgroundColor: '#f5fcff',
    padding: 20,
    height: '90%',
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
    console.log('customerInfo', customerInfo);
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
          <Calendar current={today} onDayPress={onDayPress} />
        </CalendarBox>
        {/* // MODAL HERE */}
        <Provider>
          <Portal>
            <Modal
              visible={modalVisible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}>
              <HeaderModal>
                <LargeHeader>{selectedDate}</LargeHeader>
              </HeaderModal>
              <ListBox>
                <FlatList
                  data={[
                    {
                      key: '1',
                      clubName: 'Putney',
                      team: 'Sunday 1',
                      location: 'Home',
                    },
                  ]}
                  renderItem={({item}) => (
                    <ListItem>
                      <ListItemText>
                        <Text>{item.clubName}</Text>

                        <Text>{item.team}</Text>

                        <Text>{item.location}</Text>
                      </ListItemText>
                    </ListItem>
                  )}
                  keyExtractor={item => item.key}
                />
              </ListBox>
              <Button
                style={{width: '85%', alignSelf: 'center'}}
                mode="contained"
                onPress={hideModal}>
                Close
              </Button>
            </Modal>
          </Portal>
        </Provider>
        {/* // MODAL HERE */}
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
          <TextRow>
            <TinyText>Fixtures</TinyText>
            <TinyText>Chat</TinyText>
            <TinyText>Profile</TinyText>
            <TinyText>Settings</TinyText>
          </TextRow>
        </AddFixtures>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.View`
  flex: 1;
  background-color: #f5fcff;
`;

const HeaderModal = styled.View`
  justify-content: flex-start;
  height: 25%;
  background-color: red;
  align-items: flex-start;
  background-color: #f5fcff;
`;

const Header = styled.View`
  flex: 1.2;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;
const LargeHeader = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

const CalendarBox = styled.View`
  flex: 1.8;
  width: 100%;
  background-color: #f5fcff;
  opacity: 0.8;
`;

const AddFixtures = styled.View`
  flex: 1.2;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
  margin-top: 20px;
`;
const MenuRow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  margin-top: 20px;
`;
const TextRow = styled.View`
  flex: 1;
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
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ButtonBox = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ListBox = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const ListItem = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const ListItemText = styled.View`
  flex: 1;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ListHeader = styled.Text`
  font-size: 10px;
  font-weight: bold;
`;
