import { Container } from "@mui/material";
import Scrollbars from "react-custom-scrollbars";
import MessageList from "./MessageList";

function ChatRoom() {
    return (
        <Scrollbars autoHide style={{ height: "100%" }}>
            <Container id="chatroom" sx={{ paddingY: "0.5rem" }}>
                <MessageList />
            </Container>
        </Scrollbars>
    )
};

export default ChatRoom;