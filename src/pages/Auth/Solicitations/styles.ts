import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  gap: 50px;
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

export const SolicitationsContainer = styled.div`
  width: 90vw;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;
  padding: 10px;
` 