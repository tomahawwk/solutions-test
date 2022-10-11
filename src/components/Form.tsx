import { useState, BaseSyntheticEvent, FC } from "react";
import { Button, TextField, styled } from "@mui/material";

import { FormProps, Mock } from "../types";

const StyledForm = styled('form')({
    borderBottom: '1px solid rgba(0,0,0,.2)',
    marginBottom: '30px',
    gap: '20px',
    justifyContent: 'space-between',
    display: 'flex',
    paddingBottom: '30px'
})

const StyledFormFields = styled('div')({
    gap: '20px',
    display: 'flex'
})

const Form:FC<FormProps> = ({ setTasks }) => {
    const [formState, setFormState] = useState<Mock>({
        type: '',
        description:'',
        timeToDo: 0,
    })

    const handleInputChange = (event:BaseSyntheticEvent) => {
        const target = event.target
        const name = target.name
        setFormState(prevState => ({...prevState, [name]: name === "timeToDo" ? Number(target.value) : target.value}));
    }

    const handleSubmit = (event:BaseSyntheticEvent) => {
        event.preventDefault();
        setTasks(prevState => {
            return [...prevState, formState]
        });
    }

    return(
        <StyledForm onSubmit={handleSubmit}>
            <StyledFormFields>
                <TextField
                    required
                    label="Task Type"
                    color="primary"
                    value={formState.type}
                    name='type'
                    onChange={handleInputChange}
                />
                <TextField
                    required
                    label="Description"
                    value={formState.description}
                    name='description'
                    onChange={handleInputChange}
                />
                <TextField
                    label="Time to do"
                    value={formState.timeToDo}
                    name='timeToDo'
                    type="number"
                    onChange={handleInputChange}
                />
            </StyledFormFields>
            <Button
                variant="contained"
                type='submit'
            >Add</Button>
        </StyledForm>
    )
}

export default Form;