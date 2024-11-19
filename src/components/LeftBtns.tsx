import {Button, ButtonGroup} from "react-bootstrap";

export const LeftBtns = () => {

    return (
        <ButtonGroup className={'left-btns'} vertical={true}>
            <Button variant={"success"}>Start</Button>
            <Button variant={"dark"}>Lap</Button>
        </ButtonGroup>
    );
}