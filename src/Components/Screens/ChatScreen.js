/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {COLORS} from '../Constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextInput} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {DataStore} from 'aws-amplify';
import {Messages} from '../../models';
// import {Messages} from '../../models/schema';

const ChatScreen = () => {
  const [userMessage, setUserMessage] = useState('');
  const [newMessages, setNewMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let userUuid = useSelector(
    state => state.userProfile.customerInfo.attributes.sub,
  );
  console.log('userUuid', userUuid);

  setTimeout(() => {
    DataStore.query(Messages, {
      filter: {
        id: userUuid,
        message: {
          contains: '',
        },
      },
    }).then(data => {
      console.log('data in timeout', data);
      setNewMessages(data);
      console.log('newMessages', newMessages);
      setIsLoading(false);
    });
  }, 1000);
  console.log('userInfoHere', newMessages);
  const handleSend = async () => {
    // send new message to graoph ql  and update the state
    const newMessage = {
      userMessages: userMessage,
      id: userUuid,
      // createdAt: new Date().toISOString(),
    };
    await DataStore.save(new Messages(newMessage));
    console.log('messsages in handleSend', newMessage);
    setUserMessage('');
  };

  return (
    <Container>
      <Header>
        <LargeHeader>Chat</LargeHeader>
      </Header>
      <MessagesView>
        <MessageView>
          {/* // show all user messages */}
          {newMessages.map(message => (
            <Message key={message.id}>
              <MessageText>{message.message}</MessageText>
            </Message>
          ))}
        </MessageView>
        <MessageView>
          {/* // show all opponent messages */}
          {newMessages}
        </MessageView>
      </MessagesView>

      <InputBox>
        <Input
          placeholder="Enter the location"
          value={userMessage}
          autoCapitalize="none"
          onChangeText={text => setUserMessage(text)}
          onValueChange={models => setUserMessage(userMessage)}
        />
        <Icon
          name="chat"
          size={30}
          color={COLORS.CRIC_GREEN}
          onPress={handleSend}
        />
      </InputBox>
    </Container>
  );
};

export default ChatScreen;

const Container = styled.View`
  flex: 1;
  background-color: #f5fcff;
`;
const Header = styled.View`
  flex: 0.6;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;
const LargeHeader = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;
const InputBox = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: #f5fcff;
  margin-top: 20px;§
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;
const Input = styled.TextInput`
  border-color: #000;
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  placeholdertextcolor: ${COLORS.CRIC_BLUE};
  margin-top: 10px;
  width: 95%;
`;
const PlaceholderText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: ${COLORS.CRIC_BLUE};
`;
const Message = styled.View`
  flex-direction: row;
  width: 75%;
  background-color: ${COLORS.GREY};
  border-radius: 25px;
`;
const MessageView = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 25px;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;
const MessageText = styled.Text`
  font-size: 10px;
  color: ${COLORS.CRIC_BLUE};
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 25px;
`;

const MessageTextOppo = styled.Text`
  font-size: 10px;
  color: ${COLORS.CRIC_GREEN};
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 25px;
`;

const OppoMessages = styled.Text`
  font-size: 15px;
  font-weight: bold;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  color: ${COLORS.GRAY};
`;
const MessagesView = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  background-color: #f5fcff;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;
