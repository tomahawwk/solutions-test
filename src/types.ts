import { Dispatch, SetStateAction } from "react";

export interface Mock {
    type: string;
    description: string;
    timeToDo: number;
    customEvent?: () => void;
}

export interface TaskListProps {
    tasks: Mock[];
    setTasks: Dispatch<SetStateAction<Mock[]>>;
}

export interface FormProps {
    setTasks:Dispatch<SetStateAction<Mock[]>>
}

export enum Sort {
    DESC = 'desc',   
    ASC = 'asc'
}
