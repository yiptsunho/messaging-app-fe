import React from 'react';
import Message from "./Message";
import Messages from '../utils/Messages.json'
import {Grid, Container} from "@mui/material";

function MessageList () {

    return (
        <React.Fragment>
            <Grid container rowSpacing={2}>
                {Messages.map(message => {
                    return <Message message={message}/>
                })}
            </Grid>
        </React.Fragment>
    )
};

export default MessageList;