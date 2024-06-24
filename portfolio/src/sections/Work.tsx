import { MotionProps, MotionStyle, motion } from "framer-motion";


export function Work () {
    const randomInteger = Math.floor(Math.random() * (150 - 30 + 1)) + 30;

    const variantforbar = {
        hidden: {
          width: "0",
        },
        visible: {
            width :randomInteger +"px",
            opacity:1
        },
    }
    const variantforsmalltest = {
        hidden: {
          opacity: 0.5,
        },
        visible: {
            opacity:1
        },
    }
  return (
    <div className="relative w-[80%] left-24">
      <h3 className="text-white flex items-center text-2xl font-bold">
        <span className="bg-gradient-to-r from-amber-200 to-yellow-500 w-12 h-3 mr-4"/>
        WORK
      </h3>
      <ul className="pt-4 pb-4">
        <li>
            <motion.a  className="flex items-center gap-3" initial="hidden" whileHover="visible">
                <motion.span variants={variantforbar} className="h-4 bg-gradient-to-r from-fuchsia-500 to-pink-500"></motion.span>
                <span className="text-lg text-white test">TEST</span>
                <span className="bg-gradient-to-r from-red-500 to-orange-500 rounded-full inline-block w-2 h-2 md:h-3 md:w-3 lg:h-4 lg:w-4 "></span>
                <motion.span variants={variantforsmalltest} className="text-white opacity-50 hover:opacity-100">tesffffffffffffffffffffffffffffffft</motion.span>
            </motion.a>
        </li>
        <li>
            <motion.a  className="flex items-center gap-3" initial="hidden" whileHover="visible">
                <motion.span variants={variantforbar} className="h-4 bg-gradient-to-r from-fuchsia-500 to-pink-500"></motion.span>
                <span className="text-lg text-white test">TEST</span>
                <span className="bg-gradient-to-r from-red-500 to-orange-500 rounded-full inline-block w-2 h-2 md:h-3 md:w-3 lg:h-4 lg:w-4 "></span>
                <motion.span variants={variantforsmalltest} className="text-white opacity-50 hover:opacity-100">tesffffffffffffffffffffffffffffffft</motion.span>
            </motion.a>
        </li>
        <li>test</li>
      </ul>
      <div className="w-[1px] h-[99%] bg-white absolute opacity-30 -left-6 top-0 after:opacity-95 after:absolute after:bottom-0 after:-left-2 after:h-0 after:w-0 after:border-x-8 after:border-x-transparent after:border-t-[9px]"></div>
    </div>
  );
}
