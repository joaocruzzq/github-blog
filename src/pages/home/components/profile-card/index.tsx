import { GitUserInfo, ProfileContainer, ProfileContenet, ProfileHeader } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons"

export function ProfileCard() {
   return (
      <ProfileContainer>
         <img src="https://github.com/joaocruzzq.png" alt="" />

         <ProfileContenet>
            <ProfileHeader>
               <h1>Nome</h1>

               <a href="" target="_blank">
                  github

                  <FontAwesomeIcon icon={faUpRightFromSquare} />
               </a>
            </ProfileHeader>

            <span>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eligendi hic repellat amet consequatur assumenda nostrum illum adipisci! Dolores velit beatae illo vitae, amet sint repellat earum dolor animi consectetur.
            </span>

            <section>
               <GitUserInfo>
                  <FontAwesomeIcon icon={faGithub} />
                  github
               </GitUserInfo>

               <GitUserInfo>
                  <FontAwesomeIcon icon={faBuilding} />
                  trabalho
               </GitUserInfo>

               <GitUserInfo>
                  <FontAwesomeIcon icon={faUserGroup} />
                  0 seguidores
               </GitUserInfo>
            </section>
         </ProfileContenet>
      </ProfileContainer>
   )
}