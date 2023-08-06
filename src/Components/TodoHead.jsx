import { useState } from "react";

export default function TodoForm({onAdd}){

  const [text, setText] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onAdd(text);
      setText("");
    }}>
        <input type='text' value={text} onChange={(e) => {
          setText(e.target.value)
        }}/>
        <button className='add'>Add</button>
    </form>
  )
}