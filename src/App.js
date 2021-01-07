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
    },


]

const App = () => {

    const [todos, setTodos] = useState(initialTodos)

    /*Funcion Borrar */
    const TodoDelete = (todoId) => {
        const changedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(changedTodos);
    }

    /* Funcion Terminar*/
    const todoToogleCompleted = (todoId) => {
        const changedTodos = todos.map(todo => {

            const todoEdit = {
                ...todo,
                completed: !todo.completed

            }

            if (todo.id === todoId) {
                return todoEdit

            } else {

                return todo
            }

        })

        setTodos(changedTodos);
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-8">
                    <TodoList
                        todos={todos}
                        todoDelete={TodoDelete}
                        todoToogleCompleted={todoToogleCompleted}
                    />
                </div>
                <div className="col-4">
                    <TodoForm />
                </div>
            </div>

        </div>
    )
}

export default App;
