import {ListGroup} from "react-bootstrap";
import {formatTime} from "../utils/Helpers.tsx";

export const Summary = ({laps, bestLapTime, totalTime}: { laps: number[], bestLapTime: number, totalTime: number }) => {

    const averageTime = (laps: number[]) => {
        const totalTime = laps.reduce((total, lap) => total + lap, 0);
        return totalTime / laps.length;
    }

    const slowestLap = (laps: number[]) => {
        return Math.max(...laps);
    }
    return (<>
        <h3>Summary:</h3>
        <ListGroup className={"summary"} as={"ul"}>
            <ListGroup.Item as={"li"}>Total: {formatTime(totalTime)}</ListGroup.Item>
            <ListGroup.Item as={"li"}>Laps: {laps.length}</ListGroup.Item>
            <ListGroup.Item as={"li"}>Average: {formatTime(averageTime(laps))}</ListGroup.Item>
            <ListGroup.Item as={"li"}>Slowest: {formatTime(slowestLap(laps))}</ListGroup.Item>
            <ListGroup.Item as={"li"}>Best: {formatTime(bestLapTime)}</ListGroup.Item>
        </ListGroup>
    </>)
}