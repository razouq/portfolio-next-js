import {useEffect, useRef, useState} from 'react'
export default function Project({ title, animationDirection }) {
  const [show, setShow] = useState(false);
  const ref = useRef();

  const hiddenStyle = {
    transform: `translateX(${200*(animationDirection=="left"?-1:1)}px)`,
    transition: "all 1s ease-out",
    opacity: "0",
  };

  const visibleStyle = {
    transform: "translateY(0px)",
    transition: "all 1s ease-out",
    opacity: "1",
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // window.pageYOffset + window.innerHeight > ref.current.offsetTop => show it !
  const handleScroll = () => {
    if (
      window.pageYOffset + window.innerHeight >= ref.current.offsetTop &&
      !show
    ) {
      setShow(true);
    }
  };

  return (
    <div
      ref={ref}
      className="flex flex-col-reverse my-2 border-2 border-yellow-100 rounded-md shadow-md md:flex-row"
      style={show?visibleStyle:hiddenStyle}
    >
      <div className="flex-1 p-5 bg-yellow-50">
        <h5 className="text-lg font-semibold">{title}</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          vel eveniet porro ratione a quis eum officia dignissimos sint hic
          tenetur ex, sit voluptatem voluptate odit quae atque, harum
          repellendus!
        </p>
        <ul className="flex justify-end text-lg ">
          <li className="mx-1 transition duration-500 ease-out hover:text-yellow-400">
            <a href="">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="mx-1 transition duration-500 ease-out hover:text-yellow-400">
            <a href="">
              <i className="fas fa-globe-africa"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full overflow-hidden h-52 md:w-1/3 md:h-auto">
        <img
          className="object-cover w-full h-full overflow-hidden"
          src="/images/project.png"
          alt=""
        />
      </div>
    </div>
  );
}
