import { GitUserInfo, PostDetailsContainer, PostDetailsHeader } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay, faChevronLeft, faComment, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

export interface PostCardType {
   user: string
   title: string
   comments: number
   html_url: string
   created_at: string
}

interface PostCardProps {
   data: PostCardType  | undefined
}

export function PostDetailsCard({ data } : PostCardProps) {
   const navigate = useNavigate()

   return (
      <PostDetailsContainer>
         <PostDetailsHeader>
            <a onClick={() => navigate(-1)} target="_blank">
               <FontAwesomeIcon icon={faChevronLeft} />
               <p>voltar</p>
            </a>

            <a href={data?.html_url} target="_blank">
               <p>ver no github</p>
               <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
         </PostDetailsHeader>

         <h1>
            {data?.title}
         </h1>

         <section>
            <GitUserInfo>
               <FontAwesomeIcon icon={faGithub} />
               {data?.user}
            </GitUserInfo>

            <GitUserInfo>
               <FontAwesomeIcon icon={faCalendarDay} />
               {data?.created_at}
            </GitUserInfo>

            <GitUserInfo>
               <FontAwesomeIcon icon={faComment} />
               {data?.comments} comentários
            </GitUserInfo>
         </section>
      </PostDetailsContainer>
   )
}