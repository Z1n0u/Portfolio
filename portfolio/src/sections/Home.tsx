import { motion } from "framer-motion"


export function Home () {
  // gold : bg-gradient-to-r from-amber-200 to-yellow-500 // red-sunset: bg-gradient-to-r from-red-500 to-orange-500 
  // purple-candy : bg-gradient-to-r from-fuchsia-500 to-pink-500 // green-nemisia : bg-gradient-to-r from-emerald-400 to-cyan-400
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "200%" },
  }
  
  return (
      <div className="relative top-1/5 translate-y-28  left-24">
        <div className="flex mb-3">
          <motion.div initial={"closed"} transition={{ ease: "easeOut", duration:0.43 }}  animate={"open"} variants={variants} className="min-w-4 mr-3 h-2 md:h-3 lg:h-4 w-28 bg-gradient-to-r from-amber-200 to-yellow-500"></motion.div>
          <motion.div initial={"closed"} transition={{ ease: "easeOut", duration: 0.5 ,delay:0.45}} animate={"open"} variants={variants} className="min-w-3 mr-3 h-2 md:h-3 lg:h-4 w-16 bg-gradient-to-r from-red-500 to-orange-500"></motion.div>
          <motion.div initial={{ opacity: 0, x: "600%" }}  transition={{ ease: "easeOut", duration: 0.8,delay:0.60 }} animate={"open"} variants={variants} className="bg-gradient-to-r from-red-500 to-orange-500 mr-3 rounded-full inline-block w-2 h-2 md:h-3 md:w-3 lg:h-4 lg:w-4 "></motion.div>
        </div>
        <motion.div className="flex mb-3">
          <motion.div initial={"closed"} transition={{ ease: "easeOut", duration:0.4 }}  animate={"open"} variants={variants} className="min-w-4 mr-3 h-2 md:h-3 lg:h-4 w-44 bg-gradient-to-r from-amber-200 to-yellow-500"></motion.div>
        </motion.div>
        <motion.div className="flex mb-3">
          <motion.div initial={"closed"} transition={{ ease: "easeOut", duration:0.43 }}  animate={"open"} variants={variants} className="min-w-4 mr-3 h-2 md:h-3 lg:h-4 w-20 bg-gradient-to-r from-amber-200 to-yellow-500"></motion.div>
          <motion.div initial={"closed"} transition={{ ease: "easeOut", duration: 0.5 ,delay:0.45}} animate={"open"} variants={variants} className="min-w-3 mr-3 h-2 md:h-3 lg:h-4 w-4 bg-gradient-to-r from-red-500 to-orange-500"></motion.div>
          <motion.div initial={"closed"} transition={{ ease: "easeOut", duration: 0.5 ,delay:0.45}} animate={"open"} variants={variants} className="min-w-3 mr-3 h-2 md:h-3 lg:h-4 w-12 bg-gradient-to-r from-red-500 to-orange-500"></motion.div>
          <motion.div initial={"closed"} transition={{ ease: "easeOut", duration: 0.5 ,delay:0.45}} animate={"open"} variants={variants} className="min-w-3 mr-3 h-2 md:h-3 lg:h-4 w-32 bg-gradient-to-r from-emerald-400 to-cyan-400"></motion.div>
        </motion.div>
        <div className="flex mb-3">
          <motion.div initial={"closed"} transition={{ ease: "easeOut", duration:0.43 }}  animate={"open"} variants={variants} className="min-w-3 mr-3 h-2 md:h-3 lg:h-4 w-32 bg-gradient-to-r from-fuchsia-500 to-pink-500"></motion.div>
          <motion.div initial={"closed"} transition={{ ease: "easeOut", duration: 0.5 ,delay:0.45}} animate={"open"} variants={variants} className="min-w-4 mr-3 h-2 md:h-3 lg:h-4 w-20 bg-gradient-to-r from-red-500 to-orange-500"></motion.div>
          <motion.div initial={{ opacity: 0, x: "600%" }}  transition={{ ease: "easeOut", duration: 0.8,delay:0.60 }} animate={"open"} variants={variants} className="bg-gradient-to-r from-red-500 to-orange-500 mr-3 rounded-full inline-block w-2 h-2 md:h-3 md:w-3 lg:h-4 lg:w-4 "></motion.div>
          <motion.div initial={{ opacity: 0, x: "150%" }}  transition={{ ease: "easeOut", duration: 0.8,delay:0.60 }} animate={"open"} variants={variants} className="min-w-3 mr-3 h-2 md:h-3 lg:h-4 w-44 bg-gradient-to-r from-amber-200 to-yellow-500 "></motion.div>
        </div>
        <div className="mb-3 h-2 md:h-3 lg:h-4"></div>
        <div className="flex mb-3 ml-14">
          <motion.div initial={"closed"} transition={{ ease: "easeOut", duration:0.43 }}  animate={"open"} variants={variants} className="min-w-4 mr-3 h-2 md:h-3 lg:h-4 w-16 bg-gradient-to-r from-emerald-400 to-cyan-400"></motion.div>
          <motion.div initial={"closed"} transition={{ ease: "easeOut", duration: 0.5 ,delay:0.45}} animate={"open"} variants={variants} className="min-w-3 mr-3 h-2 md:h-3 lg:h-4 w-4 bg-gradient-to-r from-red-500 to-orange-500 "></motion.div>
          <motion.div initial={{ opacity: 0, x: "150%" }}  transition={{ ease: "easeOut", duration: 0.8,delay:0.60 }} animate={"open"} variants={variants} className="min-w-3 mr-3 h-2 md:h-3 lg:h-4 w-12 bg-gradient-to-r from-red-500 to-orange-500 "></motion.div>
          <motion.div initial={{ opacity: 0, x: "150%" }}  transition={{ ease: "easeOut", duration: 0.8,delay:0.6 }} animate={"open"} variants={variants} className="min-w-3 mr-3 h-2 md:h-3 lg:h-4 w-32 bg-gradient-to-r from-fuchsia-500 to-pink-500"></motion.div>
        </div>
        <motion.div initial={{ opacity: 0, x: "75%" }}  transition={{ ease: "easeOut", duration: 0.75,delay:0.2 }} animate={"open"} variants={variants} className="ml-11 mt-8">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-1">Tarek Bourennane</h1>
            <h2 className="text-white text-sm md:text-lg lg:text-2xl font-bold ml-2 mb-5">Software Engineer</h2>
        </motion.div>
        <div className="flex mb-3">
          <motion.div initial={"closed"} transition={{ ease: "easeOut", duration:0.43 }}  animate={"open"} variants={variants} className=" mr-3 h-2 md:h-3 lg:h-4 w-36 bg-gradient-to-r from-fuchsia-500 to-pink-500"></motion.div>
          <motion.div initial={"closed"} transition={{ ease: "easeOut", duration: 0.43 ,delay:0.45}} animate={"open"} variants={variants} className="bg-gradient-to-r from-red-500 to-orange-500 mr-2 rounded-full inline-block w-3 h-3 lg:h-4 lg:w-4 "></motion.div>
        </div>
        <div className="flex mb-3">
          <motion.div initial={"closed"} transition={{ ease: "easeOut", duration:0.43 }}  animate={"open"} variants={variants} className=" mr-3 h-2 md:h-3 lg:h-4 w-28 bg-gradient-to-r from-amber-200 to-yellow-500"></motion.div>
          <motion.div initial={"closed"} transition={{ ease: "easeOut", duration: 0.5 ,delay:0.45}} animate={"open"} variants={variants} className=" mr-3 h-2 md:h-3 lg:h-4 w-12 bg-gradient-to-r from-emerald-400 to-cyan-400"></motion.div>
          <motion.div initial={{ opacity: 0, x: "75%" }}  transition={{ ease: "easeOut", duration: 0.8,delay:0.60 }} animate={"open"} variants={variants} className=" mr-3 h-2 md:h-3 lg:h-4 w-48 bg-gradient-to-r from-amber-200 to-yellow-500"></motion.div>
        </div>
        <div className="mb-3 h-2 md:h-3 lg:h-4"></div>
        <div className="flex mb-3">
          <motion.div initial={"closed"} transition={{ ease: "easeOut", duration:0.43 }}  animate={"open"} variants={variants} className=" mr-3 h-2 md:h-3 lg:h-4 w-36 bg-gradient-to-r from-fuchsia-500 to-pink-500"></motion.div>
          <motion.div initial={{ opacity: 0, x: "75%" }}  transition={{ ease: "easeOut", duration: 0.8,delay:0.60 }} animate={"open"} variants={variants} className=" mr-3 h-2 md:h-3 lg:h-4 w-12 bg-gradient-to-r from-fuchsia-500 to-pink-500"></motion.div>
        </div>
        <div className="flex mb-3">
          <motion.div initial={"closed"} transition={{ ease: "easeOut", duration:0.43 }}  animate={"open"} variants={variants} className=" mr-3 h-2 md:h-3 lg:h-4 w-56 bg-gradient-to-r from-fuchsia-500 to-pink-500"></motion.div>
        </div>
        <div className="flex mb-3">
          <motion.div initial={"closed"} transition={{ ease: "easeOut", duration:0.43 }}  animate={"open"} variants={variants} className="min-w-4 mr-3 h-2 md:h-3 lg:h-4 w-16 bg-gradient-to-r from-emerald-400 to-cyan-400"></motion.div>
          <motion.div initial={"closed"} transition={{ ease: "easeOut", duration: 0.5 ,delay:0.45}} animate={"open"} variants={variants} className="min-w-3 mr-3 h-2 md:h-3 lg:h-4 w-4 bg-gradient-to-r from-red-500 to-orange-500"></motion.div>
          <motion.div initial={"closed"} transition={{ ease: "easeOut", duration: 0.5 ,delay:0.45}} animate={"open"} variants={variants} className="min-w-3 mr-3 h-2 md:h-3 lg:h-4 w-12 bg-gradient-to-r from-red-500 to-orange-500"></motion.div>
          <motion.div initial={"closed"} transition={{ ease: "easeOut", duration: 0.5 ,delay:0.45}} animate={"open"} variants={variants} className="min-w-3 mr-3 h-2 md:h-3 lg:h-4 w-32 bg-gradient-to-r from-amber-200 to-yellow-500"></motion.div>
        </div>
        <motion.div initial={{height:"0",}} transition={{ ease: "easeOut", duration: 0.8 ,delay:0.35}} animate={{height:"99%"}} className="w-[1px] h-[99%] bg-white absolute opacity-30 -left-6 top-0 after:opacity-95 after:absolute after:bottom-0 after:-left-2 after:h-0 after:w-0 after:border-x-8 after:border-x-transparent after:border-t-[9px]"></motion.div>
      </div>
  );
}
