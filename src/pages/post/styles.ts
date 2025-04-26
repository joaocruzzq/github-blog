import styled from "styled-components";

export const PostPageContainer = styled.div`
   margin: 0 auto;
   max-width: 54rem;
`

export const PostMainContent = styled.div`
   display: grid;
   row-gap: 1.5rem;
   padding: 2.5rem 2rem 4rem;
`

export const MarkdownContainer = styled.div`
   padding: 1rem;
   border-radius: 2px;
   background: ${props => props.theme["base-post"]};
`