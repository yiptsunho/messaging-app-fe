import React, { useState } from "react";
import { Checkbox, Chip, Collapse, Grid, Paper, Typography, Zoom } from "@mui/material";
import DefaultAvatar from "../../../components/DefaultAvatar";

function Message (props) {
    const { message, isGroup, transition } = props;
    const currentUserId = window.sessionStorage.getItem('userId')

    return (
        <Grid container item md={12} sx={{ display: "flex", justifyContent: message.senderId == currentUserId ? "flex-end" : "flex-start", alignItems: "center" }}>
            {isGroup && message.senderId != currentUserId &&
                <Grid item display="flex" justifyContent="center" marginRight="0.5rem" alignSelf="flex-end">
                    <DefaultAvatar
                        name="A"
                        sx={{ width: 30, height: 30, borderStyle: "solid" }}
                    />
                </Grid>
            }
            <Grid item>
                {
                    transition ?
                        <Zoom in={true} style={{ transitionDuration: "300ms" }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: message.senderId == currentUserId ? "flex-end" : "flex-start" }}>
                                <Typography variant="caption">
                                    Name, Time
                                </Typography>
                                <Paper elevation={3} sx={{ borderRadius: "16px" }}>
                                    <Chip
                                        label={
                                            <Typography variant="body1">
                                                {message.content}
                                            </Typography>
                                        }
                                        sx={{ height: "50px", bgcolor: "white", paddingX: "8px" }}
                                    />
                                </Paper>
                            </div>
                        </Zoom>
                        :
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: message.senderId == currentUserId ? "flex-end" : "flex-start" }}>
                            <Typography variant="caption">
                                Name, Time
                            </Typography>
                            <Paper elevation={3} sx={{ borderRadius: "16px" }}>
                                <Chip
                                    label={
                                        <Typography variant="body1">
                                            {message.content}
                                        </Typography>
                                    }
                                    sx={{ height: "50px", bgcolor: "white", paddingX: "8px" }}
                                />
                            </Paper>
                        </div>
                }
            </Grid>
            {isGroup && message.senderId == currentUserId &&
                <Grid item display="flex" justifyContent="center" marginLeft="0.5rem" alignSelf="flex-end">
                    <DefaultAvatar
                        name="A"
                        sx={{ width: 30, height: 30, borderStyle: "solid" }}
                    />
                </Grid>
            }
        </Grid>
    )
};

export default Message;