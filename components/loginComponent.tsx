"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface LoginFormState {
  email: string;
  password: string;
}

const CredentialComponent: React.FC = () => {
    const router = useRouter()
  const [formData, setFormData] = useState<LoginFormState>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación con .NET y SQL o lo que sea necesario
    router.push("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-black">Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full text-black p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full text-black p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default CredentialComponent;
