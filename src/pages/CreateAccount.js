import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from '../components/UserForm';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function CreateNewAccount() {
    const navigate = useNavigate()
    const [openDialog, setOpenDialog] = useState(false)

    const handleSubmitCreateUser = (form) => {
        const { loginId, password, displayName } = form;

        const { isValid, errMsg } = validate(form)
        if (isValid) {
            const params = {
                loginId: loginId,
                password: password,
                displayName: displayName
            }

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
        const { loginId, password, displayName } = userDetails

        if (!loginId.trim() || !password.trim() || !displayName.trim()) {
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

export default CreateNewAccount;