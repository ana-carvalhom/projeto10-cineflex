import styled from "styled-components";
import MovieHighlight from "./MovieHighlight";

export default function SeatSelect(){
    return (
<SeatSelectContent> 
<TitleContainer>
            <h2>Selecione o(s) assento(s)</h2>
        </TitleContainer>
        <SeatsContainer>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
            <p>01</p>
        </SeatsContainer>
        <Options>
            <OptionDetailed>
                <Option/>
            Selecionado
            </OptionDetailed>
            <OptionDetailed>
                <Option/>
            Disponível
            </OptionDetailed>
            <OptionDetailed>
                <Option/>
            Indisponível
            </OptionDetailed>
        </Options>
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
            <MovieHighlight/>
          
        </SeatSelectContent>
    )
}

const TitleContainer = styled.div`
@media (max-width: 768px){
height: 110px;
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
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
width: 100vw;
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

const Options = styled.div`
@media (max-width: 768px){
display: flex;
box-sizing: border-box;
padding: 10px;
width: 100%;
}

`
const OptionDetailed = styled.div`
@media (max-width: 768px){
display: flex;
flex-direction: column;
align-items: center;
margin-left: 35px;
}

`
const Option = styled.div`
@media (max-width: 768px){
width: 25px;
height: 25px;
background: #1AAE9E;
border: 1px solid #0E7D71;
border-radius: 17px;
margin-bottom: 5px;
    
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

