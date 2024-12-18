import {Container, Stack} from "react-bootstrap";
import {TotalTimeTimer} from "./TotalTimeTimer.tsx";
import {LapTimeTimer} from "./LapTimeTimer.tsx";
import {LeftBtns} from "./LeftBtns.tsx";
import {RightBtns} from "./RightBtns.tsx";
import {useEffect, useState} from "react";
import {LapTimesTable} from "./LapTimesTable.tsx";
import {Summary} from "./Summary.tsx";

export const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState<number[]>([]);
    const [totalTime, setTotalTime] = useState(0);
    const [lapTime, setLapTime] = useState(0);
    const [bestLapTime, setBestLapTime] = useState(0);
    const [isTimerHidden, setIsTimerHidden] = useState(false);

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
        setIsTimerHidden(false);
    };

    const handleStop = () => {
        setIsRunning(false);
        setIsTimerHidden(true);
    };

    const handleLap = () => {
        setLaps((prevLaps) => [...prevLaps, lapTime]);
        bestLapTime === 0 ? setBestLapTime(lapTime) : setBestLapTime(Math.min(bestLapTime, lapTime));
        setLapTime(0);
    };

    const handleReset = () => {
        setLaps([]);
        setTotalTime(0);
        setLapTime(0);
        setBestLapTime(0);
    };

    const handleGoBack = () => {
        setIsTimerHidden(false);
    }


    return (
        <Container fluid={"sm"} className={"stopwatch-container "}>
            {!isTimerHidden && (
                <Stack direction={"vertical"} gap={3} className={"h-100"}>
                    <Stack
                        direction={"horizontal"}
                        className={"h-100 justify-content-center align-items-center"}
                        gap={0}
                    >
                        <LeftBtns onStart={handleStart} onLap={handleLap}/>
                        <Stack gap={0} className={"timers-container orbitron-600 uppercase"}>
                            <TotalTimeTimer totalTime={totalTime} laps={laps.length}/>
                            <LapTimeTimer currentLapTime={lapTime} bestLapTime={bestLapTime}/>
                        </Stack>
                        <RightBtns onReset={handleReset} onStop={handleStop}/>
                    </Stack>
                    {laps.length > 0 && <LapTimesTable laps={laps} bestLapTime={bestLapTime}/>}
                </Stack>
            )}
            {isTimerHidden &&
                <Summary laps={laps} bestLapTime={bestLapTime} totalTime={totalTime} handleGoBack={handleGoBack}/>}
        </Container>
    );

}