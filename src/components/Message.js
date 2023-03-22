import React from "react";
import {Chip, Grid} from "@mui/material";

function Message (props) {
    const { message } = props;

    return (
        <Grid item md={12}>
            <Chip label={message.content}/>
        </Grid>
    )
};

export default Message;