import styled from "styled-components";

export default function OptionsDescription(){
    return(
        <Options>
        <OptionDetailed>
            <OptionSelected/>
        Selecionado
        </OptionDetailed>
        <OptionDetailed>
            <OptionAvailable/>
        Disponível
        </OptionDetailed>
        <OptionDetailed>
            <OptionUnavailable/>
        Indisponível
        </OptionDetailed>
    </Options>
    )
}

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
const OptionSelected = styled.div`
@media (max-width: 768px){
width: 25px;
height: 25px;
background: #1AAE9E;
border: 1px solid #0E7D71;
border-radius: 17px;
margin-bottom: 5px;
    
}

`
const OptionAvailable = styled.div`
@media (max-width: 768px){
width: 25px;
height: 25px;
border-radius: 17px;
margin-bottom: 5px;
background: #C3CFD9;
border: 1px solid #7B8B99;    
}

`
const OptionUnavailable = styled.div`
@media (max-width: 768px){
width: 25px;
height: 25px;
border-radius: 17px;
margin-bottom: 5px;
background: #FBE192;
border: 1px solid #F7C52B;    
}

`