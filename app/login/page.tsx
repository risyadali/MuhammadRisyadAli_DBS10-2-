"use client";

import { useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const submit = async () => {
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.payload.token);
      localStorage.setItem("user", JSON.stringify(res.data.payload.user));

      router.push("/shop");
    } catch (err) {
      alert("Wrong email/password or backend offline");
    }
  };

  return (
    <main className="p-10 flex justify-center">
      <div className="bg-zinc-900 p-10 rounded-xl w-[400px]">
        <h1 className="text-3xl mb-6">Login</h1>

        <input
          className="w-full p-3 mb-4 bg-zinc-800"
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 mb-4 bg-zinc-800"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={submit}
          className="bg-green-500 w-full p-3 rounded"
        >
          Login
        </button>
      </div>
    </main>
  );
}