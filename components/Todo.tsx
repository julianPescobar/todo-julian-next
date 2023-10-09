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
    //Todo: make something that works with my new class
  };

  const marcarDone = (index: any) => {
    //Todo: make something that works with my new class
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
