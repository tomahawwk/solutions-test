import { IconButton, styled } from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';
import { Mock } from "../types";
import { FC } from "react";

const StyledTaskItem = styled('div')({
    display:'grid',
    alignItems:'center',
    backgroundColor: 'lightgrey',
    borderRadius:10,
    boxShadow:'10px, 10px, 10px grey',
    padding:'15px 20px',
    textAlign:'left',
    gridTemplateColumns: '200px 1fr 200px 150px',
    gap: '20px'
});

const StyledTaskItemPart = styled('div')({
    display: 'flex',
    justifyContent: 'flex-end'
})

const TaskItem:FC<Mock> = ({ type, description, timeToDo, customEvent }) => {

    const remove = () => {
        if(customEvent)
            customEvent();
    }

    return (
        <StyledTaskItem>
            <div>{type}</div>
            <div>{description}</div>
            <div>{timeToDo}</div>
            <StyledTaskItemPart>
                <IconButton
                    aria-label="close"
                    onClick={remove}
                    sx={{
                        color: (theme) => theme.palette.grey[500],
                    }}>
                    <CloseIcon />
                </IconButton>
            </StyledTaskItemPart>
        </StyledTaskItem>
    )
};

export default TaskItem;