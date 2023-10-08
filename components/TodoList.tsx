import { useEffect, useState } from "react";
import "./TodoList.css";
export default function TodoList({ tareas, eliminarTarea, marcarDone }: any) {
  const [newItemIndex, setNewItemIndex] = useState<number | null>(null);

  const handleEliminarTarea = (index: number) => {
    // Llama a la función eliminarTarea que le pases como prop
    eliminarTarea(index);
  };
  const handleMarcarDone = (index: number) => {
    // Llama a la función eliminarTarea que le pases como prop
    marcarDone(index);
  };

  useEffect(() => {
    // Cuando tareas cambia, establece el índice del nuevo elemento
    if (tareas.length > 0) {
      setNewItemIndex(tareas.length - 1);
    }
  }, [tareas]);
  return (
    <ul className="todo-list">
      {tareas.map((tarea, i) => (
        <li
          key={i}
          className={`todo-item ${i === newItemIndex ? "new-todo-item" : ""}`}
        >
          <span>{tarea}</span>
          <div className="button-container">
            <button onClick={() => handleMarcarDone(i)} className="done-button">
              ✅
            </button>
            <button
              onClick={() => handleEliminarTarea(i)}
              className="delete-button"
            >
              🗑️
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
