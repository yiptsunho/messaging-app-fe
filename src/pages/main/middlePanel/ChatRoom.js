import { Container } from "@mui/material";
import { useContext, useEffect, useRef } from "react";
import Scrollbars from "react-custom-scrollbars";
import MessageList from "./MessageList";
import { MiddlePanelContext } from "./MiddlePanel";

function ChatRoom(props) {
    const { messages } = props
    const scrollBars = useRef();

    useEffect(() => {
        scrollBars.current.scrollToBottom()
    }, [messages])

    return (
        <Scrollbars autoHide style={{ height: "100%" }} ref={scrollBars}>
            <Container id="chatroom" sx={{ paddingY: "0.5rem" }}>
                <MessageList messages={messages} />
            </Container>
        </Scrollbars>
    )
};

export default ChatRoom;