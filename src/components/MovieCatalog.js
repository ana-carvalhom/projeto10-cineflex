import styled from "styled-components";
import Movies from "./Movies";


export default function MovieCatalog() {
    return (
        <> <TitleContainer>
            <h2>Selecione o filme</h2>
        </TitleContainer>
        <MovieOptions>
        <Movies />
            <Movies />
            <Movies />
            <Movies />
            <Movies />
            <Movies />
            <Movies />
            <Movies />
            <Movies />
            <Movies />
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
background-color: red;
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
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;



`
