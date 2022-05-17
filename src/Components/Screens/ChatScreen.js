import React from 'react';
import styled from 'styled-components';

const ChatScreen = () => {
  return (
    <Container>
      <Header>
        <LargeHeader>Chat</LargeHeader>
      </Header>
    </Container>
  );
};

export default ChatScreen;

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
