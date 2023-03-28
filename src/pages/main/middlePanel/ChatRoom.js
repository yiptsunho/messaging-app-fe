import { Container } from "@mui/material";
import { useContext, useEffect, useRef } from "react";
import Scrollbars from "react-custom-scrollbars";
import MessageList from "./MessageList";
import { MiddlePanelContext } from "./MiddlePanel";

function ChatRoom(props) {
    const { privateChats, publicChats, isGroup } = props
    const scrollBars = useRef();
    const { messages } = useContext(MiddlePanelContext);

    useEffect(() => {
        scrollBars.current.scrollToBottom()
    }, [messages])

    return (
        <Scrollbars autoHide style={{ height: "100%" }} ref={scrollBars}>
            <Container id="chatroom" sx={{ paddingY: "0.5rem" }}>
                <MessageList chats={isGroup ? publicChats : privateChats} />
            </Container>
        </Scrollbars>
    )
};

export default ChatRoom;