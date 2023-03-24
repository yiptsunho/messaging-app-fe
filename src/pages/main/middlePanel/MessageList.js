import React, { useContext, useState } from 'react';
import Message from "./Message";
// import Messages from '../utils/Messages.json'
import { Grid, Container } from "@mui/material";
import { MiddlePanelContext } from './MiddlePanel';

function MessageList() {
    const { messages } = useContext(MiddlePanelContext)

    return (
        <React.Fragment>
            <Grid container rowSpacing={2}>
                {messages.map(message => {
                    return <Message message={message} />
                })}
            </Grid>
        </React.Fragment>
    )
};

export default MessageList;