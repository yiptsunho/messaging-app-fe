import {Container} from "@mui/material";
import MessageList from "./MessageList";
import InputBar from "./InputBar";

function ChatRoom () {
    return (
        <Container>
            <MessageList />
            <InputBar />
        </Container>
    )
};

export default ChatRoom;