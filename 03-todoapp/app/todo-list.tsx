import { Suspense } from 'react';
import Todo from './todo';

const getTodos = async () => {
    const res = await fetch("https://json-api-snowy.vercel.app/api/todo/list");
    return res.json();    
}

async function ToDoList() {
    const {todos} = await getTodos(); 
    //console.log(todos);
  return (
    <>
 
      <div>
      <Suspense fallback={<div>Loading...</div>}>
    <ul style={{ listStyleType:"none" }}>
    {todos.map((t:any) => {
        return (
            <li key={t.id}>
               <Todo todo={t} />
            </li>
        );
    })}
     </ul>
     </Suspense>
  </div>
    </>
  )
}

export default ToDoList