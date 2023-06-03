import styled from "styled-components";

interface IChatMessage {
  align: "flex-start" | "flex-end"
};

export const Container = styled.div`
  width: 94vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.colors.background};
`;

export const ContactsListContainer = styled.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;
  margin-bottom: 50px;
`

export const ContactsSearch = styled.input`
  width: 400px;
  height: 56px;
  border-radius: 8px;
  border: none;
  background-color: ${props => props.theme.colors.secondary};
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  padding: 4px;
  :focus {
    outline: none;
    border-bottom: 1px solid ${props => props.theme.colors.tertiary};
  };
`

export const ClassFilter = styled.select`
  width: 120px;
  height: 56px;
  border-radius: 8px;
  border: none;
  background-color: ${props => props.theme.colors.secondary};
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  padding: 4px;
  :focus {
    outline: none;
    border-bottom: 1px solid ${props => props.theme.colors.tertiary};
  };
`

export const ContactCard = styled.div`
  width: 520px;
  background-color: ${props => props.theme.colors.secondary};
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 5px;
  transition: 200ms;
  :hover {
    border-bottom: 1px solid ${props => props.theme.colors.tertiary};
  }
  :active {
    box-shadow: none;
  }
`

export const ChatContainer = styled.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

export const ChatContainerHeader = styled.header`
  width: 50vw;
  /* height: 65px; */
  height: 8vh;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ChatContainerMessages = styled.div`
  width: 50vw;
  max-height: 85vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  flex: 11;
`

export const ChatMessage = styled.div<IChatMessage>`
  width: fit-content;
  max-width: 350px;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
  border-bottom-left-radius: 0px;
  height: fit-content;
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.secondary};
  align-self: ${props => props.align};
`

export const ChatContainerFooter = styled.footer`
  display: flex;
  height: 8vh;
  justify-content: space-evenly;
`

export const MessageInput = styled.input`
  width: 43vw;
  height: 65px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  padding: 4px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  :focus {
    outline: none;
    border-bottom: 1px solid ${props => props.theme.colors.tertiary};
  }
`

export const SendMessageButton = styled.button`
  width: 65px;
  height: 65px;
  border-radius: 50px;
  background-color: ${props => props.theme.colors.secondary};
  border: none;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  :active {
    box-shadow: none;
  }
`;