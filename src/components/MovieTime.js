import styled from "styled-components";
import MovieHighlight from "./MovieHighlight";
import MovieDays from "./MovieDays";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios"


export default function MovieTime() {
    const {idFilme} = useParams()
    const [movieInfo, setMovieInfo] = useState(undefined)

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
        promise.then(ans => setMovieInfo(ans.data))
        promise.catch(err => console.log(err.response.data))
    }, [])

    if (!movieInfo) {
        return <TitleContainer>Carregando...</TitleContainer>
    }
    console.log(movieInfo)
    return (
        <> <TitleContainer>
            <h2>Selecione o horário</h2>
        </TitleContainer>
        {movieInfo.days.map( m =>
                (
                   <MovieDays key={m.id} movie={m}/>
                    
                )      
                )}
            
           
            <MovieHighlight movieCover={movieInfo.posterURL} movieTitle={movieInfo.title}/>
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