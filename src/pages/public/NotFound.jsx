
import { Link } from "react-router-dom";
import { Gamepad2, ArrowLeft } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-screen bg-[#090d18] flex items-center justify-center px-6 text-center">

      <div className="max-w-lg">
        <Gamepad2 size={65} className="text-purple-500 mx-auto mb-6" />

        <h1 className="text-8xl font-black text-purple-500">
          404
        </h1>

        <h2 className="text-3xl font-bold text-white mt-5">
          Game Over!
        </h2>

        <p className="text-gray-400 mt-4 leading-7">
          Oops! The page you are looking for does not exist
          or may have been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 bg-purple-600 hover:bg-purple-700 text-white px-7 py-3 rounded-xl font-semibold"
        >
          <ArrowLeft size={19} />
          Back to Home
        </Link>
      </div>

    </div>
  );
}

export default NotFound;
