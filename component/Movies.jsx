import React from "react";

const movies = [
    {id : 110, title : "Puspha2", director : "Sukumar", year : "2024"},
    {id : 110, title : "Bhool Bhulaiyaa 3", director : "Anees Bazmee", year : "2024"},
    {id : 110, title : "Stree 2", director : "Amar Kaushik", year : "2024"}

];

function Movies(){
    return (
        <>
        {movies.map((e) => (
            <div key={e.id}>
                <h2>Movie Title : {e.title}</h2>
                <p>Movie Director : {e.director}</p>
                <p>Release : {e.year}</p>
                <hr />
            </div>
        ))}
        </>
    )
}

export default Movies;