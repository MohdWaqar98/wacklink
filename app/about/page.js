import React from 'react';

const About = () => {
  return (
    <div className="min-h-[83vh] bg-purple-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl p-10 border border-purple-200">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-4 text-center">
          About WackLink
        </h1>

        <p className="text-center text-lg text-gray-700 mb-8">
          The Best URL Shortener in the Market 🚀
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          <strong>WackLink</strong> is your modern, free, and powerful URL shortener built for simplicity and performance. Whether you&apos;re sharing links with friends, tracking marketing campaigns, or managing hundreds of URLs — WackLink has your back.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          With real-time analytics, click tracking, and a beautiful dashboard to manage everything, WackLink makes it easy to stay in control of your links. No more long, messy URLs — just clean, short, and smart links that work anywhere.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          We’re committed to giving you the fastest and most reliable link shortening experience on the internet — 100% free and with no compromise on performance or privacy.
        </p>

        <div className="mt-10 text-center">
          <span className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full font-semibold shadow hover:bg-purple-700 transition duration-300">
            Join thousands using WackLink today!
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
