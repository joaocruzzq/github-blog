import styled from "styled-components";

export const SearchContainer = styled.div`
   border-radius: 0.375rem;
   background: ${props => props.theme["base-input"]};

   input {
      width: 100%;

      padding: 0.75rem 1rem;

      border-radius: inherit;
      border: 1px solid ${props => props.theme["base-border"]};

      background: transparent;
      color: ${props => props.theme["base-text"]};

      &::placeholder {
         color: ${props => props.theme["base-label"]};
      }

      &:focus {
         outline: 1px solid ${props => props.theme.blue};
      }
   }
`