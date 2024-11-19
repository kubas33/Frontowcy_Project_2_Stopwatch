import {Container} from "react-bootstrap";

export const LapTimeTimer = () => {
    return (
        <Container fluid={"sm"} className={"timer"}>
            <p>Current: 22:22:44</p>
            <p>Best: 22:22:44</p>
        </Container>
    );
}