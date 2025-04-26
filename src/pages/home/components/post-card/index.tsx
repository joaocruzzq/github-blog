import { PostCardContainer } from "./styles";

import { ptBR } from "date-fns/locale";
import { formatDistanceToNow } from "date-fns";

import { useNavigate } from "react-router-dom";

interface PostCardType {
   body: string
   title: string
   number: number
   created_at: string
}

interface PostCardProps {
   data: PostCardType
}

export function PostCard({ data }: PostCardProps) {
   const formattedDate = formatDistanceToNow(new Date(data.created_at) , {
      locale: ptBR,
      addSuffix: true
   })

   const navigate = useNavigate()

   function handleOpenPost() {
      navigate(`/post/${data.number}`)
   }

   return (
      <PostCardContainer onClick={handleOpenPost}>
         <header>
            <h1>
               {data.title}
            </h1>

            <span>
               {formattedDate}
            </span>
         </header>

         <p>
            {data.body}
         </p>
      </PostCardContainer>
   )
}