import { GitUserInfo, PostDetailsContainer, PostDetailsHeader } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay, faChevronLeft, faComment, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function PostDetailsCard() {
   return (
      <PostDetailsContainer>
         <PostDetailsHeader>
            <a href="" target="_blank">
               <FontAwesomeIcon icon={faChevronLeft} />
               voltar
            </a>

            <a href="" target="_blank">
               ver no github
               <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
         </PostDetailsHeader>

         <h1>
            JavaScript data types and data structures
         </h1>

         <section>
            <GitUserInfo>
               <FontAwesomeIcon icon={faGithub} />
               github
            </GitUserInfo>

            <GitUserInfo>
               <FontAwesomeIcon icon={faCalendarDay} />
               Há 1 dia
            </GitUserInfo>

            <GitUserInfo>
               <FontAwesomeIcon icon={faComment} />
               0 comentários
            </GitUserInfo>
         </section>
      </PostDetailsContainer>
   )
}