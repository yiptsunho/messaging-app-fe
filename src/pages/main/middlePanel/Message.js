import React from "react";
import {Chip, Grid} from "@mui/material";

function Message (props) {
    const { message } = props;
    const currentUser = window.sessionStorage.getItem('username')

    return (
        <Grid item md={12} sx={{ display: "flex", justifyContent: message.from === currentUser ? "flex-end" : "flex-start" }}>
            <Chip label={message.content}/>
        </Grid>
    )
};

export default Message;