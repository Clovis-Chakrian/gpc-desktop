import styled from "styled-components";

export const SchedulesContainer = styled.div`
  width: 94vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 150px;
  background-color: ${props => props.theme.colors.background};
`;

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
`;

export const ScheduleButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 35px;
`;

export const ScheduleButton = styled.button`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.secondary};
  border: none;
  background-color: ${props => props.theme.colors.secondary};
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  transition: 200ms;
  :active {
    box-shadow: none;
  }
`;