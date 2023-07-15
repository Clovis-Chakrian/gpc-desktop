import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background-color: ${props => props.theme.colors.primary};
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
`;

export const Input = styled.input`
  width: 470px;
  height: 65px;
  border-radius: 8px;
  border: none;
  background-color: ${props => props.theme.colors.secondary};
  padding: 4px;
  transition: 200ms;

  :focus {
    outline: none;
    border-bottom: 1px solid ${props => props.theme.colors.tertiary};
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  }
`;

export const RememberMeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const RememberCheckInput = styled.input`
  margin-top: 5px;
  width: 20px;
  height: 20px;
`;

export const LoginButton = styled.button`
  width: 470px;
  height: 65px;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.other};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${props => props.theme.colors.secondary};
  font-weight: bold;
  transition: 200ms;

  :hover {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  }

  :active {
    box-shadow: none;
  }
`