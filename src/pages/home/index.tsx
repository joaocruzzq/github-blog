import { HomeContainer, HomeMainContent, PostsContainer } from "./styles";

import { PostCard } from "./components/post-card";
import { SearchForm } from "./components/search-form";
import { ProfileCard } from "./components/profile-card";

export function Home() {
   return (
      <HomeContainer>
         <ProfileCard />

         <HomeMainContent>
            <header>
               <h1>Publicações</h1>

               <span>0 publicações</span>
            </header>

            <SearchForm />

            <PostsContainer>
               <PostCard />
               <PostCard />
               <PostCard />
               <PostCard />
            </PostsContainer>
         </HomeMainContent>
      </HomeContainer>
   )
}