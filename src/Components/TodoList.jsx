import { TodoItem } from "./TodoItem"


export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo, theme }) => {

  return (
    <ul className={`todo-list ${theme}`}>
      {
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
            theme={theme}
          />
        ))
      }

    </ul>
  )
}
