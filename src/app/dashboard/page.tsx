// app/dashboard/page.tsx

"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

const Dashboard: React.FC = () => {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const email = searchParams.get("email");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl text-black font-semibold mb-4">Dashboard</h1>
        <p className="text-lg text-black">
          Welcome! You are logged in as {role}
          {email}.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
