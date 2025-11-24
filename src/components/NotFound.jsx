import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      {/* Large 404 Text */}
      <h1 className="text-9xl text-gray-200 font-bold mb-4">404</h1>

      {/* Helpful Message */}
      <p className="text-2xl text-gray-700 mb-8 text-center">
        Oops! We can't find that page.
      </p>

      {/* Go Home Button */}
      <Link
        to="/"
        className="bg-black text-white rounded-full px-8 py-3 hover:bg-gray-800 transition-colors duration-200"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
