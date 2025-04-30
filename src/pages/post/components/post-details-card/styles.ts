import styled from "styled-components";

export const PostDetailsContainer = styled.div`
   display: grid;
   border-radius: 0.625rem;

   width: 54rem;
   
   margin: -5.5rem auto 0;
   padding: 2rem 2rem 2rem 2.5rem;

   box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
   background: ${props => props.theme["base-profile"]};

   h1 {
      font-size: 1.5rem;
      margin: 1.25rem 0 0.5rem;
      color: ${props => props.theme["base-title"]};
   }

   section {
      display: flex;
      gap: 1.5rem;
   }

   @media (max-width: 768px) {
      width: 100%;

      section {
         display: none;
      }
   }
`

export const PostDetailsHeader = styled.div`
   display: flex;
   justify-content: space-between;

   a {
      display: flex;

      gap: 0.5rem;
      align-items: center;
      
      font-weight: bold;
      line-height: 160%;
      font-size: 0.75rem;
      
      cursor: pointer;
      text-decoration: none;
      text-transform: uppercase;

      border: 1px solid transparent;
      color: ${props => props.theme.blue};
      
      &:hover {
         border-bottom: 1px solid ${props => props.theme.blue};
      }

      &:focus {
         border-radius: 0.375rem;
         outline: 2px solid ${props => props.theme["base-label"]};
      }
   }
`

export const GitUserInfo = styled.div`
   display: flex;

   gap: 0.5rem;
   align-items: center;

   color: ${props => props.theme["base-span"]};

   svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${props => props.theme["base-label"]};
   }
`