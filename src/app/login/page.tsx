// app/login/page.tsx

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import AuthForm from "../components/AuthForm";
import { LoginFormData } from "../types/auth";

const Login: React.FC = () => {
  const router = useRouter();

  const handleLogin = async (data: LoginFormData) => {
    try {
      const response = await fetch(`http://localhost:6001/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const { accessToken, role, email } = await response.json();
        console.log(email);

        // Store the token in localStorage
        localStorage.setItem("token", accessToken);
        // Redirect to dashboard with role
        router.push(`/dashboard?email=${email}`);
      } else {
        console.error("Login failed:", await response.json());
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <AuthForm title="Admin Login" onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
