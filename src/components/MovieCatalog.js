import { useEffect, useState } from "react"
import styled from "styled-components"
import Movies from "./Movies"
import axios from 'axios'
import {Link} from "react-router-dom"


export default function MovieCatalog() {
const [movies, setMovies] = useState(undefined)


useEffect(() => {
    const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
    promise.then(ans => setMovies(ans.data))
    promise.catch(err => console.log(err.response.data))
}, [])

if (!movies){
    return <TitleContainer>Carregando...</TitleContainer>
} 

    return (
        <> <TitleContainer>
            <h2>Selecione o filme</h2>
        </TitleContainer>
        <MovieOptions>
            {movies.map(movie => (
                <Link key={movie.id} to={`/sessoes/${movie.id}`} data-test="movie">
                <Movies  posterURL={movie.posterURL}/>
                              
                </Link>
            ))}
        </MovieOptions>
         
           
        </>

    )
}

const TitleContainer = styled.div`
@media (max-width: 768px){
height: 110px;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 67px;
h2{
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    color: #293845;
}
}
`

const MovieOptions = styled.div `
@media (max-width: 768px){
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
}




`
