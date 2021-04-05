import React from 'react'
import Task from '../Task/Task'
import "./ListTask.css"
import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { doneTask, undoneTask } from '../../Actions'


function ListTask() {
    const todos = useSelector(state => state.todosReducer.todos);
    const dispatch = useDispatch();

    const handleDone = () => {
        // dispatching the toggle task action
        dispatch(doneTask())
    }

    const handleUndone = () => {
        dispatch(undoneTask())
    }

    const reset = () => {
        dispatch(undoneTask())
    }


    return (
        <div className="listTask">
            <div className="filter_btns" style={{ marginBottom: "25px" }}>
                <Button onClick={handleDone} variant="outline-success" >Show Done</Button>
                <Button onClick={handleUndone} variant="outline-danger" > Show Not Done</Button>
                <Button onClick={reset} variant="info">Remove All Filters</Button>
            </div>
            {todos.map((task, index) => (<Task toDo_task={task} key={index} index={index} />))}
        </div >
    )
}

export default ListTask
