import { Container } from "@mui/material";
import { useState } from "react";
import MessageList from "./MessageList";

function ChatRoom() {
    return (
        <Container id="chatroom" sx={{ paddingY: "0.5rem", overflow: "auto", height: "65vh" }}>
            <MessageList />
        </Container>
    )
};

export default ChatRoom;