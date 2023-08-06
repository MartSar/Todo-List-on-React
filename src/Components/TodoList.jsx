
import TodoItem from './TodoItem'

export default function TodoList({todos, onDelete, onChange}){

  return (  
    <div>
      {
        todos.map((todo) => {
          return (
            <TodoItem 
              key={todo.id} 
              todo={todo}
              onDelete={onDelete}
              onChange={onChange}
              />
          )
        })
      }
    </div>
  )
} 