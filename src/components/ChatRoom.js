import {Container, Grid} from "@mui/material";
import ChatList from "./ChatList";
import MessageList from "./MessageList";

function ChatRoom () {
    return (
        <Container>
            <MessageList />
        </Container>
    )
};

export default ChatRoom;