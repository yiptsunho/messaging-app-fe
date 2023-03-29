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
    const [privateChats, setPrivateChats] = useState([])
    const roomRef = useRef(null)
    let dialogParams;
    const { setOpenDialog } = useContext(DialogContext)
    const isGroup = false

    useEffect(() => {
        socket.on("receive_message", (data) => {
            // if (data?.isGroup) {
            //     const newGroupChats = _.cloneDeep(groupChats)
            //     newGroupChats.push(data.content)
            //     setGroupChats(newGroupChats)
            // } else {
            const newPrivateChats = _.cloneDeep(privateChats)
            newPrivateChats.push(data.content)
            setPrivateChats(newPrivateChats)
            // }
        })
    }, [socket])

    const sendMessage = (msg) => {
        console.log(msg)
        socket.emit("send_message", {
            message: msg,
            room: roomRef.current
        })
    }

    const joinRoom = () => {
        if (roomRef.current !== "") {
            console.log(roomRef.current)
            socket.emit("join_room", roomRef.current)
        }
    }

    return (
        <MainContext.Provider value={{ rightPanelCollapsed, toggleRightPanel, groupChats, privateChats, roomRef, sendMessage, joinRoom }}>
            {!socket.connected ? <Fetching /> :
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