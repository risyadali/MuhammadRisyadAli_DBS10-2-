"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function Detail({ params }: any) {
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    api.get(`/items/${params.id}`).then((res) => {
      setItem(res.data.payload);
    });
  }, []);

  const buy = async () => {
    await api.post("/transaction/create", {
      itemId: item.id,
      qty: 1,
    });

    alert("Purchase Success");
  };

  if (!item) return <div className="p-10">Loading...</div>;

  return (
    <main className="p-10">
      <div className="bg-zinc-900 p-10 rounded-2xl max-w-xl mx-auto">
        <h1 className="text-4xl font-bold">{item.name}</h1>

        <p className="text-green-400 text-2xl mt-3">
          Rp {item.price}
        </p>

        <button
          onClick={buy}
          className="mt-6 bg-green-500 px-6 py-3 rounded-xl"
        >
          Buy Now
        </button>
      </div>
    </main>
  );
}