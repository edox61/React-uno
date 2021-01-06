import React from 'react'

const Todo = ({ todo, todoDelete }) => {

    //const { todo } = props;

    return (

        <div className="card mt-2">
            <div className="card-body border border-primary">
                <h3 className="card-title text-right">
                    {todo.title}
                    <button className="btn btn-sm btn-outline-success ml-2">
                        Terminar
                    </button>
                </h3>
                <p className="card-text text-right">
                    {todo.description}
                </p>
                <hr color="blue" />

                <div className="d-flex justify-content-end">
                    <button className=" btn btn-sm btn-outline-primary mr-2">
                        Editar
                    </button>
                    <button
                        onClick={() => todoDelete(todo.id)}
                        className="btn btn-sm btn-outline-danger">
                        Eliminar
                    </button>
                </div>

            </div>
        </div>


    )
}

export default Todo
