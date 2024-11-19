import {Container} from "react-bootstrap";
import {formatTime} from "../utils/Helpers.tsx";

export const TotalTimeTimer = ({totalTime, laps}: { totalTime: number; laps: number }) => {
    return (
        <Container fluid={"sm"} className={"timer"}>
            <p>Total: {formatTime(totalTime)}</p>
            <p>Laps: {laps}</p>
        </Container>
    );
}