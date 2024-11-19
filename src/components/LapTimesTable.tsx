import {Table} from "react-bootstrap";
import {formatTime} from "../utils/Helpers.tsx";

export const LapTimesTable = ({laps, bestLapTime}: { laps: number[], bestLapTime: number }) => {
    return (
        <Table striped bordered hover variant={"light"} className={"lap-times-table orbitron-600 uppercase"}
               size={"sm"}>
            <thead>
            <tr>
                <th>#</th>
                <th>Time</th>
            </tr>
            </thead>
            <tbody>
            {laps.map((lapTime, index) => (
                <tr key={index} className={bestLapTime === lapTime ? "best-lap" : ""}>
                    <td>{index + 1}</td>
                    <td>{formatTime(lapTime)}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    )
}