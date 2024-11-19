
import './App.scss'
import {Container} from "react-bootstrap";
import {Stopwatch} from "./components/Stopwatch.tsx";

function App() {

  return (
    <>
        <Container fluid={"md"} className={'d-flex justify-content-center align-items-center vh-100'}>
            <Stopwatch/>
        </Container>
    </>
  )
}

export default App
