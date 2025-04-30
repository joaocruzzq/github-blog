import styled from "styled-components";

export const HeaderContainer = styled.div`
   z-index: -1;
   
   min-height: 18.5rem;
   position: relative;
   
   filter: brightness(1.25);
   background: ${props => props.theme["base-profile"]};

   .mainLogo {
      position: absolute;

      top: 34%;
      left: 50%;
      transform: translate(-50%, -34%);
   }

   div {
      display: flex;
      justify-content: space-between;
   }

   @media (max-width: 768px) {
      div {
         overflow: hidden;
         justify-content: center;
      }
   }
`