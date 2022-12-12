import styled from "styled-components";
import { useEffect, useState } from "react";


export default function Seat({seat,selectSeat,isSelected  }){
    const [status, setStatus] = useState("available")

    useEffect(() => {
        if (isSelected){
            setStatus("selected")
        } else if (seat.isAvailable) {
            setStatus("available")
        } else {
            setStatus("unavailable")
        }
    }, [isSelected]) 
    


    return(
        <IndividualSeat status={status} onClick={() => selectSeat(seat)}>{seat.name}</IndividualSeat>
    )
}


const seatColors = {
    available: { background: "#C3CFD9", border: "#808F9D" },
    selected: { background: "#1AAE9E", border: "#0E7D71" },
    unavailable: { background: "#FBE192", border: "#F7C52B" }
}

const IndividualSeat = styled.p `
display: flex;
align-items: center;
justify-content: center;
width: 26px;
height: 26px;
background: ${props => seatColors[props.status].background};
border: 1px solid ${props => seatColors[props.status].border};
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






`
