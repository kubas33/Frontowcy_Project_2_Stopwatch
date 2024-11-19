import {Button, ButtonGroup} from "react-bootstrap";

export const RightBtns = () => {

    return (
        <ButtonGroup className={'right-btns'} vertical={true}>
            <Button variant={"warning"}>Stop</Button>
            <Button variant={"danger"}>Reset</Button>
        </ButtonGroup>
    );
}