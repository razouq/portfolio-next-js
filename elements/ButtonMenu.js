export default function ButtonMenu({ show, setShow }) {
  return (
    <button
      className="flex flex-col justify-between w-6 h-6 outline-none focus:outline-none"
      onClick={() => setShow((show) => !show)}
    >
      <div
        className={`w-full h-2 bg-white mb-1 rounded-sm transform duration-500 ${
          show ? "rotate-45 translate-y-2" : ""
        }`}
      ></div>
      <div
        className={`w-full h-2 bg-white mb-1 rounded-sm transform duration-500 ${
          show ? "-translate-x-20 bg-opacity-0" : ""
        }`}
      ></div>
      <div
        className={`w-full h-2 bg-white mb-1 rounded-sm transform duration-500 ${
          show ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></div>
    </button>
  );
}
