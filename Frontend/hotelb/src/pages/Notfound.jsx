import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <br />
      <a
        className="text-blue-500 text-2xl hover:translate-y-[-2px] transition-all ease-in-out"
        href="/"
      >
        Go to Home page
      </a>
    </div>
  );
}

export default NotFound;
