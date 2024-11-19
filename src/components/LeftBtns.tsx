import {Button, ButtonGroup} from "react-bootstrap";

export const LeftBtns = () => {

    return (
        <ButtonGroup className={'left-btns orbitron-400'} vertical={true}>
            <Button variant={"success"}>Start</Button>
            <Button variant={"dark"}>Lap</Button>
        </ButtonGroup>
    );
}