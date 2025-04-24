import styled from "styled-components";

export const PostCardContainer = styled.button`
   display: grid;
   padding: 2rem;
   row-gap: 1.25rem;

   border: none;
   border-radius: 0.625rem;
   
   background: ${props => props.theme["base-post"]};

   &:hover {
      cursor: pointer;
      outline: 2px solid ${props => props.theme["base-label"]};
   }

   &:focus {
      outline: 2px solid ${props => props.theme["base-label"]};
   }

   header {
      margin-bottom: 0;
      display: grid;
      column-gap: 1rem;
      grid-template-columns: 1fr auto;
   }

   header > h1 {
      text-align: left;
      font-size: 1.25rem;
      color: ${props => props.theme["base-title"]};
   }

   header > span {
      font-size: 0.875rem;
      color: ${props => props.theme["base-span"]};
   }

   p {
      font-size: 1rem;
      font-weight: 300;

      text-align: justify;
      letter-spacing: 0.5px;

      color: ${props => props.theme["base-text"]};

      display: -webkit-box;

      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;

      overflow: hidden;
      text-overflow: ellipsis;
   }
`