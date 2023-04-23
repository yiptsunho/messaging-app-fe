import React, {useContext} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import PropTypes from "prop-types";
import { DialogContext } from '../App';

function CustomDialog(props, ref) {
    const defaultHandleClose = () => {
        dialogParam.current = {
            title: "testing title",
            content: "testing content",
            leftLabel: null,
            leftAction: null,
            rightLabel: null,
            rightAction: null

        }
        setOpenDialog(false);
    };
    const { openDialog, setOpenDialog, dialogParam } = useContext(DialogContext)
    const { title, content,
        leftLabel= "Cancel", leftAction = defaultHandleClose,
        rightLabel = "OK", rightAction = defaultHandleClose } = dialogParam.current;

    return (
        <Dialog
            open={openDialog}
            onClose={rightAction}
            PaperProps={{
                style: {
                    borderRadius: 15,
                    padding: '5px 10px'
                }
            }}
        >
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography
                        style={{ whiteSpace: 'pre-wrap' }}>
                        {content}
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={leftAction}>{leftLabel}</Button>
                <Button onClick={rightAction}>{rightLabel}</Button>
            </DialogActions>
        </Dialog >
    );
}

CustomDialog.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default CustomDialog;