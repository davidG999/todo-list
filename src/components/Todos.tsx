import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import AddTodo from "./AddTodo";
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
  const [task, setTask] = useState('');
  const todosLength = todos.length
  const hasTodos = todos.length > 0
  const remainingTodos = todos.filter(todo => !todo.isCompleted).length

  const handleAddTodo = (todo: Todo) => {
    const updatedTodos = [...todos, todo]
    setTodos(updatedTodos)
    setTask('')
  }

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement
    setTask(value)
  }

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault()

    const todo = {
      id: uuidv4(),
      task: task,
      isCompleted: false
    }

    task && handleAddTodo(todo)
  }

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  const handleCheckTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,

          isCompleted: !todo.isCompleted,
        }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <section>
      <AddTodo
        task={task}
        handleChange={handleChange}
        handleSubmitTodo={handleSubmitTodo}
      />

      {todos.map((todo) => (
        <Row key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCheckTodo={handleCheckTodo}
        />
      ))}
      
      {!hasTodos && (
        <p>Please add a todo!</p>
      )}
      
      {hasTodos && (
        <p>{`${remainingTodos} of ${todosLength} todos remaining`}</p>
      )}
      
    </section>
  )
}

export default Todos;