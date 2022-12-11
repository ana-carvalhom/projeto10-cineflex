import styled from "styled-components"

export default function ConfirmationDetails(){
    return(
        <TitleContainer>
            <h2>Selecione o(s) assento(s)</h2>
        </TitleContainer>
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