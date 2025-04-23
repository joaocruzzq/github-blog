import { HomeContainer, HomeMainContent } from "./styles";

import { SearchForm } from "./components/search-form";
import { ProfileCard } from "./components/profile-card";

export function Home() {
   return (
      <HomeContainer>
         <ProfileCard />

         <HomeMainContent>
            <SearchForm />
         </HomeMainContent>
      </HomeContainer>
   )
}