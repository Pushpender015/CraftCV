import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import "./Pagenotfount404.css";

function Pagenotfount404() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <BounceLoader color="#b30000" size={150} />
        </div>
      ) : (
        <div className="pageerror min-h-screen flex items-center justify-center">
          <div className="page404 bg-gradient-to-r from-black to-red-800 text-white p-8 rounded-xl shadow-2xl transform transition duration-500 hover:scale-105 hover:rotate-0">
            <div className="text-6xl font-extrabold mb-4">404</div>
            <div className="text-2xl font-semibold mb-8">Page Not Found</div>
            <Link
              to="/"
              className="link px-4 py-2 text-lg font-medium bg-white text-red-800 rounded hover:bg-red-100 transition-colors"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Pagenotfount404;
