import { assets } from '../assets/assets';
import '../css/header.css';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }} 
            className='flex flex-col mt-12 items-center bg-gradient-to-l from-primary via-primary/60 to-primary rounded-lg px-2 md:px-10 lg:px-10 py-0 overflow-hidden relative shadow-[0_4px_10px_rgba(0,0,0,0.2),0_10px_20px_rgba(0,0,0,0.3)]'
        >
            
            {/* ---------------- Container -------------------- */}
            <div className="flex flex-col md:flex-row items-center w-full gap-6">

                {/* ---------------- Left Side (Logo and Text "Fit&Fix") -------------------- */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 1, delay: 0.2 }} 
                    className="md:w-1/4 mx-[4vw] flex items-center justify-start gap-[1vw] md:ml-[-1vw]"
                >
                  
                    <img className="w-[6vw] h-auto  md:block hidden" src={assets.logooo} alt="Logo" />
                    <p className="text-[8vw] md:text-[5vw] lg:text-[6vw] text-white font-bold text-shadow-md ">
                        Fit&Fix
                    </p>
                </motion.div>

                {/* ---------------- Center (Image) -------------------- */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 1, delay: 0.4 }} 
                    className="md:w-1/2 flex items-end justify-center h-full"
                >
                    <img className='w-[60vw] h-full  lg:w-[32vw] rounded-lg object-cover' src={assets.header_img} alt="Header Image" />
                </motion.div>

                {/* ---------------- Right Side (Other Text and Button) -------------------- */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 1, delay: 0.6 }} 
                    className="md:w-1/4 flex flex-col py-[2vh] md:items-start md:text-left gap-[2vh] items-center text-center"
                > 
                
                    <p className="text-[3,5vw] md:text-[2.2vw] lg:text-[2.5vw] text-white font-semibold leading-tight drop-shadow-lg">
                        Schedule a Service With Skilled Tradesmen
                    </p>
                    <div className="flex flex-row items-center gap-3 text-white text-sm font-light md:justify-start justify-center">
                        <motion.img 
                            initial={{ opacity: 0, scale: 0.8 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            transition={{ duration: 1, delay: 0.8 }} 
                            className='w-[8vw] md:w-[7vw] h-full hidden md:flex' 
                            src={assets.group_profiles} alt="Group Profiles" 
                        />
                        <p className="max-w-xs md:max-w-[30vw] lg:max-w-[25vw] text-[0.8vw] md:text-[0.7vw] lg:text-[0.9vw]">
                            Simply browse through our extensive list of trusted Tradesmen, schedule your appointment hassle-free.
                        </p>
                    </div>
                    <motion.a 
                        href="#speciality" 
                        initial={{ opacity: 0, scale: 0.9 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 1, delay: 1 }} 
                        className="flex items-center justify-center gap-2 md:gap-1 bg-white px-8 py-3 rounded-full text-gray-600 text-[2vw] md:text-[1vw] hover:scale-105 transition-all duration-300 "
                    >
                        Book appointment <img className='w-3' src={assets.arrow_icon} alt="Arrow Icon" />
                    </motion.a>
                    
                </motion.div>
                
            </div>

            {/* ---------------- Screw Circles with "+" Icons -------------------- */}
               {/* ---------------- Screw Circles with "+" Icons -------------------- */}
               <div className="absolute top-7 left-7 transform translate-x-[-10%] translate-y-[-10%] w-6 h-6 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full shadow-xl text-shadow-md flex items-center justify-center hidden md:flex lg:flex">
                <span className="text-gray-400 font-bold transform rotate-45">+</span> {/* Rotated + sign */}
                </div>
                <div className="absolute top-7 right-7 transform translate-x-[10%] translate-y-[-10%] w-6 h-6 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full shadow-xl text-shadow-md flex items-center justify-center hidden md:flex lg:flex">
                    <span className="text-gray-400 font-bold transform rotate-60">+</span> {/* Different rotation */}
                </div>
                <div className="absolute bottom-7 left-7 transform translate-x-[-10%] translate-y-[10%] w-6 h-6 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full shadow-xl text-shadow-md flex items-center justify-center hidden md:flex lg:flex">
                    <span className="text-gray-400 font-bold transform rotate-65">+</span> {/* Different rotation */}
                </div>
                <div className="absolute bottom-7 right-7 transform translate-x-[10%] translate-y-[10%] w-6 h-6 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full shadow-xl text-shadow-md flex items-center justify-center hidden md:flex lg:flex">
                    <span className="text-gray-400 font-bold transform rotate-45">+</span> {/* Different rotation */}
                </div>
            {/* {["top-7 left-7", "top-7 right-7", "bottom-7 left-7", "bottom-7 right-7"].map((position, index) => (
                <motion.div 
                    
                    className={`absolute ${position} transform translate-x-[-10%] translate-y-[-10%] w-6 h-6 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full shadow-xl flex items-center justify-center hidden md:flex lg:flex`}
                >
                    <span className="text-gray-400 font-bold transform rotate-45">+</span>
                </motion.div>
            ))} */}
        </motion.div>
    );
};

export default Header;
