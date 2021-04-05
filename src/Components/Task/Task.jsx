import React from 'react'
import { Button } from "react-bootstrap"
import EditTask from "../EditTask/EditTask"
import "./Task.css"
import { useDispatch } from "react-redux"
import { toggleTask } from "../../Actions"

function Task({ toDo_task, index }) {

    const dispatch = useDispatch()

    const handleClick = () => {
        // dispatching the toggle task action
        dispatch(toggleTask({ id: toDo_task.id }))
    }
    return (
        <div className="task">

            <h4 style={{ textDecoration: toDo_task.isDone ? "line-through" : "none" }}><span className="Task_Number">Task {Number(index) + 1}:</span> {toDo_task.task}</h4>
            <div className="taskBtns">
                <Button variant={toDo_task.isDone ? "outline-danger" : "success"} onClick={handleClick}>{toDo_task.isDone ? "Undo" : "Done"}</Button>
                <EditTask toDo_task={toDo_task} />
            </div>
        </div>
    )
}

export default Task
