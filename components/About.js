import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-end flex-1">
      <p className="mb-20 text-base leading-10 tracking-widest text-center text-gray-200 sm:text-3xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
        repudiandae consectetur.
      </p>
      <div className="mb-20">
        {/* <motion.div
          transition={{ repeat: Infinity, duration: 0.5 }}
          className="w-44"
        >
          <img src="/images/cf.png" alt="" />
        </motion.div> */}
      </div>
    </div>
  );
}
