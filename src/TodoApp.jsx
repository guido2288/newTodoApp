import { TodoAdd } from "./Components/TodoAdd";
import imageSun from "./images/icon-sun.svg";
import imageMoon from "./images/icon-moon.svg";
import { TodoList } from "./Components/TodoList";
import { useTodo } from "./Hooks/useTodo";
import { useState } from "react";



export const TodoApp = () => {

  const { todos, todosPending, handleDeleteTodo, handleToggleTodo, handleNewTodo, clearCompleted } = useTodo();

  const [theme, setTheme] = useState('');

  const handleTheme = () => {
    if (theme === '') {
      return setTheme('dark')
    }
    return setTheme('')
  };

  return (
    <main className={`main ${theme}`}>

      <header className="header">
        <div className="title-container">
          <h1>TODO</h1>
          <img
            className="icon-swich" src={theme === '' ? imageMoon : imageSun}
            onClick={handleTheme}
          />
        </div>
        <TodoAdd
          onNewTodo={handleNewTodo}
          theme={theme}
        />
      </header>

      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
        clearCompleted={clearCompleted}
        theme={theme}
      />

      <footer className={`footer ${theme}`}>
        <p>{todosPending} Items Left</p>
        <p onClick={() => clearCompleted()}>Clear Completed</p>


      </footer>


    </main>
  )
}
