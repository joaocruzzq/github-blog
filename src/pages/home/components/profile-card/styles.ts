import styled from "styled-components";

export const ProfileContainer = styled.div`
   display: grid;
   grid-template-columns: auto 1fr;

   gap: 2rem;
   border-radius: 0.625rem;
   
   margin: -5.5rem auto 0;
   padding: 2rem 2rem 2rem 2.5rem;

   box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
   background: ${props => props.theme["base-profile"]};

   img {
      border-radius: 0.5rem;
      height: 9.25rem;
   }
`

export const ProfileContenet = styled.div`
   display: grid;
   grid-template-rows: auto 1fr auto;

   span {
      margin-top: 0.5rem;
      margin-bottom: 1rem;

      display: -webkit-box;

      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      overflow: hidden;
      
      text-align: justify;
      text-overflow: ellipsis;
   }

   section {
      display: flex;
      gap: 1.5rem;
   }
`

export const ProfileHeader = styled.div`
   display: flex;
   justify-content: space-between;

   h1 {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${props => props.theme["base-title"]};
   }

   a {
      display: flex;

      gap: 0.5rem;
      align-items: center;

      font-weight: bold;
      line-height: 160%;
      font-size: 0.75rem;

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

   color: ${props => props.theme["base-subtite"]};

   svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${props => props.theme["base-label"]};
   }
`