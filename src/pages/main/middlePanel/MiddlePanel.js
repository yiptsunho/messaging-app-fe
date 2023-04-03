import { Container, Divider, Grid, Paper } from "@mui/material";
import ChatRoom from "./ChatRoom";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import React, { useContext, useState } from "react"
import InputBar from "./InputBar";
import CallIcon from '@mui/icons-material/CallOutlined';
import _ from 'lodash';
import { MainContext } from "../Main";
import DefaultAvatar from "../../../components/DefaultAvatar";
import StickerEmojiTab from "./StickerEmojiTab";

function MiddlePanel() {
    const { currentRoom, privateChats, isGroup } = useContext(MainContext);
    const [showTab, setShowTab] = useState(false);

    const toggleTab = () => {
        setShowTab(!showTab)
    }

    // topBar => height=7.5%, chatRoom => height=84%, inputBar => height=7.5%
    return (
        <Paper elevation={0} sx={{ borderRadius: "16px", height: "100%", bgcolor: "#ECEFF4" }}>
            {
                currentRoom ?
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
                                            {true ?
                                                <Avatar>
                                                    <DefaultAvatar name={privateChats.find(chat => chat.roomId === currentRoom)?.receiverName ?? "Something is wrong"} />
                                                    {/* <DefaultAvatar name={receiverData.groupName ?? receiverData.receiverName} /> */}
                                                </Avatar>
                                                :
                                                <DefaultAvatar name="A" />
                                                // <DefaultAvatar
                                                //     name={receiverData.isGroup ? receiverData.groupName : receiverData.receiverName}
                                                // />
                                            }
                                        </ListItemAvatar>
                                        <ListItemText
                                        // primary={receiverData.isGroup ? receiverData.groupName : receiverData.receiverName}
                                        // secondary={receiverData.isGroup ? publicChats.get(receiverData.groupId) : privateChats.get(receiverData.receiverId)}
                                            primary={privateChats.find(chat => chat.roomId === currentRoom)?.receiverName ?? "Something is wrong"}
                                            secondary="Placeholder"
                                        />
                                    </ListItem>
                                </List>
                            </Container>
                        </Grid>
                        <Divider variant="middle" />
                        <Grid container item height={showTab ? "54%" : "84%"} sx={{ marginBottom: "auto" }}>
                            <ChatRoom
                                // privateChats={privateChats.get(receiverData.receiverId ?? null) ?? []}
                                // publicChats={publicChats.get(receiverData.groupId ?? null) ?? []}
                                // isGroup={receiverData.isGroup}
                                messages={currentRoom ? privateChats.find(chat => chat.roomId == currentRoom)?.messageList : []}
                                isGroup={currentRoom ? privateChats.find(chat => chat.roomId == currentRoom)?.isGroup : ""}
                            />
                        </Grid>
                        <Grid container item height={showTab ? "37.5%" : "7.5%"}>
                            <InputBar showTab={showTab} toggleTab={toggleTab} />
                        </Grid>
                        {/* <Grid container item height="30%">
                            {showTab && <StickerEmojiTab />}
                        </Grid> */}
                    </Grid>
                    // <Grid container direction="column" justifyContent="space-between" height="100%">
                    //     <StickerEmojiTab />
                    // </Grid>
                    :
                    <Grid container direction="column" alignContent='center' justifyContent='center' height="100%">
                        Click on a friend to start chatting
                    </Grid>
            }
        </Paper>
    )
};

export default MiddlePanel;