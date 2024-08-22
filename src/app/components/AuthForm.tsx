import React, { useState, FormEvent } from "react";
import { LoginFormData } from "../types/auth";

interface AuthFormProps {
  onSubmit: (data: LoginFormData) => void;
  title: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, title }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        {title}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mt-2 border text-black border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="admin@example.com"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mt-2 border text-black border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="********"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
