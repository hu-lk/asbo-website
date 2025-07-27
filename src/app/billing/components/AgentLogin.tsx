"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AgentLogin({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace this with real auth later
    if (username === "agent" && password === "password123") {
      onLogin();
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-md w-full bg-white p-8 rounded-lg shadow-md mx-auto mt-20 space-y-4"
    >
      <h2 className="text-2xl font-bold text-blue-900 text-center">
        Agent Login
      </h2>
      <Input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" className="w-full bg-blue-900 text-white">
        Login
      </Button>
    </form>
  );
}
