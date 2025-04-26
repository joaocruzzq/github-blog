import Markdown from "react-markdown";

import { PostMainContent, PostPageContainer } from "./styles";

import { PostCardType, PostDetailsCard } from "./components/post-details-card";

import { api } from "../../lib/axios";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ptBR } from "date-fns/locale"
import { formatDistanceToNow } from "date-fns"

export interface PostProps {
   body: string
   cardData: PostCardType
}

export function Post() {
   const { id } = useParams()

   const [issueData, setIssueData] = useState<PostProps>()

   async function fetchIssueData() {
      const response = await api.get(`/repos/joaocruzzq/github-blog/issues/${id}`)

      const { html_url, title, comments, created_at, user, body } = response.data

      const postData = {
         body: body,

         cardData: {
            body,
            title,
            html_url,
            comments,
            user: user.login,
            created_at: formatDistanceToNow(new Date(created_at), {
               locale: ptBR,
               addSuffix: true
            }),
         }
      }

      setIssueData(postData)
   }

   useEffect(() => {
      fetchIssueData()
   }, [])

   console.log(issueData)

   return (
      <PostPageContainer>
         <PostDetailsCard
            key={id}
            data={issueData?.cardData}
         />

         <PostMainContent>
            <Markdown>
               {issueData?.body}
            </Markdown>
         </PostMainContent>
      </PostPageContainer>
   )
}