import React from "react";
import TodoButton from "./AddTodoButton";
import TodoInput from "./AddTodoInput";
import TodoList from "./TodoList";

export default function Todo() {
  const [tareas, setTareas] = React.useState<string[]>([]);
  const [inputValor, setInputValor] = React.useState<string>("");

  const handleInputValor = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    if (e.target.value.length <= 35) setInputValor(e.target.value);
  };
  const agregarTarea = () => {
    if (inputValor.trim() !== "") {
      setTareas([...tareas, inputValor]);
      setInputValor("");
    }
  };

  const eliminarTarea = (index) => {
    // Remove the task at the specified index
    const updatedTareas = [...tareas];
    updatedTareas.splice(index, 1);
    setTareas(updatedTareas);
  };

  const marcarDone = (index) => {
    const updatedTareas = [...tareas];
    updatedTareas[index].indexOf("✅")
      ? (updatedTareas[index] = "✅" + updatedTareas[index])
      : "";
    setTareas(updatedTareas);
    // Implement the logic to mark a task as done here
    // You can update the task status in your tasks array
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md text-black">
      <TodoInput onChange={handleInputValor} value={inputValor} />
      <br />
      <TodoButton onAddTodo={agregarTarea} />
      <br />
      <TodoList
        tareas={tareas}
        marcarDone={marcarDone}
        eliminarTarea={eliminarTarea}
      ></TodoList>
    </div>
  );
}
