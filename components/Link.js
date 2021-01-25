export default function Link({ title }) {
  return (
    <a
      className="my-1 text-sm text-gray-700 dark:text-gray-200 font-medium hover:text-blue-300 dark:hover:text-indigo-400 md:mx-4 md:my-0"
      href="#"
    >
      {title}
    </a>
  );
}
