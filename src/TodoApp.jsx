import { TodoAdd } from "./Components/TodoAdd";
import imageSun from "./images/icon-sun.svg";
import imageMoon from "./images/icon-moon.svg";
import { TodoList } from "./Components/TodoList";
import { useTodo } from "./Hooks/useTodo";



export const TodoApp = () => {

  const { todos, todosPending, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo();

  return (
    <main>

      <header className="header">
        <div className="title-container">
          <h1>TODO</h1>
          <img className="icon-swich" src={imageSun} />
        </div>
        <TodoAdd onNewTodo={handleNewTodo} />
      </header>

      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />

      <footer className="footer">
        <p>{todosPending} Items Left</p>
        <div className="options">
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>

        <p>Clear Completed</p>


      </footer>


    </main>
  )
}
