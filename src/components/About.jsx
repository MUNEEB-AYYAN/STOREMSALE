

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your trusted destination for premium products, seamless shopping, and unmatched customer service.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Section 1 */}
          

          {/* Section 2 */}
          
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Meet Our Team</h2>
          <p className="mt-4 text-gray-600">
            A passionate group of professionals dedicated to delivering excellence every step of the way.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto shadow-lg"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-800">Muneeb</h3>
              <p className="text-sm text-gray-500">CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto shadow-lg"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-800">Wase</h3>
              <p className="text-sm text-gray-500">Marketing Head</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto shadow-lg"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-800">Noman</h3>
              <p className="text-sm text-gray-500">Tech Lead</p>
            </div>
            {/* Team Member 4 */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto shadow-lg"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-800">Abdul Rafey</h3>
              <p className="text-sm text-gray-500">Customer Support</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
          <p className="mt-4 text-gray-600">
            Have questions? Feel free to reach out at <a href="mailto:support@example.com" className="text-blue-500 underline">support@example.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
