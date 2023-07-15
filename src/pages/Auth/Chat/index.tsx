import { useContext } from "react";
import {
  ContactsListContainer,
  Container,
  ChatContainer,
  ChatContainerHeader,
  ChatContainerMessages,
  ChatContainerFooter,
  SendMessageButton,
  MessageInput,
  ChatMessage,
  ContactsSearch,
  ClassFilter,
  SearchContainer,
  ContactCard
} from "./styles";

import { IoSendOutline } from 'react-icons/io5';
import { ThemeContext } from "styled-components";

function Chat() {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <ContactsListContainer>
        <SearchContainer>
          <ContactsSearch type="text" placeholder="Digite o nome de um pai aqui..."/>
          <ClassFilter name="" id="">
            <option value="1A-DS">1A-DS</option>
            <option value="1B-DS">1B-DS</option>
            <option value="1A-MULT">1A-MULT</option>
            <option value="1B-MULT">1B-MULT</option>
            <option value="2A-DS">2A-DS</option>
            <option value="2B-DS">2B-DS</option>
            <option value="2A-MULT">2A-MULT</option>
            <option value="2B-MULT">2B-MULT</option>
            <option value="3A-DS">3A-DS</option>
            <option value="3B-DS">3B-DS</option>
            <option value="3A-MULT">3A-MULT</option>
            <option value="3B-MULT">3B-MULT</option>
          </ClassFilter>
        </SearchContainer>

        <div>
          <ContactCard>
            <p>Nome do pai</p>
            <p>Nome do filho</p>
            <p>turma</p>
          </ContactCard>
        </div>
      </ContactsListContainer>

      <ChatContainer>
        <ChatContainerHeader>
          <h2>Hello</h2>
          <p>Turmas</p>
        </ChatContainerHeader>

        <ChatContainerMessages>
          <ChatMessage align="flex-start">
            <p>Messagem pai</p>
          </ChatMessage>

          <ChatMessage align="flex-end">
            <p>Messagem gestor</p>
          </ChatMessage>

          <ChatMessage align="flex-start">
            <p>Messagem pai</p>
          </ChatMessage>

          <ChatMessage align="flex-end">
            <p>Messagem gestor</p>
          </ChatMessage>

          <ChatMessage align="flex-start">
            <p>Messagem pai</p>
          </ChatMessage>

          <ChatMessage align="flex-end">
            <p>Messagem gestor</p>
          </ChatMessage>

          <ChatMessage align="flex-start">
            <p>Messagem pai</p>
          </ChatMessage>

          <ChatMessage align="flex-end">
            <p>Messagem gestor</p>
          </ChatMessage>

          <ChatMessage align="flex-start">
            <p>Messagem pai</p>
          </ChatMessage>

          <ChatMessage align="flex-end">
            <p>Messagem gestor</p>
          </ChatMessage>

          <ChatMessage align="flex-start">
            <p>Messagem pai</p>
          </ChatMessage>

          <ChatMessage align="flex-end">
            <p>Messagem gestor</p>
          </ChatMessage>

          <ChatMessage align="flex-start">
            <p>Messagem pai</p>
          </ChatMessage>

          <ChatMessage align="flex-end">
            <p>Messagem gestor</p>
          </ChatMessage>

          <ChatMessage align="flex-start">
            <p>Messagem pai</p>
          </ChatMessage>

          <ChatMessage align="flex-end">
            <p>Messagem gestor</p>
          </ChatMessage>

          <ChatMessage align="flex-start">
            <p>Messagem pai</p>
          </ChatMessage>

          <ChatMessage align="flex-end">
            <p>Messagem gestor</p>
          </ChatMessage>

          <ChatMessage align="flex-start">
            <p>Messagem pai</p>
          </ChatMessage>

          <ChatMessage align="flex-end">
            <p>Messagem gestor</p>
          </ChatMessage>
        </ChatContainerMessages>

        <ChatContainerFooter>
          <MessageInput type="text" placeholder="Digite aqui sua mensagem..." />
          <SendMessageButton>
            <IoSendOutline color={theme.colors.primary} size={32} />
          </SendMessageButton>
        </ChatContainerFooter>
      </ChatContainer>
    </Container>
  );
};

export default Chat;