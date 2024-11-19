import {Button, ButtonGroup} from "react-bootstrap";

export const LeftBtns = ({onStart, onLap}: { onStart: () => void; onLap: () => void }) => {

    return (
        <ButtonGroup className={'left-btns orbitron-400'} vertical={true}>
            <Button variant={"success"} onClick={onStart}>Start</Button>
            <Button variant={"dark"} onClick={onLap}>Lap</Button>
        </ButtonGroup>
    );
}