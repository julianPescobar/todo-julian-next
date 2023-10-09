import React from "react";
import TodoButton from "./AddTodoButton";
import TodoInput from "./AddTodoInput";
import TodoList, { AnotherList } from "./TodoList";
import Task from "@/lib/Task";
import { title } from "process";

export default function Todo() {
  const [tareas, setTareas] = React.useState<Task[]>([]);
  const [inputValor, setInputValor] = React.useState<string>("");

  const handleInputValor = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    if (e.target.value.length <= 35) setInputValor(e.target.value);
  };
  const agregarTarea = () => {
    if (inputValor.trim() !== "") {
      const nuevaTarea = new Task(
        1,
        inputValor,
        "",
        ["test", "tast"],
        false,
        false,
        new Date()
      );

      setTareas([...tareas, nuevaTarea]);
      setInputValor("");
    }
  };

  const eliminarTarea = (index: any) => {
    // Remove the task at the specified index
    const updatedTareas = [...tareas];
    updatedTareas.splice(index, 1);
    setTareas(updatedTareas);
  };

  const marcarDone = (index: any) => {
    const updatedTareas = [...tareas];
    updatedTareas[index].indexOf("✅")
      ? (updatedTareas[index] = "✅" + updatedTareas[index])
      : "";
    setTareas(updatedTareas);
    // Implement the logic to mark a task as done here
    // You can update the task status in your tasks array
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      // Call your function here
      agregarTarea();
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-800 rounded shadow-md text-black">
      <TodoInput
        onChange={handleInputValor}
        value={inputValor}
        onPressEnter={handleKeyDown}
      />
      <br />
      <TodoButton onAddTodo={agregarTarea} />
      <br />
      <AnotherList tareas={tareas}></AnotherList>
    </div>
  );
}
