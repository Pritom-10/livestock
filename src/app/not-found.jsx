import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-7">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>

        <p className="mt-2 text-gray-600">Page not found</p>

        <Link
          href="/"
          className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded-md"
        >
        Back to Home
        </Link>
      </div>
    </div>
  );
}
