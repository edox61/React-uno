import React, { useState } from 'react'
import Todo from "./Todo"

/*
const todo1 = {
    id: 1,
    title: "todo #1",
    description: "Desc del todo #1",
    completed: false
}

const todo2 = {
    id: 2,
    title: "todo #2",
    description: "Desc del todo #2",
    completed: false
}
*/

const initialTodos = [
    {
        id: 1,
        title: "todo #1",
        description: "Desc del todo #1",
        completed: false
    },

    {
        id: 2,
        title: "todo #2",
        description: "Desc del todo #2",
        completed: false
    }

]


const TodoList = () => {

    const [todo, setTodos] = useState(initialTodos)

    return (
        <div>
            <h1>Soy Todo List</h1>
            { todo.map(todo => <Todo todo={todo} key={todo.id} />)}

        </div >
    )
}

export default TodoList
