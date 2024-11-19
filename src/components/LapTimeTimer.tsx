import {Container} from "react-bootstrap";

export const LapTimeTimer = () => {
    return (
        <Container fluid={"sm"} className={"timer"}>
            <p>Lap: 22:22:44</p>
            <p>Laps: 4</p>
        </Container>
    );
}