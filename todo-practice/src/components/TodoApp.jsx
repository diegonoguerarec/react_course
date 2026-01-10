import React, {useState} from "react";

const TodoApp = (props) => {

    const[todos, setTodos] = useState([]);
    const[inputTitle, setInputTitle] = useState('');
    const[inputDesc, setInputDesc] = useState('');

    const handleAdd = () => {
        if (inputTitle !== '' && inputDesc !== '' && inputTitle.trim() !== '' && inputDesc.trim() !== '') {
            let newTodos = [...todos];
            newTodos.push({title: inputTitle.trim(), desc: inputDesc.trim()});
            setTodos(newTodos);
            setInputTitle('');
            setInputDesc('');
        } else {
            alert("Title and description are required");
        }
    };

    const handleDelete = (index) => {
        let newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <>
            <h2>{props.title}</h2>
            <div>
                    <fieldset>
                        <legend>Add Todo</legend>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} /> 
                        <br />
                        <label htmlFor="desc">Description</label>
                        <input type="text" id="desc" value={inputDesc} onChange={(e) => setInputDesc(e.target.value)}/>

                        <br />

                        <button onClick={handleAdd}>Add</button>
                    </fieldset>
            </div>
                
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.title}</td>
                            <td>{todo.desc}</td>
                            <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                        </tr>
                    ))}
                    </tbody>
                    

                </table>
            </div>
        </>
    );

};

export default TodoApp;