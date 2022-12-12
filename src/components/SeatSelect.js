import styled from "styled-components";
import MovieHighlight from "./MovieHighlight";
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios"
import OptionsDescription from "./OptionsDescription";

export default function SeatSelect(){

    const {idSessao} = useParams()
    const [movieSession, setMovieSession] = useState(undefined)

    useEffect(() => {
    
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        promise.then(ans => setMovieSession(ans.data))
        promise.catch(err => console.log(err.response.data))

    }, [])

    console.log(movieSession)

    if(!movieSession){
        return <TitleContainer>Carregando...</TitleContainer>
    }


    return (
<SeatSelectContent> 
<TitleContainer>
            <h2>Selecione o(s) assento(s)</h2>
        </TitleContainer>
        <SeatsContainer>
            {movieSession.seats.map(seat => (
            <p>{seat.name}</p>
            ))
            
            }
        </SeatsContainer>
        <OptionsDescription/>
        <Client>
            <ClientInfo>
                <p>Nome do Comprador:</p>
                <input placeholder="Digite seu nome..."/>
            </ClientInfo>
            <ClientInfo>
                <p>CPF do Comprador:</p>
                <input placeholder="Digite seu cpf..."/>
            </ClientInfo>
        </Client>
        
        <Confirm>
            <button>Reservar assento(s)</button>
            </Confirm>
            <MovieHighlight
            movieCover={movieSession.movie.posterURL}
            movieTitle={movieSession.movie.title}
            movieDay={movieSession.day.weekday}
            movieHour={movieSession.name}
            
            />
          
        </SeatSelectContent>
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
const SeatSelectContent = styled.div`
@media (max-width: 768px){
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}

`

const SeatsContainer = styled.div`
@media (max-width: 768px){
display: flex;
padding: 30px;
flex-wrap: wrap;
width: 70%;
p{
display: flex;
align-items: center;
justify-content: center;
width: 26px;
height: 26px;
background: #C3CFD9;
border: 1px solid #808F9D;
border-radius: 12px;
padding: 8px;
box-sizing: border-box;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
margin-left: 13px;
margin-bottom: 5px;


}
}
`



const Client = styled.div`
@media (max-width: 768px){
display: flex;
flex-direction: column;
align-items: center;
margin-top: 40px;
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
}
input{
width: 327px;
height: 51px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 3px;
margin-bottom: 20px;
padding: 3px;
box-sizing: border-box;
}
}
`
const ClientInfo = styled.div`
@media (max-width: 768px){}
`

const Confirm = styled.div`
@media (max-width: 768px){
display: flex;
justify-content: center ;
margin: 40px;
button{
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: white;

}

}
`

