'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4 pt-30">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center">
          <Image
            src="/errorImag.jpg"
            alt="Page Not Found"
            width={300}
            height={220}
            className="rounded-xl shadow-md"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#212337] mt-6">Oops! Page Not Found</h1>
        <p className="text-gray-600 mt-3">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <button
          onClick={() => router.push('/')}
          className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition duration-300 ease-in-out"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}
