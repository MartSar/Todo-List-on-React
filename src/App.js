
import { useState } from 'react';
import './App.css';
import TodoHead from './Components/TodoHead';
import TodoList from './Components/TodoList';
import TodoFooter from './Components/TodoFooter';

function App() {

  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Learn JSX",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Learn TS",
      isCompleted: false,
    }
  ]);

  return (
    <div className="App">
      <div className="container">
        <p className='title'>todos</p>
        <TodoHead onAdd={(text) => {
          setTodos([
            ...todos,
            {
              id: Math.random(),
              text: text,
              isCompleted: false,
            }
          ])
        }}/>
        <TodoList 
        todos={todos}
        onDelete={(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id))
        }}
        onChange={(newTodo) => {
          setTodos(todos.map((todo) => {
            if(todo.id === newTodo.id){
              return newTodo
            }
            return todo
          }))
        }}
        />
        <TodoFooter
        todos={todos}
        onClear={(todos) => {
          setTodos(todos.filter(todo => !todo.isCompleted))
        }}
        />
      </div>
    </div>
  );
}

export default App;
