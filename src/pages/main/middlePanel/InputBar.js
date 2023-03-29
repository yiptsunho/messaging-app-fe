import React, { useContext, useRef, useState } from 'react';
import { IconButton, InputBase, Grid, Paper, Button, useMediaQuery } from "@mui/material";
import StickerIcon from '@mui/icons-material/AutoAwesomeMotion';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import FileIcon from '@mui/icons-material/InsertDriveFile';
import { MainContext } from '../Main';

function InputBar() {
    const [hasFile, setHasFile] = useState(false)
    const { sendMessage } = useContext(MainContext)
    const currentUser = window.sessionStorage.getItem('username')
    const messageContent = useRef(null)
    const lg = useMediaQuery('(max-width:1200px)')

    return (
        <Grid container sx={{ paddingLeft: "1rem", paddingRight: "1rem", paddingBottom: "1rem" }}>
            <Paper elevation={3} sx={{ width: "100%", padding: "0.5rem", borderRadius: "1rem" }}>
                <form
                    type="submit"
                    onSubmit={(event) => {
                        event.preventDefault()
                        if (messageContent.current.value) {
                            const newMessage = {
                                id: 4,
                                type: "text",
                                content: messageContent.current.value,
                                time: "",
                                from: currentUser
                            }
                            sendMessage(newMessage)
                            messageContent.current.value = null
                        }
                    }}>
                    <Grid container>
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" size={lg ? "small" : "medium"}>
                            <AddIcon fontSize={lg ? "small" : "medium"} />
                        </IconButton>
                        {hasFile &&
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" size={lg ? "small" : "medium"}>
                                <FileIcon fontSize={lg ? "small" : "medium"} />
                            </IconButton>
                        }
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Type here.."
                            inputRef={messageContent}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" size={lg ? "small" : "medium"}>
                            <StickerIcon fontSize={lg ? "small" : "medium"} />
                        </IconButton>
                        {/* <Divider sx={{ height: "auto", m: 0.5 }} orientation="vertical" /> */}
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={() => {
                                if (messageContent.current.value) {
                                    const newMessage = {
                                        id: 4,
                                        type: "text",
                                        content: messageContent.current.value,
                                        time: "",
                                        from: currentUser
                                    }
                                    sendMessage(newMessage)
                                    messageContent.current.value = null
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
            </Paper>
        </Grid>
    )
};

export default InputBar;