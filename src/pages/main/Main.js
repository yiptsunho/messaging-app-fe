import { Container, Grid, Paper } from "@mui/material";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import LeftPanel from "./leftPanel/LeftPanel";
import MiddlePanel from "./middlePanel/MiddlePanel";
import RightPanel from "./rightPanel/RightPanel";
import { DialogContext } from "../../App";
import { MAIN_BORDER_RADIUS } from '../../utils/Constants'
import * as _ from 'lodash';
import Fetching from "../Fetching";
import { io } from "socket.io-client";
import * as CONSTANTS from '../../utils/Constants'

const SOCKET_URL = CONSTANTS.SOCKET_URL
const socket = io.connect(SOCKET_URL, { autoConnect: false })

export const MainContext = createContext({});

function Main() {
    const [rightPanelCollapsed, setRightPanelCollapsed] = useState(true)
    const toggleRightPanel = () => {
        setRightPanelCollapsed(!rightPanelCollapsed)
    }
    const [privateChats, setPrivateChats] = useState([])
    const [currentRoom, setCurrentRoom] = useState(null)
    const { setOpenDialog } = useContext(DialogContext)

    useEffect(() => {
        socket.auth = { userId: window.sessionStorage.getItem('userId'), loginId: window.sessionStorage.getItem('loginId') }
        socket.connect()
    }, [])

    socket.on("receive_message", (data) => {
        const newPrivateChats = _.cloneDeep(privateChats)
        if (newPrivateChats.find(chat => chat.roomId === data.room && chat.receiverId != window.sessionStorage.getItem('userId'))) {
            newPrivateChats.find(chat => chat.roomId === data.room && chat.receiverId != window.sessionStorage.getItem('userId')).messageList.push(data.message)
        } else {
            // newPrivateChats.find(chat => chat.roomId === data.room).message.push(data.message)
        }
        setPrivateChats(newPrivateChats)
        // }
    })

    // 1 = Jacky, 2 = Henry, 3 = Timothy, 4 = Ashley, 5 = Gianna
    useEffect(() => {
        const newPrivateChats = _.cloneDeep(privateChats)
        switch (window.sessionStorage.getItem('userId')) {
            case "0001":
                newPrivateChats.push({
                    "roomId": "G0001",
                    "receiverId": ["0001", "0002", "0003"],
                    "receiverName": "Group",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": true
                })
                newPrivateChats.push({
                    "roomId": "00010002",
                    "receiverId": "0002",
                    "receiverName": "Henry",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": false
                })
                newPrivateChats.push({
                    "roomId": "00010003",
                    "receiverId": "0003",
                    "receiverName": "Timothy",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": false
                })
                newPrivateChats.push({
                    "roomId": "00010004",
                    "receiverId": "0004",
                    "receiverName": "Ashley",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": false
                })
                newPrivateChats.push({
                    "roomId": "00010005",
                    "receiverId": "0005",
                    "receiverName": "Gianna",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": false
                })
                break;
            case "0002":
                newPrivateChats.push({
                    "roomId": "G0001",
                    "receiverId": ["0001", "0002", "0003"],
                    "receiverName": "Group",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": true
                })
                newPrivateChats.push({
                    "roomId": "00010002",
                    "receiverId": "0001",
                    "receiverName": "Jacky",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": false
                })
                newPrivateChats.push({
                    "roomId": "00020003",
                    "receiverId": "0003",
                    "receiverName": "Timothy",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": false
                })
                newPrivateChats.push({
                    "roomId": "00020004",
                    "receiverId": "0004",
                    "receiverName": "Ashley",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": false
                })
                newPrivateChats.push({
                    "roomId": "00020005",
                    "receiverId": "0005",
                    "receiverName": "Gianna",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": false
                })
                break;
            case "0003":
                newPrivateChats.push({
                    "roomId": "G0001",
                    "receiverId": ["0001", "0002", "0003"],
                    "receiverName": "Group",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": true
                })
                newPrivateChats.push({
                    "roomId": "00010003",
                    "receiverId": "0001",
                    "receiverName": "Jacky",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": false
                })
                newPrivateChats.push({
                    "roomId": "00020003",
                    "receiverId": "0002",
                    "receiverName": "Henry",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": false
                })
                newPrivateChats.push({
                    "roomId": "00030004",
                    "receiverId": "0004",
                    "receiverName": "Ashley",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": false
                })
                newPrivateChats.push({
                    "roomId": "00040005",
                    "receiverId": "0005",
                    "receiverName": "Gianna",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": false
                })
                break;
            case "0004":
                newPrivateChats.push({
                    "roomId": "G0001",
                    "receiverId": ["0001", "0002", "0003"],
                    "receiverName": "Group",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": true
                })
                newPrivateChats.push({
                    "roomId": "00010004",
                    "receiverId": "0001",
                    "receiverName": "Jacky",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": false
                })
                newPrivateChats.push({
                    "roomId": "00020004",
                    "receiverId": "0002",
                    "receiverName": "Henry",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": false
                })
                newPrivateChats.push({
                    "roomId": "00030004",
                    "receiverId": "0003",
                    "receiverName": "Timothy",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": false
                })
                newPrivateChats.push({
                    "roomId": "00040005",
                    "receiverId": "0005",
                    "receiverName": "Gianna",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": false
                })
                break;
            case "0005":
                newPrivateChats.push({
                    "roomId": "G0001",
                    "receiverId": ["0001", "0002", "0003"],
                    "receiverName": "Group",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": true
                })
                newPrivateChats.push({
                    "roomId": "00010005",
                    "receiverId": "0001",
                    "receiverName": "Jacky",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": false
                })
                newPrivateChats.push({
                    "roomId": "00020005",
                    "receiverId": "0002",
                    "receiverName": "Henry",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": false
                })
                newPrivateChats.push({
                    "roomId": "00030005",
                    "receiverId": "0003",
                    "receiverName": "Timothy",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": false
                })
                newPrivateChats.push({
                    "roomId": "00040005",
                    "receiverId": "0004",
                    "receiverName": "Ashley",
                    "avatar": "",
                    "messageList": [],
                    "isGroup": false
                })
                break;
            default:
                break;
        }
        setPrivateChats(newPrivateChats)
    }, [])

    const sendMessage = async (msg) => {
        const params = {
            message: {
                content: msg.content,
                dateTime: msg.dateTime,
                type: msg.type,
                senderId: window.sessionStorage.getItem('userId')
            },
            room: currentRoom
        }
        await socket.emit("send_message", params)
        const newPrivateChats = _.cloneDeep(privateChats)
        if (newPrivateChats.find(chat => chat.roomId === params.room)) {
            newPrivateChats.find(chat => chat.roomId === params.room).messageList.push(params.message)
        } else {
            // newPrivateChats.find(chat => chat.roomId === data.room).message.push(data.message)
        }
        setPrivateChats(newPrivateChats)
    }

    const joinRoom = async (props) => {
        const { roomId, receiverId, isGroup } = props;
        if (roomId && receiverId && isGroup !== undefined) {
            await socket.emit("join_room", props)
        }
        // window.sessionStorage.setItem('receiverId', receiverId)
    }

    return (
        <MainContext.Provider value={{ rightPanelCollapsed, toggleRightPanel, privateChats, currentRoom, setCurrentRoom, sendMessage, joinRoom }}>
            {/* {!socket?.connected ? <Fetching /> : */}
            <Container maxWidth="xl" sx={{ height: "100vh", minHeight: "900px", display: "flex", alignItems: "center" }} >
                <Grid sx={{ height: "95%", width: "100%", minWidth: "1100px" }}>
                        <Paper elevation={3} sx={{ borderRadius: MAIN_BORDER_RADIUS, height: "100%" }}>
                            <Grid container sx={{ height: "100%", paddingY: "1rem" }}>
                                <Grid container sx={{ height: "100%" }}>
                                <Grid sm={3} sx={{ borderTopLeftRadius: MAIN_BORDER_RADIUS, borderBottomLeftRadius: MAIN_BORDER_RADIUS }}>
                                        <LeftPanel />
                                    </Grid>
                                <Grid sm={rightPanelCollapsed ? 8 : 6} sx={{ borderTopRightRadius: MAIN_BORDER_RADIUS, borderBottomLeftRadius: MAIN_BORDER_RADIUS }}>
                                        <MiddlePanel />
                                    </Grid>
                                <Grid sm={rightPanelCollapsed ? 1 : 3}>
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