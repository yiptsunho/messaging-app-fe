import { Container, Grid, Paper } from "@mui/material";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import LeftPanel from "./leftPanel/LeftPanel";
import MiddlePanel from "./middlePanel/MiddlePanel";
import RightPanel from "./rightPanel/RightPanel";
import { useLocation } from "react-router-dom";
import { DialogContext } from "../../App";
import { MAIN_BORDER_RADIUS } from '../../utils/Constants'
import * as _ from 'lodash';
import Fetching from "../Fetching";
import { io } from "socket.io-client";
import PRIVATE_CHATS from '../../utils/PrivateChats.json'

const SOCKET_URL = 'http://localhost:8081';
const socket = io.connect(SOCKET_URL, { autoConnect: false })

export const MainContext = createContext({});

function Main() {
    const [rightPanelCollapsed, setRightPanelCollapsed] = useState(true)
    const toggleRightPanel = () => {
        setRightPanelCollapsed(!rightPanelCollapsed)
    }
    const [groupChats, setGroupChats] = useState([])
    // const [privateChats, setPrivateChats] = useState([])
    const [privateChats, setPrivateChats] = useState(PRIVATE_CHATS)
    const [currentRoom, setCurrentRoom] = useState(null)
    const { setOpenDialog } = useContext(DialogContext)

    useEffect(() => {
        socket.auth = { userId: window.sessionStorage.getItem('userId'), loginId: window.sessionStorage.getItem('loginId') }
        socket.connect()
    }, [])

    useEffect(() => {
        socket.on("receive_message", (data) => {
            const newPrivateChats = _.cloneDeep(privateChats)
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
        const newPrivateChats = _.cloneDeep(privateChats)
        if (newPrivateChats.find(chat => chat.roomId === msg.room)) {
            newPrivateChats.find(chat => chat.roomId === msg.room).messageList.push(msg.message)
        } else {
            // newPrivateChats.find(chat => chat.roomId === data.room).message.push(data.message)
        }
    }

    const joinRoom = (props) => {
        const { roomId, receiverId } = props;
        if (roomId !== null && receiverId !== null) {
            socket.emit("join_room", props)
        }
        window.sessionStorage.setItem('receiverId', receiverId)
    }

    return (
        <MainContext.Provider value={{ rightPanelCollapsed, toggleRightPanel, groupChats, privateChats, currentRoom, setCurrentRoom, sendMessage, joinRoom }}>
            {/* {!socket?.connected ? <Fetching /> : */}
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
            {/* } */}
        </MainContext.Provider>
    )
};

export default Main;