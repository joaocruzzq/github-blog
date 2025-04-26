import { GitUserInfo, ProfileContainer, ProfileContenet, ProfileHeader } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons"

import { api } from "../../../../lib/axios";
import { useEffect, useState } from "react";

interface UserProps {
   bio: string
   name: string
   login: string
   company: string
   html_url: string
   followers: number
   avatar_url: string
}

export function ProfileCard() {
   const [userInfo, setUserInfo] = useState<UserProps>()

   async function fetchUser() {
      const response = await api.get("/users/joaocruzzq")
      setUserInfo(response.data)
   }

   useEffect(() => {
      fetchUser()
   }, [])

   return (
      <ProfileContainer>
         <img src={userInfo?.avatar_url} alt="" />

         <ProfileContenet>
            <ProfileHeader>
               <h1>
                  {userInfo?.name}
               </h1>

               <a href={userInfo?.html_url} target="_blank">
                  github
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
               </a>
            </ProfileHeader>

            <span>
               {userInfo?.bio}
            </span>

            <section>
               <GitUserInfo>
                  <FontAwesomeIcon icon={faGithub} />
                  {userInfo?.login}
               </GitUserInfo>

               <GitUserInfo>
                  <FontAwesomeIcon icon={faBuilding} />
                  {userInfo?.company ? userInfo.company : "Freelancer"}
               </GitUserInfo>

               <GitUserInfo>
                  <FontAwesomeIcon icon={faUserGroup} />
                  {userInfo?.followers} seguidores
               </GitUserInfo>
            </section>
         </ProfileContenet>
      </ProfileContainer>
   )
}