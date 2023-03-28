import { Container, Grid, Paper } from "@mui/material";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import LeftPanel from "./leftPanel/LeftPanel";
import MiddlePanel from "./middlePanel/MiddlePanel";
import RightPanel from "./rightPanel/RightPanel";
import { over } from 'stompjs';
import SockJS from "sockjs-client";
import { useLocation } from "react-router-dom";
import { DialogContext } from "../../App";
import { MAIN_BORDER_RADIUS } from '../../utils/Constants'
import * as _ from 'lodash';
import Fetching from "../Fetching";

export const MainContext = createContext({});

function Main() {
    const { userId } = useLocation().state
    const [rightPanelCollapsed, setRightPanelCollapsed] = useState(true)
    const [receiverData, setReceiverData] = useState(null)
    const [userData, setUserData] = useState({
        senderId: userId,
        receiverId: "",
        connected: false,
        message: ""
    })
    const [publicChats, setpublicChats] = useState([])
    const [privateChats, setprivateChats] = useState(new Map())
    const { setOpenDialog } = useContext(DialogContext)
    let dialogParams;
    const toggleRightPanel = () => {
        setRightPanelCollapsed(!rightPanelCollapsed)
    }
    let stompClient = null

    useEffect(() => {
        connectWs()
    }, [])

    const connectWs = () => {
        const Sock = new SockJS("http://localhost:3000/ws")
        stompClient = over(Sock)
        stompClient.connect({}, connectSuccessCallback, connectFailCallback)
    }

    const connectSuccessCallback = () => {
        setUserData({ ...userData, "connected": true })
        stompClient.subscribe("/chatroom/public", onPublicMessageReceived)
        stompClient.subscribe(`/user/${userData.senderId}/private`, onPrivateMessageReceived)
        userJoin()
    }

    const userJoin = () => {
        if (stompClient) {
            const chatMessage = {
                senderId: userId,
                status: "JOIN"
            };
            stompClient.send("/app/message", {}, JSON.stringify(chatMessage))
        }
    }

    const connectFailCallback = (err) => {
        console.log(err)
        dialogParams = {
            title: "Warning",
            content: "Connection failed, please retry",
            rightButton: "Retry",
            rightAction: () => connectWs()
        }
        setOpenDialog(true)
    }

    const onPublicMessageReceived = (responseData) => {
        const newMessage = JSON.parse(responseData.body)
        switch (responseData.status) {
            case "JOIN":

                break;
            case "MESSAGE":
                const newpublicChats = _.cloneDeep(publicChats)
                newpublicChats.push(newMessage)
                setpublicChats(newpublicChats)
                break;
            case "LEAVE":

                break;
            default: return null;
        }
    }

    const onPrivateMessageReceived = (responseData) => {
        const newprivateChats = _.cloneDeep(privateChats)
        const newMessage = JSON.parse(responseData.body)

        if (privateChats.get(newMessage.senderId)) {
            privateChats.get(newMessage.senderId).push(newMessage)
            setprivateChats(new Map(newprivateChats))
        } else {
            privateChats.set(newMessage.senderId, [newMessage])
        }
        setprivateChats(new Map(newprivateChats))
    }

    const sendPublicMessage = () => {
        if (stompClient) {
            const chatMessage = {
                senderId: userId,
                message: "Dummy message",
                status: "MESSAGE"
            };
            stompClient.send("/app/message", {}, JSON.stringify(chatMessage))
        }
    }

    const sendPrivateMessage = () => {
        if (stompClient) {
            const chatMessage = {
                senderId: userId,
                receiverId: userData.receiverId,
                message: "Dummy message",
                status: "MESSAGE"
            };
            stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage))
        }
    }

    return (
        <div>
            {
                userData.connected ?
                    <div>
                        {
                            publicChats.map(chat => {
                                return (
                                    <li>
                                        chat
                                    </li>
                                )
                            })
                        }
                        <input></input>
                        <button onClick={sendPrivateMessage}>Send Message</button>
                    </div>
                    : "Connecting..."
            }
        </div>
        // <MainContext.Provider value={{ rightPanelCollapsed, toggleRightPanel, publicChats, privateChats, receiverData, setReceiverData }}>
        //     {!userData.connected ? <Fetching /> :
        //     <Container maxWidth="xl" sx={{ height: "100vh", minHeight: "700px", display: "flex", alignItems: "center" }} >
        //         <Grid sx={{ height: "95vh", width: "100%" }}>
        //                 <Paper elevation={3} sx={{ borderRadius: MAIN_BORDER_RADIUS, height: "100%" }}>
        //                 <Grid container sx={{ height: "100%", paddingY: "1rem" }}>
        //                     <Grid container sx={{ height: "100%" }}>
        //                             <Grid md={3} sx={{ borderTopLeftRadius: MAIN_BORDER_RADIUS, borderBottomLeftRadius: MAIN_BORDER_RADIUS }}>
        //                             <LeftPanel />
        //                         </Grid>
        //                             <Grid md={rightPanelCollapsed ? 8 : 6} sx={{ borderTopRightRadius: MAIN_BORDER_RADIUS, borderBottomLeftRadius: MAIN_BORDER_RADIUS }}>
        //                             <MiddlePanel />
        //                         </Grid>
        //                         <Grid md={rightPanelCollapsed ? 1 : 3}>
        //                             <RightPanel />
        //                         </Grid>
        //                     </Grid>
        //                 </Grid>
        //             </Paper>
        //         </Grid>
        //     </Container>
        //     }
        // </MainContext.Provider>
    )
};

export default Main;