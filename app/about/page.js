import React from 'react';

const About = () => {
  return (
    <div className="min-h-[83vh] bg-purple-50 flex items-center justify-center px-4 sm:px-6 py-10 sm:py-12">
      <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl bg-white shadow-2xl rounded-2xl px-6 sm:px-10 py-8 sm:py-10 border border-purple-200">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-700 mb-4 text-center">
          About WackLink
        </h1>

        <p className="text-center text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
          The Best URL Shortener in the Market 🚀
        </p>

        <div className="text-gray-700 text-base sm:text-lg space-y-5 leading-relaxed">
          <p>
            <strong>WackLink</strong> is your modern, free, and powerful URL shortener built for simplicity and performance. Whether you&apos;re sharing links with friends, tracking marketing campaigns, or managing hundreds of URLs — WackLink has your back.
          </p>

          <p>
            With real-time analytics, click tracking, and a beautiful dashboard to manage everything, WackLink makes it easy to stay in control of your links. No more long, messy URLs — just clean, short, and smart links that work anywhere.
          </p>

          <p>
            We’re committed to giving you the fastest and most reliable link shortening experience on the internet — 100% free and with no compromise on performance or privacy.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <span className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-purple-600 text-white rounded-full font-semibold shadow hover:bg-purple-700 transition duration-300 text-sm sm:text-base">
            Join thousands using WackLink today!
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
