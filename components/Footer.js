export default function Footer() {
  return (
    <div className="h-48 flex flex-col justify-around border-t mt-5 bg-yellow-50 text-black">
      <div>
        <ul className="flex justify-center text-3xl">
          <li className="my-2 ml-4 hover:text-yellow-600 transition ease-out duration-200">
            <i className="fab fa-github"></i>
          </li>
          <li className="my-2 ml-5 hover:text-yellow-600 transition ease-out duration-200">
            <i className="fab fa-twitter"></i>
          </li>
          <li className="my-2 ml-5 hover:text-yellow-600 transition ease-out duration-200">
            <i className="fab fa-youtube"></i>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-center font-dancing-script text-2xl ">RAZOUQ &copy; 2021</p>
      </div>
    </div>
  );
}
