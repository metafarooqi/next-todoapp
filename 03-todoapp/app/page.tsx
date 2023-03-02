import React from "react";
import AddTodo from './add-todo';
import ToDoList from './todo-list';

function Home() {
  return (
   <div>
       
       {/* @ts-ignore */}
    <AddTodo />
    {/* @ts-expect-error Server Component */}
    <ToDoList />
   </div>
  );
}

export default Home
