import { motion } from "framer-motion";


export function About () {
  return (
    <div id="about" className="relative w-[80%]  left-24">
       <h3 className="text-white mb-4 flex items-center text-2xl font-bold">
        Hi I'm Tarek
      </h3>
      <div className="flex mb-3">
          <motion.div className=" mr-3 h-2 md:h-3 lg:h-4 w-36 bg-gradient-to-r from-fuchsia-500 to-pink-500"></motion.div>
          <motion.div className="bg-gradient-to-r from-red-500 to-orange-500 mr-2 rounded-full inline-block w-3 h-3 lg:h-4 lg:w-4 "></motion.div>
        </div>
        <div className="flex mb-3">
          <motion.div className=" mr-3 h-2 md:h-3 lg:h-4 w-28 bg-gradient-to-r from-amber-200 to-yellow-500"></motion.div>
          <motion.div className=" mr-3 h-2 md:h-3 lg:h-4 w-12 bg-gradient-to-r from-emerald-400 to-cyan-400"></motion.div>
          <motion.div className=" mr-3 h-2 md:h-3 lg:h-4 w-48 bg-gradient-to-r from-amber-200 to-yellow-500"></motion.div>
        </div>
        <p className="text-white text-lg mt-7 mb-7">
            I’m a software engineer from Algeria.
            I use Javascript, Typescript ,sql ,c# to build high-end interactive experiences and products.
        </p>
        <div className="flex mb-3">
          <motion.div className=" mr-3 h-2 md:h-3 lg:h-4 w-36 bg-gradient-to-r from-fuchsia-500 to-pink-500"></motion.div>
          <motion.div  className=" mr-3 h-2 md:h-3 lg:h-4 w-12 bg-gradient-to-r from-fuchsia-500 to-pink-500"></motion.div>
        </div>
        <div className="flex mb-3">
          <motion.div className=" mr-3 h-2 md:h-3 lg:h-4 w-56 bg-gradient-to-r from-fuchsia-500 to-pink-500"></motion.div>
        </div>
        <div className="flex mb-3">
          <motion.div className="min-w-4 mr-3 h-2 md:h-3 lg:h-4 w-16 bg-gradient-to-r from-emerald-400 to-cyan-400"></motion.div>
          <motion.div className="min-w-3 mr-3 h-2 md:h-3 lg:h-4 w-4 bg-gradient-to-r from-red-500 to-orange-500"></motion.div>
          <motion.div className="min-w-3 mr-3 h-2 md:h-3 lg:h-4 w-12 bg-gradient-to-r from-red-500 to-orange-500"></motion.div>
          <motion.div className="min-w-3 mr-3 h-2 md:h-3 lg:h-4 w-32 bg-gradient-to-r from-amber-200 to-yellow-500"></motion.div>
        </div>
      <div className="w-[1px] h-[99%] bg-white absolute opacity-30 -left-6 top-0"></div>
    </div>
  );
}
