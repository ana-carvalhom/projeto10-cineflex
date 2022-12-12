import styled from "styled-components"


export default function MovieDays({movie}){
return (
    <TimeContainer>
    <p>{movie.weekday} - {movie.date}</p>
       <ButtonsContainer> 
         {movie.showtimes.map((time) =>
         <button key={time.name}>{time.name}</button>
                 
         )}
    
   
    
   </ButtonsContainer>
   </TimeContainer>
)



}


const TimeContainer = styled.div`
@media (max-width: 768px){
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0 20px;
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: #293845;
}

}

`

const ButtonsContainer = styled.div`
@media (max-width: 768px){
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin: 20px 0;

button {
width: 83px;
height: 43px;
background-color: #E8833A;
border-radius: 3px;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
margin-right: 20px;
margin-bottom: 20px;


}
}



`