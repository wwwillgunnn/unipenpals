"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay for demonstration purposes
    const timer = setTimeout(() => setLoading(false), 3000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center">
        <div className="spinner border-t-4 border-blue-500 border-solid rounded-full w-16 h-16"></div>
        <p className="mt-4 text-gray-500">Loading...</p>
      </div>
      <style jsx>{`
        .spinner {
          border-width: 4px;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
