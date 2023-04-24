import React, { useState } from 'react';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';

let stompClient = null;
function NewMain() {
    const [userData, setUserData] = useState({
        username: "",
        receiverName: "",
        connected: false,
        message: ""
    })
    const [publicChats, setPublicChats] = useState([])
    const [privateChats, setPrivateChats] = useState(new Map())
    const [tab, setTab] = useState("CHATROOM")

    const handleUsername = (event) => {
        const { value } = event.target
        setUserData({ ...userData, username: value })
    }

    const handleChangeMessage = (event) => {
        let newMessage = event.target.value
        setUserData({ ...userData, message: newMessage })
    }

    const registerUser = () => {
        let sock = new SockJS("http://localhost:8080/ws")
        stompClient = over(sock)
        stompClient.connect({}, onConnected, onError)
    }

    const onConnected = () => {
        setUserData({ ...userData, connected: true })
        stompClient.subscribe("/chatroom/public", onPublicMessageReceived)
        stompClient.subscribe("/user/" + userData.username + "/private", onPrivateMessageReceived)
    }

    const onPublicMessageReceived = (payload) => {
        let payloadData = JSON.parse(payload.body)
        switch (payload.status) {
            case "JOIN":
                console.log("joined room")
                if (!privateChats.get(payload.senderName)) {
                    privateChats.set(payload.senderName, [])
                    setPrivateChats(new Map(privateChats))
                }
                break;
            case "MESSAGE":
                console.log("received a public message")
                publicChats.push(payloadData)
                setPublicChats([...publicChats])
                break;
        }
    }

    const onPrivateMessageReceived = (payload) => {
        let payloadData = JSON.parse(payload.body)
        if (privateChats.get(payload.senderName)) {
            privateChats.get(payload.senderName).push(payloadData)
            setPrivateChats(new Map(privateChats))
        } else {
            const list = [...payloadData]
            privateChats.set(payload.senderName, list)
            setPrivateChats(new Map(privateChats))
        }
        privateChats.push(payloadData)
        setPrivateChats([...privateChats])
    }

    const sendPublicMessage = () => {
        if (stompClient) {
            const { username, receiverName, message } = userData
            let chatMessage = {
                senderName: username,
                message: message,
                status: "MESSAGE"
            }

            stompClient.send('/app/message', {}, JSON.stringify(chatMessage))
            setUserData({ ...userData, "message": "" })
        }
    }

    const sendPrivateMessage = () => {
        if (stompClient) {
            const { username, receiverName, message } = userData
            let chatMessage = {
                senderName: username,
                receiverName: tab,
                message: message,
                status: "MESSAGE"
            }
            if (userData.username !== tab) {
                privateChats.set(tab).push(chatMessage)
                setPrivateChats(new Map(privateChats))
            }

            stompClient.send('/app/message', {}, JSON.stringify(chatMessage))
            setUserData({ ...userData, "message": "" })
        }
    }

    // const userJoin = () => {
    //     const username = userData.username
    //     let chatMessage = {
    //         senderName: username,
    //         status: "JOIN"
    //     }

    //     stompClient.send('/app/message', {}, JSON.stringify(chatMessage))
    // }

    const onError = (err) => {
        console.log(err)
    }

    return (
        <div className="container">
            {userData.connected ?
                <div className="chat-box">
                    <div className="member-list">
                        <ul>
                            <li
                                onClick={() => { setTab("CHATROOM") }}
                                className={`member ${tab === "CHATROOM" && "active"}`}
                            >
                                Chatroom
                            </li>
                            {privateChats.keys().map((name, index) => {
                                return (
                                    <li
                                        onClick={() => { setTab(name) }}
                                        className={`member ${tab === "CHATROOM" && "active"}`}
                                        key={index}
                                    >
                                        {name}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    {tab === "CHATROOM" &&
                        <div className="chat-content">
                            <ul className="chat-messages">
                                {publicChats.map((chat, index) => {
                                    return (
                                        <li className="message" key={index}>
                                            {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                                            <div className="message-data">{chat.message}</div>
                                            {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                                        </li>
                                    )
                                })}
                            </ul>

                            <div className="chat-messages">
                                <input
                                    type="text"
                                    className="input-message"
                                    placeholder="Enter a public message"
                                    value={userData.message}
                                    onChange={handleChangeMessage}
                                />
                                <button type="button" className="send-button" onClick={sendPublicMessage}>send</button>
                            </div>
                        </div>
                    }
                    {tab !== "CHATROOM" &&
                        <div className="chat-content">
                            <ul className="chat-messages">
                                {[...privateChats.get(tab)].map((chat, index) => {
                                    return (
                                        <li className="message" key={index}>
                                            {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                                            <div className="message-data">{chat.message}</div>
                                            {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}
                                        </li>
                                    )
                                })}
                            </ul>

                            <div className="chat-messages">
                                <input
                                    type="text"
                                    className="input-message"
                                    placeholder={`Enter a private message for ${tab}`}
                                    value={userData.message}
                                    onChange={handleChangeMessage}
                                />
                                <button type="button" className="send-button" onClick={sendPrivateMessage}>send</button>
                            </div>
                        </div>
                    }
                </div>
                :
                null
            }
            <div className="register">
                <input
                    id="username"
                    placeholder="Enter the username"
                    value={userData.username}
                    onChange={handleUsername}
                />
                <button type="button" onClick={registerUser}>
                    connect
                </button>
            </div>
        </div >
    )
};

export default NewMain;