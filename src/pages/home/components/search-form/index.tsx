import { SearchContainer } from "./styles";

interface SearchFormProps {
   onSearch: (query: string) => void
}
export function SearchForm({ onSearch }: SearchFormProps) {
   function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
      const query = e.target.value
      onSearch(query)
   }

   return (
      <SearchContainer>
         <input type="text" placeholder="Buscar conteúdo" onChange={handleSearch} />
      </SearchContainer>
   )
}