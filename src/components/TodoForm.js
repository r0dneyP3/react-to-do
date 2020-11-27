import React from 'react';

const TodoForm = props => {
    const [value, setValue] = React.useState("");
    
    const handleSubmit = event => {
        event.preventDefault();
        if (!value) return
        // Call addTodo from props
        props.addTodo(value);
        setValue("");

    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                    className = "input"
                    value = {value}
                    onChange = {event => setValue(event.target.value)}
            />
        </form>
    );
} 

export default TodoForm;


