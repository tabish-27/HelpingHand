const DonationCTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Your Support Makes a Difference</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Every donation helps us continue our mission to empower communities and transform lives.
        </p>
        <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-200 transform hover:scale-105">
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default DonationCTA;