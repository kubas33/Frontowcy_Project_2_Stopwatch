import {Container} from "react-bootstrap";
import {formatTime} from "../utils/Helpers.tsx";

export const LapTimeTimer = ({currentLapTime, bestLapTime}: { currentLapTime: number; bestLapTime: number }) => {
    return (
        <Container fluid={"sm"} className={"timer"}>
            <p>Current: {formatTime(currentLapTime)}</p>
            <p>Best: {formatTime(bestLapTime)}</p>
        </Container>
    );
}