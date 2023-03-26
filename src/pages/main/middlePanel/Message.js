import React from "react";
import { Chip, Grid, Paper } from "@mui/material";

function Message (props) {
    const { message } = props;
    const currentUser = window.sessionStorage.getItem('username')

    return (
        <Grid item md={12} sx={{ display: "flex", justifyContent: message.from === currentUser ? "flex-end" : "flex-start" }}>
            <Paper elevation={3} sx={{ borderRadius: "16px" }}>
                <Chip label={message.content} sx={{ height: "50px", bgcolor: "white", paddingX: "8px" }} />
            </Paper>
        </Grid>
    )
};

export default Message;