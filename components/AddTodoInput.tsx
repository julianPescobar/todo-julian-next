import React from "react";

interface TodoInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPressEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  value: string;
}
export default function TodoInput({
  onChange,
  onPressEnter,
  value,
}: TodoInputProps) {
  return (
    <div>
      <input
        type="text"
        placeholder={`Nueva tarea`}
        onChange={onChange}
        onKeyDown={onPressEnter}
        value={value}
        className="rounded-lg p-2 border-t border-b border-l text-gray-800 border-gray-200 bg-white w-full"
      />
    </div>
  );
}
