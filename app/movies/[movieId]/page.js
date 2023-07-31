'use client'

import React from 'react';
import Comments from "../../(components)/Comments"
import MovieDetail from "@/app/(components)/MovieDetail";

const MovieItems = () => {
    return (
        <div className="bg-black w-full h-[1000px]">
            <MovieDetail/>
            <Comments/>
        </div>
    );
};

export default MovieItems;