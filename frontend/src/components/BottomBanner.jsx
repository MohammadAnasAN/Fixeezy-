import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

   
    return (
      
      <div className=' items-center  text-gray-900  lg:px-8 '>
            <h1 className='text-4xl font-bold text-gray-500 text-center ' >Get Started Now</h1>
            <p className='fsm:w-1/2 py-4 text-center text-lg text-gray-600'>
            "The platform facilitates easy booking of necessary services for users"
            </p>
        <div className='relative my-8 mb-28 border-gray-300  border-8 flex shadow-[0_4px_10px_rgba(0,0,0,0.2),0_10px_20px_rgba(0,0,0,0.3)] bg-gradient-to-tr from-primary via-primary to-primary/5 rounded-2xl px-6 sm:px-12 md:px-16  md:mx-10 overflow-hidden group transition-all duration-500 '>
          
            {/* Animated background elements */}
            <div className='absolute inset-0'>
                <div className='absolute w-48 h-48 bg-white/20 rounded-full -top-24 -left-24 animate-pulse delay-300'/>
                <div className='absolute w-64 h-64 bg-white/5 rounded-full -bottom-32 -right-32 animate-pulse'/>
            </div>

            {/* Left Side */}
            <div className='flex-1 py-10 md:py-16 lg:py-24 z-10'>
                <div className='space-y-4 md:space-y-6'>
                    <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 animate-slideInRight'>
                    <span className='ml-2  animate-text-shimmer bg-gradient-to-r from-white via-white to-gray-300  bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-lg'> Book Your Slots </span>
                    </p>
                    <p className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white/90 animate-slideInRight delay-100'>
                        <span className='ml-2 animate-text-shimmer bg-gradient-to-r from-white via-white to-gray-100/80 bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-lg'>With 100+ Trusted Tradesmen</span>
                    </p>
                </div>
                
                <button 
                    onClick={() => { navigate('/login'); scrollTo(0, 0) }} 
                    className='mt-8 bg-white text-gray-800 px-10 py-4 rounded-full font-semibold hover:bg-white/90 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 transform-gpu group relative overflow-hidden'
                >
                    <span className='relative z-10'>Create Account</span>
                    <div className='absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'/>
                </button>
            </div>

            {/* Right Side */}
            <div className=' w-[45%] lg:w-[40%] xl:w-[35%] relative -mr-8'>
                <img 
                    className='hidden md:block md:w1/2 lg:w-[370px] relative   right-0 max-w-md transform transition-transform duration-500 hover:scale-105' 
                    src={assets.appointment_img} 
                    alt="Appointment illustration"
                    style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.25))' }}
                />
                <div className='absolute inset-0 bg-gradient-to-l from-transparent via-primary/30 to-transparent'/>
            </div>

            {/* Animated Particles */}
            <div className='absolute inset-0 z-0'>
                {[...Array(12)].map((_, i) => (
                    <div 
                        key={i}
                        className='absolute w-2 h-2 bg-white/60 rounded-full animate-float'
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`
                        }}
                    />
                ))}
            </div>
        </div>
        </div>
    )
}

export default Banner