import styled from "styled-components"
import harryPotter from "../assets/download.jpeg"


export default function MovieHighlight(){
    return(
        <MovieSelected>
                <MovieCard>
                <MovieImage src={harryPotter} alt="movie cover"/>
                </MovieCard>
                <MovieSelectedInfo>
                <p>Harry Potter</p>
                <p>Quinta-feira - 15:00</p>
                </MovieSelectedInfo>
                
            </MovieSelected>
    )
}

const MovieImage = styled.img`
@media (max-width: 768px){
width: 48px;
height: 72px;
}

`

const MovieSelected = styled.div`
@media (max-width: 768px){
background-color: #DFE6ED;
border-top: 2px solid #9EADBA;
width: 100vw;
height: 200px;
padding: 10px;
display: flex;
flex-wrap: wrap;
align-items: center;
margin-top: auto;
border-top: 1px solid #9EADBA;
box-sizing: border-box;


}
`

const MovieCard = styled.div`
@media (max-width: 768px){
width: 64px;
height: 89px;
margin: 20px;
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
display: flex;
align-content: center;
justify-content: center;
padding: 8px;
box-sizing: border-box;
}

`

const MovieSelectedInfo = styled.div`

p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 40px;
}

`