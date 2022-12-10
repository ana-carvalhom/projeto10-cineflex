import styled from "styled-components";
import MovieHighlight from "./MovieHighlight";


export default function MovieTime() {
    return (
        <> <TitleContainer>
            <h2>Selecione o horário</h2>
        </TitleContainer>
            <TimeContainer>
                <p>Quinta-feira - 24/06/2021</p>
                <ButtonsContainer> 
             <button>15:00</button>
             <button>15:00</button>
             <button>15:00</button>
             <button>15:00</button>
             <button>15:00</button>
             <button>15:00</button>
             
            </ButtonsContainer>
            </TimeContainer>
            <TimeContainer>
                <p>Sexta-feira - 25/06/2021</p>
                <ButtonsContainer> 
             <button>15:00</button>
             <button>15:00</button>
             <button>15:00</button>
             <button>15:00</button>
             <button>15:00</button>
             <button>15:00</button>
             
            </ButtonsContainer>
            </TimeContainer>
            <MovieHighlight/>
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
height: 117px;
padding: 20px;
display: flex;
align-items: center;
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;
}

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