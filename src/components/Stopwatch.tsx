import {Container, Stack} from "react-bootstrap";
import {TotalTimeTimer} from "./TotalTimeTimer.tsx";
import {LapTimeTimer} from "./LapTimeTimer.tsx";
import {LeftBtns} from "./LeftBtns.tsx";
import {RightBtns} from "./RightBtns.tsx";

export const Stopwatch = () => {
    return (
        <Container fluid={"sm"} className={"stopwatch-container"}>
            <Stack direction={"horizontal"} className={"h-100"} gap={0}>
                <LeftBtns/>
                <Stack gap={0} className={"timers-container orbitron-600 uppercase"}>
                    <TotalTimeTimer/>
                    <LapTimeTimer/>
                </Stack>
                <RightBtns/>
            </Stack>
        </Container>
    )
}