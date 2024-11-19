import {Container, Stack} from "react-bootstrap";
import {TotalTimeTimer} from "./TotalTimeTimer.tsx";
import {LapTimeTimer} from "./LapTimeTimer.tsx";

export const Stopwatch = () => {
    return (
        <Container fluid={"sm"} className={"stopwatch-container"}>
            <Stack gap={0}>
                <TotalTimeTimer/>
                <LapTimeTimer/>
            </Stack>
        </Container>
    )
}