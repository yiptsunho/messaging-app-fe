import { Container, Divider, Grid, Paper } from "@mui/material";
import ChatRoom from "./ChatRoom";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import FolderIcon from "@mui/icons-material/Folder";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import React, { createContext, useContext, useState } from "react"
import InputBar from "./InputBar";
import CallIcon from '@mui/icons-material/CallOutlined';
import _ from 'lodash';
import { MainContext } from "../Main";
import dummyData from "../../../utils/Messages.json"
import DefaultAvatar from "../../../components/DefaultAvatar";

export const MiddlePanelContext = createContext({})

function MiddlePanel() {
    const [messages, setMessages] = useState(dummyData)
    const { currentRoom, groupChats, privateChats, isGroup } = useContext(MainContext)

    return (
        <MiddlePanelContext.Provider value={{ messages }}>
            <Paper elevation={0} sx={{ borderRadius: "16px", height: "100%", bgcolor: "#ECEFF4" }}>
                <Grid container direction="column" justifyContent="space-between" height="100%">
                    <Grid container item height="7.5%">
                        <Container sx={{ height: "100%" }}>
                            <List disablePadding sx={{ paddingTop: "4px", paddingBottom: "4px", height: "inherit" }}>
                                <ListItem
                                    secondaryAction={
                                        <Grid>
                                            <IconButton edge="end" aria-label="delete">
                                                <Avatar sx={{ bgcolor: "#f1f3f4" }}>
                                                    <CallIcon sx={{ color: "#344445" }} />
                                                </Avatar>
                                            </IconButton>
                                        </Grid>
                                    }
                                    sx={{ height: "inherit" }}
                                >
                                    <ListItemAvatar>
                                        {false ?
                                            <Avatar>
                                                <DefaultAvatar name="Dummy contact" />
                                                {/* <DefaultAvatar name={receiverData.groupName ?? receiverData.receiverName} /> */}
                                            </Avatar>
                                            :
                                            <DefaultAvatar name="Dummy contact" />
                                            // <DefaultAvatar
                                            //     name={receiverData.isGroup ? receiverData.groupName : receiverData.receiverName}
                                            // />
                                        }
                                    </ListItemAvatar>
                                    <ListItemText
                                        // primary={receiverData.isGroup ? receiverData.groupName : receiverData.receiverName}
                                        // secondary={receiverData.isGroup ? publicChats.get(receiverData.groupId) : privateChats.get(receiverData.receiverId)}
                                        primary="Dummy text"
                                        secondary="Dummy text"
                                    />
                                </ListItem>
                            </List>
                        </Container>
                    </Grid>
                    <Divider variant="middle" />
                    <Grid container item height="84%" sx={{ marginBottom: "auto" }}>
                        <ChatRoom
                            // privateChats={privateChats.get(receiverData.receiverId ?? null) ?? []}
                            // publicChats={publicChats.get(receiverData.groupId ?? null) ?? []}
                            // isGroup={receiverData.isGroup}
                            messages={currentRoom ? (isGroup ? groupChats.find(chat => chat.roomId == currentRoom)?.messageList : privateChats.find(chat => chat.roomId == currentRoom)?.messageList) : []}
                        />
                    </Grid>
                    <Grid container item height="7.5%">
                        <InputBar />
                    </Grid>
                </Grid>
            </Paper>
        </MiddlePanelContext.Provider>
    )
};

export default MiddlePanel;