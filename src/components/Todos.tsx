import Row from "./Row";

const Todos = () => {
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

  return (
    <section>
      {staticData.map((todo) => (
        <Row key={todo.id} todo={todo} />
      ))}
    </section>
  )
}

export default Todos;