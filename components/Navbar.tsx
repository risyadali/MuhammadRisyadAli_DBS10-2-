"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Luxury Store</h1>

      <div className="flex gap-6">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
}