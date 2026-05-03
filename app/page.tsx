"use client";

import { useState, useEffect } from "react";

const response = {
  page: 1,
  results: [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://picsum.photos/seed/1/500/300",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      image: "https://picsum.photos/seed/2/500/300",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      image: "https://picsum.photos/seed/3/500/300",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      image: "https://picsum.photos/seed/4/500/300",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      image: "https://picsum.photos/seed/5/500/300",
    },
  ],
};

// ──────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────
interface CardProps {
  title: string;
  body: string;
  image: string;
}

// ──────────────────────────────────────────────
// Navbar
// ──────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow-lg fixed top-0 w-full z-50">
      <span className="font-bold text-xl tracking-wide">My Name</span>
      <div className="flex gap-8 text-sm font-medium">
        <a href="#home" className="hover:text-blue-200 transition-colors duration-200">
          Home
        </a>
        <a href="#profile" className="hover:text-blue-200 transition-colors duration-200">
          Profile
        </a>
        <a href="#contact" className="hover:text-blue-200 transition-colors duration-200">
          Contact
        </a>
      </div>
    </nav>
  );
}

// ──────────────────────────────────────────────
// Hero / Home Section
// ──────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-700 to-blue-400 text-white pt-32 pb-20 px-6 text-center"
    >
      <h1 className="text-4xl font-bold mb-3">Database System Practicum</h1>
      <p className="text-blue-100 text-lg">Module 10 — Advanced Frontend</p>
    </section>
  );
}

// ──────────────────────────────────────────────
// Card Component
// ──────────────────────────────────────────────
function Card({ title, body, image }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover"
      />
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-base font-semibold text-gray-800 capitalize leading-snug">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">
          {body.replace(/\n/g, " ")}
        </p>
        <button className="mt-2 self-start text-sm text-blue-600 font-medium hover:underline">
          Read more →
        </button>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────
// Cards Grid Section
// ──────────────────────────────────────────────
function CardsSection() {
  return (
    <section id="profile" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Posts</h2>
      <p className="text-center text-gray-400 mb-10 text-sm">
        Displaying data with JavaScript map()
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {response.results.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            body={item.body}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// Counter Demo (useState + useEffect)
// ──────────────────────────────────────────────
function CounterSection() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`${count} is divisible by 10`);
    }
  }, [count]);

  return (
    <section id="contact" className="py-16 px-6 bg-gray-50">
      <div className="max-w-sm mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Counter Demo</h2>
        <p className="text-gray-400 text-sm mb-10">
          Uses useState &amp; useEffect — alerts when divisible by 10
        </p>
        <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col items-center gap-8">
          <span className="text-6xl font-bold text-blue-600">{count}</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCount((c) => c - 1)}
              className="w-12 h-12 rounded-full bg-red-100 text-red-600 text-2xl font-bold hover:bg-red-200 transition-colors duration-200 flex items-center justify-center"
            >
              −
            </button>
            <button
              onClick={() => setCount(0)}
              className="px-6 h-12 rounded-full bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors duration-200"
            >
              Reset
            </button>
            <button
              onClick={() => setCount((c) => c + 1)}
              className="w-12 h-12 rounded-full bg-green-100 text-green-600 text-2xl font-bold hover:bg-green-200 transition-colors duration-200 flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────
// Footer
// ──────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-blue-600 text-blue-100 text-center py-5 text-sm">
      © 2024 My Name · Database System Practicum Module 10
    </footer>
  );
}

// ──────────────────────────────────────────────
// Root Page (replaces app/page.tsx entirely)
// ──────────────────────────────────────────────
export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <CardsSection />
      <CounterSection />
      <Footer />
    </div>
  );
}