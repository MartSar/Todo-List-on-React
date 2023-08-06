

export default function({todo, onDelete, onChange}){
  return(
    <div className="items">
      <input type="checkbox" className="chbx" checked={todo.isCompleted} onChange={(e) => {
           onChange({
            ...todo,
            isCompleted: e.target.checked
           })
          }}/>
      {todo.text}
      <button className="del" onClick={() => {onDelete(todo)}}>X</button>
    </div>
  )
}