import {Button, ButtonGroup} from "react-bootstrap";

export const RightBtns = () => {

    return (
        <ButtonGroup className={'right-btns orbitron-400'} vertical={true}>
            <Button variant={"warning"}>Stop</Button>
            <Button variant={"danger"}>Reset</Button>
        </ButtonGroup>
    );
}