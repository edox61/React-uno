import React from 'react'
import Todo from "./Todo"



const TodoList = ({ todos, todoDelete }) => {

    return (
        <div>
            <h1>Soy Todo List</h1>
            { todos.map(todo => (
                <Todo
                    todo={todo}
                    key={todo.id}
                    todoDelete={todoDelete}
                />

            ))

            }

        </div >
    );
}

export default TodoList
