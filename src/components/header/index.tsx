import { HeaderContainer } from "./styles";

import githubLogoIMG from "../../assets/main-logo.svg"
import headerEffectLeftIMG from "../../assets/header-effect-left.svg"
import headerEffectRightIMG from "../../assets/header-effect-right.svg"

export function Header() {
   return (
      <HeaderContainer>
         <img src={githubLogoIMG} alt="" className="mainLogo"/>

         <div>
            <img src={headerEffectLeftIMG} alt="" />
            <img src={headerEffectRightIMG} alt="" />
         </div>
      </HeaderContainer>
   )
}