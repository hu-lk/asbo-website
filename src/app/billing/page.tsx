"use client";

import { useState } from "react";
import BillingForm from "./components/BillingForm";
import AgentLogin from "./components/AgentLogin";

export default function BillingPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      {isAuthenticated ? (
        <BillingForm />
      ) : (
        <AgentLogin onLogin={() => setIsAuthenticated(true)} />
      )}
    </div>
  );
}
