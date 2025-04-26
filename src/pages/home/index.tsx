import { HomeContainer, HomeMainContent, PostsContainer } from "./styles";

import { PostCard } from "./components/post-card";
import { SearchForm } from "./components/search-form";
import { ProfileCard } from "./components/profile-card";

import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

interface IssueType {
   id: number
   body: string
   title: string
   number: number
   created_at: string
   total_count: number
}

export function Home() {
   const [issueList, setIssueList] = useState<IssueType[]>([])
   const [issueCounter, setIssueCounter] = useState(0)

   async function fetchIssues(query?: string) {
      const response = await api.get(`/search/issues?q=${query}repo:joaocruzzq/github-blog`)

      setIssueList(response.data.items)
      setIssueCounter(response.data.total_count)
   }

   useEffect(() => {
      fetchIssues()
   }, [])

   console.log(issueList)

   return (
      <HomeContainer>
         <ProfileCard />

         <HomeMainContent>
            <header>
               <h1>Publicações</h1>

               <span>
                  {issueCounter}
                  {" "} publicações
               </span>
            </header>

            <SearchForm
               onSearch={fetchIssues}
            />

            <PostsContainer>
               {
                  issueList.map((issue) => (
                     <PostCard
                        key={issue.id}
                        data={issue}
                     />
                  ))
               }
            </PostsContainer>
         </HomeMainContent>
      </HomeContainer>
   )
}