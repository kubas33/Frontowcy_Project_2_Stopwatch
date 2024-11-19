import {Container, Stack} from "react-bootstrap";
import {TotalTimeTimer} from "./TotalTimeTimer.tsx";
import {LapTimeTimer} from "./LapTimeTimer.tsx";
import {LeftBtns} from "./LeftBtns.tsx";
import {RightBtns} from "./RightBtns.tsx";
import {useEffect, useState} from "react";

export const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState<number[]>([]);
    const [totalTime, setTotalTime] = useState(0);
    const [lapTime, setLapTime] = useState(0);
    const [bestLapTime, setBestLapTime] = useState(0);

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setLapTime((prevLapTime) => prevLapTime + 10);
                setTotalTime((prevTotalTime) => prevTotalTime + 10);
            }, 10);

            return () => {
                clearInterval(interval);
            };
        }
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleLap = () => {
        setLaps((prevLaps) => [...prevLaps, lapTime]);
        bestLapTime === 0 ? setBestLapTime(lapTime) : setBestLapTime(Math.min(bestLapTime, lapTime));
        setLapTime(0);
    };

    const handleReset = () => {
        setIsRunning(false);
        setLaps([]);
        setTotalTime(0);
        setLapTime(0);
    };


    return (
        <Container fluid={"sm"} className={"stopwatch-container"}>
            <Stack direction={"horizontal"} className={"h-100"} gap={0}>
                <LeftBtns onStart={handleStart} onLap={handleLap}/>
                <Stack gap={0} className={"timers-container orbitron-600 uppercase"}>
                    <TotalTimeTimer totalTime={totalTime} laps={laps.length}/>
                    <LapTimeTimer currentLapTime={lapTime} bestLapTime={bestLapTime}/>
                </Stack>
                <RightBtns onReset={handleReset} onStop={handleStop}/>
            </Stack>
        </Container>
    )
}