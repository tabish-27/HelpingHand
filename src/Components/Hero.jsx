import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Be the Change You Want to See</h2>
      <p className="max-w-2xl mx-auto text-lg md:text-xl">
        Join Helping Hands in empowering communities and spreading hope.
      </p>
      <button className="mt-6 px-6 py-3 bg-white text-blue-700 font-semibold rounded shadow hover:bg-gray-100">
        Get Involved
      </button>
    </section>
  );
}