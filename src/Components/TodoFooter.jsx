


export default function TodoFooter({todos, onClear}){

  const completed = todos.filter(todo => todo.isCompleted === true).length

  return (
    <div className="footer">
      {completed}/{todos.length} Completed
      <button className="clear" onClick={() => {onClear(todos)}}>Clear completed</button>
    </div>
  )

}