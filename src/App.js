import Header from "./components/Header";
import MovieCatalog from "./components/MovieCatalog";
import MovieTime from "./components/MovieTime";
import styled from "styled-components";
import SeatSelect from "./components/SeatSelect";
import ConfirmationDetails from "./components/ConfirmationDetails";
import GlobalStyle from "./css/GlobalStyle";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <Content>
      <Header/>
      <Routes>
      <Route path="/" element={<MovieCatalog/>}/>
      <Route path="/sessoes/:idFilme" element={<MovieTime/>}/>
      <Route path="/assentos/:idSessao" element={<SeatSelect/>}/>
      <Route path="/sucesso" element={<ConfirmationDetails/>}/>
      
      </Routes>
      
    </Content>
    </BrowserRouter>
    
  );
}

const Content = styled.div`
@media (max-width: 768px){
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: fit-content;

}

`
