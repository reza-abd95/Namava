'use client'



import SearchArea from "../(components)/SearchArea";
import SearchResult from "../(components)/search/SearchResult";
import SearchResultContainer from "../(components)/search/SearchResultContainer";
import { useState,useEffect } from "react";
export default function Search() {
    const [searchTerm,setSearchTerm] = useState('')
    const [movies,setMovies] = useState([])
    useEffect(() => {
        fetch('https://api.jsonbin.io/v3/b/64cb6bcfb89b1e2299ca80fe')
        .then(data => data.json())
        .then(data => setMovies(data.record))
        .catch(e => console.log(e))

    },[])
    const result = []
    for (const movie of movies) {
        if (movie.title.includes(searchTerm) || (movie.titleEn.toLowerCase().includes(searchTerm.toLowerCase()))) {
            result.push(movie)
        }
    }
    return (
        <div className="min-h-[710px] pb-20">
            <div className=' pt-20'></div>

            <SearchArea searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <SearchResultContainer searchTerm={searchTerm} movies={result}/>
          

               
                
            


        </div>
    )
}
