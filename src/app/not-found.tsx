import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff,_#f3f4f6)]"></div>

      <h1
        className="text-9xl font-extrabold text-off-white relative"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        404
      </h1>
      <h2
        className="text-2xl font-semibold text-pure-off-white mt-4 relative"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        Page Not Found
      </h2>
      <p
        className="text-lg text-pure-off-white mt-2 relative"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        Sorry, the page you’re looking for doesn’t exist.
      </p>

      {/* Navigation Buttons */}
      <div
        className="mt-6 space-x-4 relative"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <Link href="/">
          <button className="px-6 py-2.5 gradient-button rounded">
            Go Back Home
          </button>
        </Link>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-10 text-gray-400 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Monir Hossain | ThemeFisher. All
          rights reserved.
        </p>
      </div>
    </div>
  );
}
