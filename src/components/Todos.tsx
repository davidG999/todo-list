import { useState } from "react";
import Row from "./Row";

const Todos = () => {
  type Todo = {
    id: string
    task: string
    isCompleted: boolean
  }

  const staticData = [
    {
      id: "0",
      title: "Task 1",
      task: "Do laundry 1",
      isCompleted: false,
    },
    {
      id: "1",
      title: "Task 2",
      task: "Do laundry 2",
      isCompleted: false,
    },
    {
      id: "2",
      title: "Task 2",
      task: "Do laundry 3",
      isCompleted: false,
    },
  ]
  const [todos, setTodos] = useState<Todo[]>(staticData);

  const handleDeleteTodo  = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }
  
  return (
    <section>
      {todos.map((todo) => (
        <Row key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} />
      ))}
    </section>
  )
}

export default Todos;