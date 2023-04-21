import { Container, Grid, Paper } from "@mui/material";
import React, { createContext, useContext, useEffect, useState } from "react";
import LeftPanel from "./leftPanel/LeftPanel";
import MiddlePanel from "./middlePanel/MiddlePanel";
import RightPanel from "./rightPanel/RightPanel";
import { useLocation } from "react-router-dom";
import { DialogContext } from "../../App";
import { MAIN_BORDER_RADIUS } from '../../utils/Constants'
import cloneDeep from 'lodash/cloneDeep';
import Fetching from "../Fetching";
import { io } from "socket.io-client";
import PRIVATE_CHATS from '../../utils/PrivateChats.json'


const SOCKET_URL = 'http://localhost:8081';
const socket = io.connect(SOCKET_URL)

export const MainContext = createContext({});

function Main() {
    const { userId } = useLocation().state
    const [rightPanelCollapsed, setRightPanelCollapsed] = useState(true)
    const toggleRightPanel = () => {
        setRightPanelCollapsed(!rightPanelCollapsed)
    }
    const [groupChats, setGroupChats] = useState([])
    // const [privateChats, setPrivateChats] = useState([])
    const [privateChats, setPrivateChats] = useState(PRIVATE_CHATS)
    const [currentRoom, setCurrentRoom] = useState(null)
    const { setOpenDialog } = useContext(DialogContext)
    const isGroup = false

    useEffect(() => {
        joinRoom(window.sessionStorage.getItem('userId'))
        // if (privateChats.length === 0) {
        //     const params = {
        //         userId: window.sessionStorage.getItem('userId')
        //     }
        //     getMessageHistory(params)
        // }
    }, [])

    useEffect(() => {
        socket.on("receive_message", (data) => {
            // data = {
            //     message: {
            //         content: "This is the 3rd message",
            //         dateTime: "2023-03-28 12:02:00",
            //         type: "Text",
            //         senderId: currentRoom
            //     },
            //     room: currentRoom
            // }
            // if (data?.isGroup) {
            //     const newGroupChats = cloneDeep(groupChats)
            //     newGroupChats.push(data.content)
            //     setGroupChats(newGroupChats)
            // } else {
            const newPrivateChats = cloneDeep(privateChats)
            if (newPrivateChats.find(chat => chat.roomId === data.room)) {
                newPrivateChats.find(chat => chat.roomId === data.room).messageList.push(data.message)
            } else {
                // newPrivateChats.find(chat => chat.roomId === data.room).message.push(data.message)
            }
            setPrivateChats(newPrivateChats)
            // }
        })
    }, [socket])

    const sendMessage = (msg) => {
        const params = {
            message: {
                content: msg.content,
                dateTime: msg.dateTime,
                type: msg.type,
                senderId: window.sessionStorage.getItem('userId')
            },
            room: currentRoom
        }
        socket.emit("send_message", params)
        // const newPrivateChats = cloneDeep(privateChats)
        // if (newPrivateChats.find(chat => chat.roomId === params.room)) {
        //     newPrivateChats.find(chat => chat.roomId === params.room).messageList.push(params.message)
        // } else {
        //     // newPrivateChats.find(chat => chat.roomId === data.room).message.push(data.message)
        // }
        // setPrivateChats(newPrivateChats)
    }

    const joinRoom = (roomId) => {
        if (roomId !== null) {
            console.log(roomId)
            socket.emit("join_room", roomId)
        }
    }

    return (
        <MainContext.Provider value={{ rightPanelCollapsed, toggleRightPanel, groupChats, privateChats, currentRoom, setCurrentRoom, sendMessage, joinRoom }}>
            {!socket?.connected ? <Fetching /> :
                <Container maxWidth="xl" sx={{ height: "100vh", minHeight: "700px", display: "flex", alignItems: "center" }} >
                    <Grid sx={{ height: "95vh", width: "100%" }}>
                        <Paper elevation={3} sx={{ borderRadius: MAIN_BORDER_RADIUS, height: "100%" }}>
                            <Grid container sx={{ height: "100%", paddingY: "1rem" }}>
                                <Grid container sx={{ height: "100%" }}>
                                    <Grid md={3} sx={{ borderTopLeftRadius: MAIN_BORDER_RADIUS, borderBottomLeftRadius: MAIN_BORDER_RADIUS }}>
                                        <LeftPanel />
                                    </Grid>
                                    <Grid md={rightPanelCollapsed ? 8 : 6} sx={{ borderTopRightRadius: MAIN_BORDER_RADIUS, borderBottomLeftRadius: MAIN_BORDER_RADIUS }}>
                                        <MiddlePanel />
                                    </Grid>
                                    <Grid md={rightPanelCollapsed ? 1 : 3}>
                                        <RightPanel />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Container>
            }
        </MainContext.Provider>
    )
};

export default Main;