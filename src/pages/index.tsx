import {Container} from "@mui/material";
import TaskList from "../components/TaskList";
import Form from "../components/Form";
import {useState} from "react";
import taskMock from "../mocks/taskMock";
import { Mock } from "../types";

const MainPage = () => {
    const [tasks, setTasks] = useState<Mock[]>(taskMock)

    return(
        <Container sx={{pt:5, textAlign:'left'}}>
            <h2>Add Task</h2>
            <Form setTasks={setTasks}/>
            <h2>Tasks List</h2>
            <TaskList tasks={tasks} setTasks={setTasks}/>
        </Container>
    )
}

export default MainPage