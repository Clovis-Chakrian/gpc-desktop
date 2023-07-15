import styled from "styled-components";

export const AgendaContainer = styled.div`
  width: 94vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.colors.background};
`;

export const AgendaList = styled.div`
  width: 30vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  h2 {
    color: #048F36;
    text-decoration-line: underline;
    transition: 200ms;

    ::selection {
      display: none;
    }

    :hover {
      cursor: pointer;
    }

    :active {
      opacity: 0.7;
    }
  }
`

export const Select = styled.select`
  width: 25vw;
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

export const SelectDate = styled.input`
  width: 25vw;
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

export const AgendaCard = styled.div`
  width: 25vw;
  background-color: ${props => props.theme.colors.secondary};
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  padding: 8px;
  border-radius: 8px;
`
export const AgendaCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 5px;
`;

export const AgendaCardButtons = styled.div`
  width: 23vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const AgendaCardButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background-color: ${props => props.theme.colors.secondary};
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  transition: 200ms;
  :active {
    box-shadow: none;
  }
`

export const AgendaDetails = styled.div`
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;

  span {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

export const AgendaTitle = styled.input`
  width: 25vw;
  height: 56px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 8px;
  border: none;
  font-size: 14px;
  padding: 4px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  :focus {
    outline: none;
    border-bottom: 1px solid ${props => props.theme.colors.tertiary};
  }
`;

export const AgendaDescription = styled.textarea`
  width: 25vw;
  height: 300px;
  background-color: ${props => props.theme.colors.secondary};
  resize: none;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  padding: 4px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  :focus {
    outline: none;
    border-bottom: 1px solid ${props => props.theme.colors.tertiary};
  }
`;

export const SaveButton = styled.button`
  width: 25vw;
  height: 56px;
  background-color: ${props => props.theme.colors.tertiary};
  border: none;
  border-radius: 8px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
  :active {
    box-shadow: none;
  }
`