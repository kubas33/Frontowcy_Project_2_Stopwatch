import {Container} from "react-bootstrap";

export const TotalTimeTimer = () => {
    return (
        <Container fluid={"sm"} className={"timer"}>
            <p>Total: 44:44:22</p>
            <p>Laps: 4</p>
        </Container>
    );
}