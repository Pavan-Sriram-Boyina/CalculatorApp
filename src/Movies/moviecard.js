import React, { useState } from "react";

function MovieCard(props){
    const {movie} = props
    return (
        <div>
            <p>{movie.Title}</p>
        </div>
    )
}

export default MovieCard