import { MotionProps, MotionStyle, motion, transform } from "framer-motion";


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
    const variantforshowcaseDiv = {
      hidden: {
        x: '100vw', 
        opacity:0,
      },
      visible: {
        x: '0', 
        rotateY: 0,
        rotateZ: -5,
        opacity:1,
      },
  }
  return (
    <div className="relative w-[80%] left-24">
      <h3 className="text-white flex items-center text-2xl font-bold">
        <span className="bg-gradient-to-r from-amber-200 to-yellow-500 w-12 h-3 mr-4"/>
        WORK
      </h3>
      <ul className="pt-4 pb-4 relative">
        <li>
            <motion.a href="https://www.youtube.com/" target="_blank" className="flex items-center gap-3" initial="hidden" whileHover="visible">
                <motion.span variants={variantforbar} className="h-4 bg-gradient-to-r from-fuchsia-500 to-pink-500"></motion.span>
                <span className="text-lg text-white test">TEST</span>
                <span className="bg-gradient-to-r from-red-500 to-orange-500 rounded-full inline-block w-2 h-2 md:h-3 md:w-3 lg:h-4 lg:w-4 "></span>
                <motion.span variants={variantforsmalltest} className="text-white opacity-50 hover:opacity-100">tesffffffffffffffffffffffffffffffft</motion.span>
                
                <motion.div variants={variantforshowcaseDiv} transition={{  duration: 1, ease: "easeInOut"}} className="flex bg-black w-96 h-44 absolute top-0 right-[5%]">
                  <div className="relative flex w-full h-full">
                    <img src="work/hero-image.fill.size_1248x702.v1623387368.png" alt=""  className="w-full h-full  object-fill"/>
                    <div className="flex absolute -top-2 -left-6 h-2 md:h-3 lg:h-4 w-14 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                    <div className="flex absolute -bottom-2 -right-5 h-2 md:h-3 lg:h-4 w-20 bg-gradient-to-r from-amber-200 to-yellow-500"></div>
                  </div>
                </motion.div>
            </motion.a>
        </li>
        <li>
        <motion.a href="https://www.youtube.com/" target="_blank" className="flex items-center gap-3" initial="hidden" whileHover="visible">
                <motion.span variants={variantforbar} className="h-4 bg-gradient-to-r from-fuchsia-500 to-pink-500"></motion.span>
                <span className="text-lg text-white test">TEST</span>
                <span className="bg-gradient-to-r from-red-500 to-orange-500 rounded-full inline-block w-2 h-2 md:h-3 md:w-3 lg:h-4 lg:w-4 "></span>
                <motion.span variants={variantforsmalltest} className="text-white opacity-50 hover:opacity-100">tesffffffffffffffffffffffffffffffft</motion.span>
                
                <motion.div variants={variantforshowcaseDiv} transition={{  duration: 1, ease: "easeInOut"}} className="flex bg-black w-96 h-44 absolute top-0 right-[5%]">
                  <div className="relative flex w-full h-full">
                    <img src="work/hero-image.fill.size_1248x702.v1623387368.png" alt=""  className="w-full h-full  object-fill"/>
                    <div className="flex absolute -top-2 -left-6 h-2 md:h-3 lg:h-4 w-14 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                    <div className="flex absolute -bottom-2 -right-5 h-2 md:h-3 lg:h-4 w-20 bg-gradient-to-r from-amber-200 to-yellow-500"></div>
                  </div>
                </motion.div>
            </motion.a>
        </li>
      </ul>
      <h3 className="text-white flex items-center text-2xl font-bold">
        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 w-12 h-3 mr-4"/>
        Side Projects
      </h3>
      <ul className="pt-4 pb-4 relative">
        <li>
            <motion.a href="https://www.youtube.com/" target="_blank" className="flex items-center gap-3" initial="hidden" whileHover="visible">
                <motion.span variants={variantforbar} className="h-4 bg-gradient-to-r from-fuchsia-500 to-pink-500"></motion.span>
                <span className="text-lg text-white test">TEST</span>
                <span className="bg-gradient-to-r from-red-500 to-orange-500 rounded-full inline-block w-2 h-2 md:h-3 md:w-3 lg:h-4 lg:w-4 "></span>
                <motion.span variants={variantforsmalltest} className="text-white opacity-50 hover:opacity-100">tesffffffffffffffffffffffffffffffft</motion.span>
                
                <motion.div variants={variantforshowcaseDiv} transition={{  duration: 1, ease: "easeInOut"}} className="flex bg-black w-96 h-44 absolute top-0 right-[5%]">
                  <div className="relative flex w-full h-full">
                    <img src="work/hero-image.fill.size_1248x702.v1623387368.png" alt=""  className="w-full h-full  object-fill"/>
                    <div className="flex absolute -top-2 -left-6 h-2 md:h-3 lg:h-4 w-14 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                    <div className="flex absolute -bottom-2 -right-5 h-2 md:h-3 lg:h-4 w-20 bg-gradient-to-r from-amber-200 to-yellow-500"></div>
                  </div>
                </motion.div>
            </motion.a>
        </li>
        <li>
        <motion.a href="https://www.youtube.com/" target="_blank" className="flex items-center gap-3" initial="hidden" whileHover="visible">
                <motion.span variants={variantforbar} className="h-4 bg-gradient-to-r from-fuchsia-500 to-pink-500"></motion.span>
                <span className="text-lg text-white test">TEST</span>
                <span className="bg-gradient-to-r from-red-500 to-orange-500 rounded-full inline-block w-2 h-2 md:h-3 md:w-3 lg:h-4 lg:w-4 "></span>
                <motion.span variants={variantforsmalltest} className="text-white opacity-50 hover:opacity-100">tesffffffffffffffffffffffffffffffft</motion.span>
                
                <motion.div variants={variantforshowcaseDiv} transition={{  duration: 1, ease: "easeInOut"}} className="flex bg-black w-96 h-44 absolute top-0 right-[5%]">
                  <div className="relative flex w-full h-full">
                    <img src="work/hero-image.fill.size_1248x702.v1623387368.png" alt=""  className="w-full h-full  object-fill"/>
                    <div className="flex absolute -top-2 -left-6 h-2 md:h-3 lg:h-4 w-14 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                    <div className="flex absolute -bottom-2 -right-5 h-2 md:h-3 lg:h-4 w-20 bg-gradient-to-r from-amber-200 to-yellow-500"></div>
                  </div>
                </motion.div>
            </motion.a>
        </li>
      </ul>
      <div className="w-[1px] h-[99%] bg-white absolute opacity-30 -left-6 top-0 after:opacity-95 after:absolute after:bottom-0 after:-left-2 after:h-0 after:w-0 after:border-x-8 after:border-x-transparent after:border-t-[9px]"></div>
    </div>
  );
}
