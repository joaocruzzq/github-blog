import { PostDetailsCard } from "./components/post-card";
import { MarkdownContainer, PostMainContent, PostPageContainer } from "./styles";

import Markdown from "react-markdown";

export function Post() {
   return (
      <PostPageContainer>
         <PostDetailsCard />

         <PostMainContent>
            <Markdown>
               Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
            
               Dynamic typing
               JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
            </Markdown>

            <MarkdownContainer>
               <Markdown>
                  # Hi, *Pluto*!
               </Markdown>
            </MarkdownContainer>
         </PostMainContent>
      </PostPageContainer>
   )
}