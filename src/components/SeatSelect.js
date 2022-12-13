import styled from "styled-components";
import MovieHighlight from "./MovieHighlight";
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios"
import OptionsDescription from "./OptionsDescription";
import ClientInformationForm from "./ClientInformationForm";
import Seat from "./Seat";




const seatColors = {
    available: { background: "#C3CFD9", border: "#808F9D" },
    selected: { background: "#1AAE9E", border: "#0E7D71" },
    unavailable: { background: "#FBE192", border: "#F7C52B" }
}

export default function SeatSelect(){
  

    const {idSessao} = useParams()
    const [movieSession, setMovieSession] = useState(undefined)
    const [seatSelected, setSeatSelected] = useState([])

    useEffect(() => {
    
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        promise.then(ans => setMovieSession(ans.data))
        promise.catch(err => console.log(err.response.data))

    }, [])

    console.log(movieSession)
    
   

    function selectSeat(seat){

        

        if(seat.isAvailable === false){
            alert("Esse assento não está disponível")
        } else {
            const isSelected = seatSelected.some(s => seat.id === s.id )
            if (isSelected){
                const goBack = seatSelected.filter(s => seat.id !== s.id)
                setSeatSelected(goBack)

            } else {
                setSeatSelected([...seatSelected,seat])
            }
            
        }
        
    }
    console.log(seatSelected)

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
            <Seat 
            key={seat.name}
            seat={seat} 
            selectSeat={selectSeat}
            isSelected={seatSelected.some(s => seat.id === s.id )}
           />
            ))
            
            }
        </SeatsContainer>
        <OptionsDescription/>
        <ClientInformationForm
        seatSelected={seatSelected}/>
        
        
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
}
`

