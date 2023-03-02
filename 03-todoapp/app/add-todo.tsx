'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

async function addTodo(name:string,refresh:()=>void){
  await fetch('/api/todo/add',{
    method:"POST",
    body: JSON.stringify({name})
  });

  refresh();
}

export default function AddTodo() {
  const router = useRouter();
  let [name,setName] = useState("");
  return (
    <div>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <button onClick={async () => {await addTodo(name,router.refresh); setName("");}}>Add Todo</button>
  </div>
  )
}
