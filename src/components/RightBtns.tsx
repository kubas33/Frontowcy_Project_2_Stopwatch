import {Button, ButtonGroup} from "react-bootstrap";

export const RightBtns = ({onStop, onReset}: { onStop: () => void; onReset: () => void }) => {

    return (
        <ButtonGroup className={'right-btns orbitron-400'} vertical={true}>
            <Button variant={"warning"} onClick={onStop}>Stop</Button>
            <Button variant={"danger"} onClick={onReset}>Reset</Button>
        </ButtonGroup>
    );
}