import React from 'react';

export default function ImpactStats() {
  const stats = [
    { number: '10K+', label: 'Lives Impacted' },
    { number: '500+', label: 'Volunteers' },
    { number: '50+', label: 'Communities Helped' }
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-8">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-3xl font-bold text-blue-700">{stat.number}</p>
            <p className="text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
