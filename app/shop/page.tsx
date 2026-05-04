"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function Shop() {
  const [items,setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/items");
        setItems(res.data.payload);
      } catch {
        alert("Backend not connected");
      }
    };

    fetchData();
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-4xl mb-8">Shop</h1>

      <div className="grid grid-cols-3 gap-6">
        {items.map((item:any)=>(
          <div key={item.id} className="bg-zinc-900 p-5 rounded">
            <h2>{item.name}</h2>
            <p>Rp {item.price}</p>
            <img src="" />
          </div>
        ))}
      </div>
    </main>
  );
}