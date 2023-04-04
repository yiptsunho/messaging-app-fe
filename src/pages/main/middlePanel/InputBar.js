import React, { useContext, useRef, useState } from 'react';
import { IconButton, InputBase, Grid, Paper, Button, useMediaQuery, Collapse } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import FileIcon from '@mui/icons-material/InsertDriveFile';
import { MainContext } from '../Main';
import moment from 'moment';
import Icon from '@mdi/react';
import { mdiStickerCircleOutline } from '@mdi/js';
import EmojiIcon from '@mui/icons-material/EmojiEmotions';
import StickerEmojiTab from './StickerEmojiTab';
import EmojiPicker from 'emoji-picker-react';

function InputBar(props) {
    const { showTab, toggleTab } = props;
    const [hasFile, setHasFile] = useState(false)
    const { sendMessage } = useContext(MainContext)
    const currentUser = window.sessionStorage.getItem('username')
    const [messageContent, setMessageContent] = useState("")
    const lg = useMediaQuery('(max-width:1200px)')

    return (
        <Grid container sx={{ paddingLeft: "1rem", paddingRight: "1rem", paddingBottom: "1rem" }}>
            <Paper elevation={3} sx={{ width: "100%", padding: "0.5rem", borderRadius: "1rem", alignItems: "center", display: "flex", flexDirection: "column" }}>
                <form
                    type="submit"
                    style={{ width: "100%" }}
                    onSubmit={(event) => {
                        event.preventDefault()
                        if (messageContent) {
                            const newMessage = {
                                messageId: 4,
                                type: "text",
                                content: messageContent,
                                dateTime: moment()
                            }
                            sendMessage(newMessage)
                            setMessageContent("")
                        }
                    }}>
                    <Grid container>
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" size={lg ? "small" : "medium"}>
                            <AddIcon fontSize={lg ? "small" : "medium"} />
                        </IconButton>
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" size={lg ? "small" : "medium"} onClick={toggleTab}>
                            <EmojiIcon fontSize={lg ? "small" : "medium"} />
                        </IconButton>
                        {hasFile &&
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" size={lg ? "small" : "medium"}>
                                <FileIcon fontSize={lg ? "small" : "medium"} />
                            </IconButton>
                        }
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Type here.."
                            value={messageContent}
                            onChange={(e) => {
                                setMessageContent(e.target.value)
                            }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" size={lg ? "small" : "medium"} onClick={toggleTab}>
                            {/* <StickerIcon fontSize={lg ? "small" : "medium"} /> */}
                            <Icon path={mdiStickerCircleOutline} size={1} />
                        </IconButton>
                        {/* <Divider sx={{ height: "auto", m: 0.5 }} orientation="vertical" /> */}
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={() => {
                                if (messageContent) {
                                    const newMessage = {
                                        messageId: 4,
                                        type: "text",
                                        content: messageContent,
                                        dateTime: moment()
                                    }
                                    sendMessage(newMessage)
                                    setMessageContent("")
                                }
                            }}
                            sx={{ p: '10px', minWidth: "unset", borderRadius: "10px" }}
                            // xl -> "medium", others -> "small"
                            size={lg ? "small" : "medium"}
                        >
                            <SendIcon fontSize={lg ? "small" : "medium"} />
                        </Button>
                    </Grid>
                </form>
                {showTab &&
                    <EmojiPicker
                        width="100%"
                        height="300px"
                        previewConfig={{
                            showPreview: false // defaults to: true
                        }}
                        suggestedEmojisMode="recent"
                        onEmojiClick={(emojiData, event) => {
                            let newValue = messageContent + emojiData.emoji
                            setMessageContent(newValue)
                        }}
                    />
                }
                {/* <EmojiPicker
                        width="100%"
                        height="300px"
                        previewConfig={{
                            showPreview: false // defaults to: true
                        }}
                        suggestedEmojisMode="recent"
                    /> */}
            </Paper>
        </Grid>
    )
};

export default InputBar;