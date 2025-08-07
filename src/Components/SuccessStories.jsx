import React from "react";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      title: "From Ragpicker to School Teacher",
      description:
        "Riya once collected waste to survive. Through our education program, she now teaches other children like her. Her smile inspires us daily.",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
      category: "Education"
    },
    {
      id: 3,
      title: "Safe Haven for Little Priya",
      description:
        "Rescued from a hazardous factory, Priya found shelter and safety through our intervention. Today, she’s growing up with dignity and care.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
      category: "Child Safety"
    },
    {
      id: 5,
      title: "Healing Through Art and Therapy",
      description:
        "Ravi, once withdrawn and anxious, now expresses himself through painting. Our art therapy program gave him a new voice.",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
      category: "Mental Health"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Real Stories. Real Change.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide mb-1 block">
                  {story.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                  {story.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
