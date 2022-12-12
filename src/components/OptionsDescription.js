import styled from "styled-components";

export default function OptionsDescription(){
    return(
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