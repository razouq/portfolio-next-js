import {useRef, useEffect} from 'react';

export default function Footer() {
  const ref = useRef();
  useEffect(() => {
    console.log('footer', ref.current.offsetTop, ref)
  }, [])
  return (
    <div ref={ref} className="flex flex-col justify-around h-48 mt-5 text-black border-t bg-yellow-50">
      <div>
        <ul className="flex justify-center text-3xl">
          <li className="my-2 ml-4 transition duration-200 ease-out hover:text-yellow-600">
            <i className="fab fa-github"></i>
          </li>
          <li className="my-2 ml-5 transition duration-200 ease-out hover:text-yellow-600">
            <i className="fab fa-twitter"></i>
          </li>
          <li className="my-2 ml-5 transition duration-200 ease-out hover:text-yellow-600">
            <i className="fab fa-youtube"></i>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-2xl text-center ">RAZOUQ &copy; 2021</p>
      </div>
    </div>
  );
}
