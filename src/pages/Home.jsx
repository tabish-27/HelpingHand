import Hero from "../Components/Hero";
import ImpactStats from "../Components/ImpactStats";
import DonationCTA from "../Components/DonationCTA";
import SuccessStories from "../Components/SuccessStories";


const featureData = [
  {
    title: "Education Programs",
    description: "Providing quality education to underprivileged children in rural areas.",
  },
  {
    title: "Learning Initiatives",
    description: "Empowering children in underserved communities through accessible and engaging educational resources.",
  },
  {
    title: "Child Education Support",
    description: "Bridging the education gap by delivering learning opportunities to children in remote villages.",
  },
  {
    title: "Rural Schooling Programs",
    description: "Supporting grassroots education by building schools and supplying learning materials in rural areas.",
  },
  {
    title: "Education for All",
    description: "Making quality education a reality for every child, regardless of location or background.",
  },
  {
    title: "Knowledge Empowerment",
    description: "Transforming lives through inclusive education programs focused on literacy and life skills.",
  },
];

const Home = () => {
  return (
    <div className="space-y-16 pb-16">
      <Hero />
      <ImpactStats />

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <DonationCTA />
      <SuccessStories />
    </div>
  );
};

export default Home;
