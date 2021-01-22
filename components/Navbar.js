import Link from "./Link";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4 px-32">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div>
            <a
              className="text-gray-700 dark:text-white text-xl font-bold md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              Razouq
            </a>
          </div>

          {/* Mobile menu button  */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu open: "block", Menu closed: "hidden"  */}
        <div className="md:flex items-center block">
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link title="About" />
            <Link title="Projects" />
            <Link title="Articles" />
            <Link title="Resume" />
          </div>
        </div>
      </div>
    </nav>
  );
}
