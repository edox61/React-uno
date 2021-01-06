import React, { useState } from 'react'
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

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

const App = () => {

    const [todos, setTodos] = useState(initialTodos)

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-8">
                    <TodoList todos={todos} />
                </div>
                <div className="col-4">
                    <TodoForm />
                </div>
            </div>

        </div>
    )
}

export default App;
