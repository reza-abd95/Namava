
import DoSearchMsg from "../../(components)/DoSearchMsg";
import NotFoundSearch from "../../(components)/NotFoundSearch";
import SearchResult from "./SearchResult";
export default function SearchResultContainer({searchTerm,movies}) {
    

    if (!searchTerm) {
        return (
            <div className={"block"}>
                <DoSearchMsg/>
            </div>
        )
    } else if (movies.length === 0) {
        return (
            <div className={"block"}>
                <NotFoundSearch/>
            </div>
        )
    
    } else {
         return (
            <SearchResult movies={movies}/>
            
             
         )
    }

}