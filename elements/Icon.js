export default function Icon({ title }) {
  return (
    <li className="my-2 ml-5 transition duration-500 ease-out hover:text-yellow-400">
        <i className={`fab ${title}`}></i>
      </li>
  );
}
