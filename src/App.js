import React, { Component } from 'react';
import './App.css';
// import TodoForm from './components/TodoForm';
import Todo from './components/Todo';

// Component1
// const Todo = ({ todo , index, completeTodo,removeTodo}) => {
//   return (
//     <div className="todo"
//     style = {{ textDecoration: todo.isCompleted? "line-through" : ""}}>
//       {todo.text}
//       <div> 
//         {!todo.isCompleted ? <button onClick = {() => completeTodo(index)}>Complete</button> : null }
//         <button onClick = {() => removeTodo(index)}>X</button>
//       </div>
//     </div>
//   )
// }
// Component2
const TodoForm = ({addTodo}) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        className="input"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </form>
  );
  
}


function App() {
  // states
  const [todos, setTodos] = React.useState([
    { text: "todo1" , isCompleted: false},
    { text: "todo2" , isCompleted: false},
    { text: "todo3" , isCompleted: false}
  ])
//  methods
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  };
// templtes
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo = {completeTodo}
            removeTodo = {removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>


  );
}

export default App;