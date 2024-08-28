"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AdminDashboard = () => {
  const [role, setRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    const userEmail = localStorage.getItem("email");
    setRole(userRole);
    if (userRole != "admin") {
      router.push(`/pages/dashboard?role=${userRole}and email:${userEmail} `);
    }
  }, [router]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {role === "admin" && (
        <div>
          <h2>Product Management</h2>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
