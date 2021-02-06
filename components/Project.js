import {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Project({ title, animationDirection }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const BoxVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: 300 * (animationDirection=='left'?1:-1) },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={BoxVariants}
      className="flex flex-col-reverse my-2 border-2 border-yellow-100 rounded-md shadow-md md:flex-row"
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
    </motion.div>
  );
}
