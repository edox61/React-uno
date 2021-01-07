import React, { useState } from 'react'

const TodoForm = () => {

    const initialFromValues = {
        title: '',
        description: ''
    }

    const [fromValues, setFromValues] = useState(initialFromValues)
    const { title, description } = fromValues;

    return (
        <div>
            <h1>Nueva Tarea</h1>
            <form>

                <input
                    type="text"
                    placeholder="Titulo"
                    className="form-control"
                    value={title}
                />

                <textarea
                    placeholder="Descripcion"
                    className="form-control mt-2"
                    value={description}
                />

                <button
                    className="btn btn-block btn-primary mt-2" >
                    Agregar Tarea
                </button>

            </form>
        </div>
    )
}

export default TodoForm
