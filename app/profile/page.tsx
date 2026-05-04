"use client";

export default function Profile() {
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : {};

  return (
    <main className="p-10">
      <div className="bg-zinc-900 p-10 rounded-2xl max-w-lg mx-auto">
        <h1 className="text-4xl font-bold mb-6">Profile</h1>

        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Balance: Rp {user.balance}</p>
      </div>
    </main>
  );
}