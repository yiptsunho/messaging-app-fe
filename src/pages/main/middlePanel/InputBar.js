import React, { useContext, useRef, useState } from 'react';
import { IconButton, TextField, InputBase, Divider, Grid, Paper, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import StickerIcon from '@mui/icons-material/AutoAwesomeMotion';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import FileIcon from '@mui/icons-material/InsertDriveFile';
import { MiddlePanelContext } from './MiddlePanel';
import { MainContext } from '../Main';

function InputBar() {
    const [hasFile, setHasFile] = useState(false)
    const { sendMessage } = useContext(MiddlePanelContext)
    const currentUser = window.sessionStorage.getItem('username')
    const messageContent = useRef(null)

    return (
        <Grid container sx={{ padding: "1rem" }}>
            <Paper elevation={2} sx={{ width: "100%", padding: "0.5rem", borderRadius: "0.5rem" }}>
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
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <AddIcon />
                        </IconButton>
                        {hasFile &&
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <FileIcon />
                            </IconButton>
                        }
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Type here.."
                            inputRef={messageContent}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <StickerIcon />
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
                            sx={{ p: '10px', minWidth: "unset", borderRadius: "10px" }}>
                            <SendIcon />
                        </Button>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    )
};

export default InputBar;