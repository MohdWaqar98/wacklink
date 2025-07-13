import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-[83vh] bg-purple-50 flex items-center justify-center px-4 sm:px-6 py-10 sm:py-12">
      <div className="w-full max-w-2xl sm:max-w-3xl bg-white shadow-xl rounded-2xl px-6 sm:px-10 py-8 sm:py-10 border border-purple-200">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-700 mb-4 text-center">
          Contact Me
        </h1>

        <p className="text-center text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
          I'm always open to collaborating on exciting Java full stack projects, solving real-world problems, or just talking tech!
        </p>

        <div className="text-gray-700 text-base sm:text-lg space-y-4">
          <p>
            <strong>Name:</strong> Mohd Waqar Ahemed
          </p>
          <p>
            <strong>Role:</strong> Java Full Stack Developer
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:mohdwaqar695@gmail.com"
              className="text-purple-600 hover:underline break-words"
            >
              mohdwaqar695@gmail.com
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/mohdwaqar98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline break-words"
            >
              linkedin.com/in/mohdwaqar98
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <span className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-purple-600 text-white rounded-full font-semibold shadow hover:bg-purple-700 transition duration-300 text-sm sm:text-base">
            Let’s Connect & Code Something Amazing 💻
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
