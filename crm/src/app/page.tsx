import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-green-200 to-purple-200 p-8 rounded">
      <div className="">
        <Link
          href="/dashboard"
          className="bg-gray-900 py-2 px-4 rounded text-neutral-50 font-semibold hover:bg-gradient-to-br from-green-200 to-purple-200 hover:text-gray-900 transition duration-300 text-2xl"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}
