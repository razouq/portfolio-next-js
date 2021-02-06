import { useEffect, useRef, useState } from "react";
import ButtonRead from '../elements/ButtonRead';

export default function Article({ title, delay }) {
  const [show, setShow] = useState(false);
  const ref = useRef();

  const hiddenStyle = {
    transform: "translateY(200px)",
    transition: "all 1s ease-out",
    opacity: "0",
    transitionDelay: `${0.5 * delay}s`,
  };

  const visibleStyle = {
    transform: "translateY(0px)",
    transition: "all 1s ease-out",
    opacity: "1",
    transitionDelay: `${0.5 * delay}s`,
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
      className="overflow-hidden bg-white border-2 border-yellow-200 rounded-md shadow-md"
      style={show ? visibleStyle : hiddenStyle}
    >
      <img src="/images/article.jpg" alt="" />
      <div className="p-2">
        <h5 className="font-semibold">{title}</h5>
        <ul>
          <li>react</li>
          <li>express js</li>
          <li>styled components</li>
          <li>JWT</li>
        </ul>
        <ButtonRead />
      </div>
    </div>
  );
}
