import React from 'react';
import Message from "./Message";
import { Grid } from "@mui/material";
import { MiddlePanelContext } from './MiddlePanel';

function MessageList(props) {
    const { messages } = props;

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