"use client";

import { useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const submit = async () => {
  try {
    await api.post("/user/register", form);
    alert("Register Success");
    router.push("/login");
  } catch (err: any) {
    console.log(err);

    if (err.response) {
      alert("STATUS: " + err.response.status + "\n" +
            JSON.stringify(err.response.data));
    } else if (err.request) {
      alert("No response from backend (CORS/server down)");
    } else {
      alert("Error: " + err.message);
    }
  }
};

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="bg-zinc-900 p-8 rounded-xl w-[420px] space-y-3">
        <h1 className="text-3xl font-bold mb-4">Register</h1>

        <input placeholder="Full Name"
          className="w-full p-3 bg-zinc-800"
          onChange={(e)=>setForm({...form,name:e.target.value})} />

        <input placeholder="Username"
          className="w-full p-3 bg-zinc-800"
          onChange={(e)=>setForm({...form,username:e.target.value})} />

        <input placeholder="Email"
          className="w-full p-3 bg-zinc-800"
          onChange={(e)=>setForm({...form,email:e.target.value})} />

        <input placeholder="Phone (numbers only)"
          className="w-full p-3 bg-zinc-800"
          onChange={(e)=>setForm({...form,phone:e.target.value})} />

        <input type="password" placeholder="Password min 6"
          className="w-full p-3 bg-zinc-800"
          onChange={(e)=>setForm({...form,password:e.target.value})} />

        <button
          onClick={submit}
          className="w-full bg-blue-500 p-3 rounded"
        >
          Register
        </button>
      </div>
    </main>
  );
}