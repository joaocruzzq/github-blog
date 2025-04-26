import { HomeContainer, HomeMainContent, PostsContainer } from "./styles";

import { PostCard } from "./components/post-card";
import { SearchForm } from "./components/search-form";
import { ProfileCard } from "./components/profile-card";

import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

interface IssuesProps {
   total_count: number
}

export function Home() {
   const [issue, setIssue] = useState<IssuesProps>()

   async function fetchIssues() {
      const response = await api.get("/search/issues?q=repo:joaocruzzq/github-blog")
      setIssue(response.data)
   }

   useEffect(() => {
      fetchIssues()
   }, [])

   return (
      <HomeContainer>
         <ProfileCard />

         <HomeMainContent>
            <header>
               <h1>Publicações</h1>

               <span>
                  {issue?.total_count}
                  {" "} publicações
               </span>
            </header>

            <SearchForm />

            <PostsContainer>
               <PostCard />
            </PostsContainer>
         </HomeMainContent>
      </HomeContainer>
   )
}