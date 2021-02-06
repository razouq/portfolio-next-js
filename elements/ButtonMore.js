export default function ButtonMore({title}) {
  return (
    <div className="flex justify-center">
      <a
        href="#"
        className="px-2 py-1 mx-auto mt-5 mb-2 font-bold tracking-widest text-center text-yellow-900 duration-500 ease-out transform bg-white border-2 border-yellow-900 rounded-md hover:-translate-y-1 hover:shadow-xl"
      >
        {title}
      </a>
    </div>
  );
}
