import './App.css';
import 'hover.css/css/hover-min.css'
import MovieList from "./MovieList";
import {Container} from "react-bootstrap";
import WebsiteNav from "./WebsiteNav";

function App() {
  return (
      <div className="App">
        <Container className="mt-1">
          <WebsiteNav/>
          <MovieList/>
        </Container>
      </div>
  );
}

export default App;
