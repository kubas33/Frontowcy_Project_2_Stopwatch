import {Container} from "react-bootstrap";

export const TotalTimeTimer = () => {
    return (
        <Container fluid={"sm"} className={"timer"}>
            <p>Total: 44:44:22</p>
            <p>Best lap: 22:22:44</p>
        </Container>
    );
}