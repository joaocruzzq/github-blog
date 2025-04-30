import styled from "styled-components";

export const PostPageContainer = styled.div`
   margin: 0 auto;
   max-width: 54rem;

   @media (max-width: 768px) {
      margin: 0 1.75rem;
   }
`

export const PostMainContent = styled.div`
   display: grid;
   row-gap: 1.5rem;
   padding: 2.5rem 2rem 4rem;

   @media (max-width: 768px) {
      grid-template-columns: 100%;
   }
`