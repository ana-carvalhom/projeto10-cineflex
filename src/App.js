import Header from "./components/Header";
import MovieCatalog from "./components/MovieCatalog";
import MovieTime from "./components/MovieTime";
import styled from "styled-components";

export default function App() {
  return (
    <Content>
      <Header/>
      <MovieTime/>
    </Content>
  );
}

const Content = styled.div`
@media (max-width: 768px){
  height: 100vh;
}

`
