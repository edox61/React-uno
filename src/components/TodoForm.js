import React, { useState } from 'react'

const TodoForm = ({todoAdd}) => {

    const initialFromValues = {
        title: '',
        description: ''
    }

    const [fromValues, setFromValues] = useState(initialFromValues)
    const { title, description } = fromValues;

    const handelInputChange = (e) => {
   
        const changedFromValues={
            ...fromValues,
            [e.target.name]: e.target.value

        }
        console.log("e.target.name = "+[e.target.name]);
        console.log("e.target.value = "+e.target.value);
        console.log("changedFromValues = "+ JSON.stringify(changedFromValues));
        setFromValues(changedFromValues)
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("Submmit");
        todoAdd(fromValues);

    }

    return (
        <div>
            <h1>Nueva Tarea</h1>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Titulo"
                    className="form-control"
                    value={title}
                    name="title"
                    onChange={handelInputChange}
                />

                <textarea
                    placeholder="Descripcion"
                    className="form-control mt-2"
                    value={description}
                    name="description"
                    onChange={handelInputChange}
                ></textarea>

                <button
                    className="btn btn-block btn-primary mt-2" >
                    Agregar Tarea
                    
                </button>

            </form>
        </div>
    )
}

export default TodoForm
