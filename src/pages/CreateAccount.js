import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from '../components/UserForm';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { register } from '../apis//UserApi'
import {DialogContext} from "../App";

function CreateAccount() {
    const navigate = useNavigate()
    // const [openDialog, setOpenDialog] = useState(false)
    const { setOpenDialog, dialogParam } = useContext(DialogContext)

    const handleSubmitCreateUser = (form) => {
        const { emailAddress, password, displayName } = form;

        const { isValid, errMsg } = validate(form)
        if (isValid) {
            let params = {}
            const payload = {
                emailAddress: emailAddress,
                password: password,
                displayName: displayName,
                avatar: null
            }
            params.payload = payload
            params.successCallback = (res) => {
                dialogParam.current.title = res.data.status?.toUpperCase()
                dialogParam.current.content = res.data.message
                dialogParam.current.rightAction = () => { navigate("/") }
                setOpenDialog(true)

            }
            params.failCallback = (err) => {
                dialogParam.current.title = err.data.status?.toUpperCase()
                dialogParam.current.content = err.data.message
                setOpenDialog(true)
            }
            console.log("calling register api")
            register(params)
            // createNewAccount(params, setOpenDialog, dialogTitle, dialogContent, dialogRightAction, navigate)

        } else {

            setOpenDialog(true)
            // dialogTitle.current = USER.WARNING
            // dialogContent.current = errMsg

        }
    }

    const validate = (userDetails) => {
        let isValid = true
        let errMsg = ''
        const { emailAddress, password, displayName } = userDetails
        console.log(userDetails)
        if (!emailAddress.trim() || !password.trim() || !displayName.trim()) {
            isValid = false
            errMsg = 'Please input all mandatory field(s)'
        }

        return ({ isValid, errMsg })
    }

    const handleCreateNewAccount = (params) => {
        // createNewAccount(params, setOpenDialog, dialogTitle, dialogContent, dialogRightAction, navigate)
    }

    return (
            <Container maxWidth="md">
                <CssBaseline />
                <UserForm
                    handleSubmit={handleSubmitCreateUser}
                    formTitle='Create new account'
                />
                <br />
                <br />
                <br />
                <br />
                {/*<Container maxWidth="sm">*/}
                {/*    <h1>You can generate your own customized password here!</h1>*/}
                {/*    <GeneratePassword />*/}
                {/*</Container>*/}
                {/*<CustomDialog.js*/}
                {/*    open={openDialog}*/}
                {/*    setOpen={setOpenDialog}*/}
                {/*    title={dialogTitle.current}*/}
                {/*    content={dialogContent.current}*/}
                {/*    rightLabel='Confirm'*/}
                {/*    rightAction={dialogRightAction.current}*/}
                {/*    leftLabel='Cancel'*/}
                {/*/>*/}
        </Container>
    )
}

export default CreateAccount;