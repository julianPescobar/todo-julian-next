import {
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import Task from "@/lib/Task";
import "./TodoList.css";
export default function TodoList({
  tareas,
  eliminarTarea,
  marcarDone,
}: {
  tareas: Task[];
  eliminarTarea: (index: number) => void;
  marcarDone: (index: number) => void;
}) {
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
      {tareas.map((tarea: Task, i: any) => (
        <li
          key={i}
          className={`todo-item ${i === newItemIndex ? "new-todo-item" : ""}`}
        >
          <span>{tarea.title}</span>
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

export function AnotherList({
  tareas,
  eliminarTarea,
  marcarDone,
}: {
  tareas: Task[];
  eliminarTarea: (index: number) => void;
  marcarDone: (index: number) => void;
}) {
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
    <div className="px-1 py-1 border-b rounded-t sm:px-6">
      <div className="overflow-hidden bg-white shadow dark:bg-gray-800 sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {tareas
            .map((task: Task, i: number) => (
              <li
                key={i}
                className={`${
                  task.completed ? "pointer-events-none opacity-25" : ""
                }`}
              >
                <a className="block hover:bg-gray-50 dark:hover:bg-gray-900">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700 text-md dark:text-white md:truncate line-clamp-4">
                        {task.title}
                      </p>

                      <div className="flex flex-shrink-0 ml-2">
                        <p className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                          {task.tags}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex py-1 items-center font-light text-gray-500 text-xs dark:text-gray-300">
                          created {task.createDate.toLocaleString("es-AR")}
                        </p>
                      </div>
                    </div>

                    {task.completed ? (
                      <div className=" sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex py-1 items-center font-light text-gray-500 text-xs dark:text-gray-300">
                            done {task.completedDate?.toLocaleString("es-AR")}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => handleMarcarDone(i)}
                          className={
                            `${task.completed && "invisible"}` +
                            " py-1 px-1  bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500 focus:ring-offset-emerald-200 text-white w-6/12 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                          }
                        >
                          Mark as Done
                        </button>
                        <button
                          onClick={() => handleEliminarTarea(i)}
                          type="button"
                          className={
                            `${task.completed && "invisible"}` +
                            " py-1 px-1  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-6/12 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                          }
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </a>
              </li>
            ))
            .slice(0, 10)}
        </ul>
        <div className="w-full p-4 mx-auto md:w-1/2">
          <button
            type="button"
            className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            View all
          </button>
        </div>
      </div>
    </div>
  );
}
