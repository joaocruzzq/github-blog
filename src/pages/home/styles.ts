import styled from "styled-components";

export const HomeContainer = styled.div`
   margin: 0 auto;
   max-width: 54rem;
`

export const HomeMainContent = styled.div`
   padding: 4.5rem 0;

   header {
      display: flex;
      margin-bottom: 0.75rem;

      align-items: baseline;
      justify-content: space-between;
   }

   header > h1 {
      font-size: 1.125rem;
      color: ${props => props.theme["base-subtite"]};
   }

   header > span {
      font-size: 0.875rem;
      color: ${props => props.theme["base-span"]};
   }
`

export const PostsContainer = styled.div`
   margin-top: 3rem;
   gap: 2rem;

   display: grid;
   grid-template-columns: 1fr 1fr;
`