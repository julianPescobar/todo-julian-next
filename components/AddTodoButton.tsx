interface TodoButtonProps {
  onAddTodo: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function TodoButton({ onAddTodo }: TodoButtonProps) {
  return (
    <button
      onClick={onAddTodo}
      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
    >
      Agregar
    </button>
  );
}
