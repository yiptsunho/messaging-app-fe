import React, { useContext } from 'react';
import Message from "./Message";
import { Grid, Container } from "@mui/material";
import { MiddlePanelContext } from './MiddlePanel';

function MessageList(props) {
    const { messages, isGroup } = props;

    return (
        <React.Fragment>
            <Grid container rowSpacing={2}>
                {messages.map(message => {
                    return <Message message={message} isGroup={isGroup} transition={messages[messages.length - 1 ?? 0] === message} />
                })}
            </Grid>
        </React.Fragment>
    )
};

export default MessageList;