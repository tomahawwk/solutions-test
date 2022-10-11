import { FC, useEffect, useState } from "react";
import { orderBy } from 'lodash';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, styled } from "@mui/material";

import TaskItem from "./TaskItem";
import { Sort, TaskListProps } from "../types";

const StyledTaskList = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
})

const StyledTaskListHeader = styled('div')({
    display:'grid',
    alignItems:'center',
    textAlign:'left',
    justifyContent:'flex-start',
    padding:'0 20px',
    gridTemplateColumns: '200px 1fr 200px 150px',
    gap: '20px'
});

const StyledTaskListWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
})

const StyledTaskListEmpty = styled('div')({
    borderTop: '1px solid rgba(0,0,0,.2)',
    width: '100%',
    paddingTop: '20px'
})

const TaskList:FC<TaskListProps> = ({tasks, setTasks}) => {
    const [sort, setSort] = useState<Sort>(Sort.ASC);
 
    const sortableList = () => {
        return orderBy(tasks, 'timeToDo', sort);
    }

    useEffect(() => {
        setTasks(sortableList);
    }, [sort])

    const selectSort = (event: SelectChangeEvent) => {
        setSort(event.target.value as Sort);
    };

    const removeTask = (index: number) => {
        setTasks(tasks.filter((item, itemIndex) => { return index != itemIndex}));
    }

    return(
        <StyledTaskList>
            <StyledTaskListHeader>
                <div>Type</div>
                <div>Description</div>
                <div>Time to do</div>
                <FormControl fullWidth>
                    <InputLabel>Sort by</InputLabel>
                    <Select
                        value={sort}
                        label="Sort by"
                        onChange={selectSort}
                    >
                        <MenuItem value={"desc"}>More time</MenuItem>
                        <MenuItem value={"asc"}>Less time</MenuItem>
                    </Select>
                </FormControl> 
            </StyledTaskListHeader>
            { tasks.length ?
                <StyledTaskListWrapper>
                    { tasks.map((task, index) => 
                        <TaskItem
                            key={index}
                            {...task}
                            customEvent={() => removeTask(index)}
                        />
                    ) }
                </StyledTaskListWrapper>
                :
                <StyledTaskListEmpty>Add tasks to the list :)</StyledTaskListEmpty>
            }
        </StyledTaskList>
    )
}

export default TaskList;