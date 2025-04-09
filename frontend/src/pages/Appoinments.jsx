import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedWorkers from '../components/RelatedWorkers'
import { toast } from 'react-toastify'
import axios from 'axios'
import { motion } from 'framer-motion'

const Appointments = () => {

    const { docId } = useParams()
    const { doctors, currencySymbol, backendUrl, token, getDoctorsData } = useContext(AppContext)
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const navigate = useNavigate()

    const [docInfo, setDocInfo] = useState(null)
    const [docSlots, setDocSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')

    const fetchDocInfo = async () => {
        const docInfo = doctors.find(doc => doc._id === docId)
        setDocInfo(docInfo)
    }

    const getAvailableSlots = async () => {
        setDocSlots([])

        //Getting Current Date

        let today = new Date()
        for (let i = 0; i < 7; i++) {
            //Getting Date with Index
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)

            //Setting end time of the date with index
            let endTime = new Date()
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21, 0, 0, 0)

            //Setting Hours
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            } else {
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }

            let timeSlots = []

            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

                let day = currentDate.getDate()
                let month = currentDate.getMonth() + 1
                let year = currentDate.getFullYear()


                const slotDate = day + " " + month + " " + year
                const slotTime = formattedTime

                const isSlotAvailable = !(docInfo.slots_booked && docInfo.slots_booked[slotDate]?.includes(slotTime))

                if (isSlotAvailable) {
                    //Add Slot to array
                    timeSlots.push({
                        datetime: new Date(currentDate),
                        time: formattedTime
                    })
                }



                //Increment by 30 minutes
                currentDate.setMinutes(currentDate.getMinutes() + 30)
            }

            setDocSlots(prev => ([...prev, timeSlots]))
        }
    }

    const bookAppointment = async () => {

        if (!token) {
            toast.warn('Login to book appointment')
            return navigate('/login')
        }

        try {

            const date = docSlots[slotIndex][0].datetime

            let day = date.getDate()
            let month = date.getMonth() + 1
            let year = date.getFullYear()

            const slotDate = day + " " + month + " " + year

            const { data } = await axios.post(backendUrl + '/api/user/book-appointment', { docId, slotDate, slotTime }, { headers: { token } })
            if (data.success) {
                toast.success(data.message)
                await getDoctorsData()
                await getAvailableSlots()
                navigate('/my-appointments')
            } else {
                toast.error(data.message)
            }


        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchDocInfo()
    }, [doctors, docId])

    useEffect(() => {
        getAvailableSlots()
    }, [docInfo])

    useEffect(() => {
        console.log(docSlots);
    }, [docSlots])

    return docInfo && (
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-8">
            
            {/* Doctor Profile Section */}
             <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-bl from-primary/40 to-primary rounded-3xl shadow-[0_4px_10px_rgba(0,0,0,0.2),0_10px_20px_rgba(0,0,0,0.3)] overflow-hidden p-8"
                    
                >
                    
                    
                    <div className="flex flex-col lg:flex-row gap-10 items-center mx-6">
                        {/* Image Container */}
                        <div className=" max-w-xs md:max-w-sm lg:max-w-md flex-shrink-0 relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-100 rounded-2xl shadow-lg" />
                            <img 
                                className="max-w-xs  object-cover  rounded-2xl border-4 border-white transform hover:scale-105 hover:shadow-lg transition-transform duration-300"
                                src={docInfo.image} 
                                alt={docInfo.name}
                            />
                            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                </svg>
                                <span className="font-semibold text-blue-900">{currencySymbol} Hourly Fee: {docInfo.fees}</span>
                            </div>
                        </div>
                        

                        {/* Content Section */}
                        <div className="flex-1 space-y-6 max-w-full text-center lg:text-left">
                            
                            <div className="flex justify-center lg:justify-start items-center gap-4">
                                <h1 className="text-2xl md:text-3xl font-bold text-gray-100 text-shadow-md">
                                    {docInfo.name}
                                    <img className="w-6 h-6 ml-2 inline-block" src={assets.verified_icon} alt="Verified" />
                                </h1>
                            </div>
                            
                            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3">
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    {docInfo.rating || '4.8'}
                                </span>
                                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                     {docInfo.experience} Exp + {docInfo.degree}
                                </span>
                            </div>

                            <div className="space-y-4">
                                    <h3 className="text-xl font-semibold flex items-center gap-3 text-blue-900">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        About Tradesman
                                    </h3>
                                <p className="w-full max-w-[700px] text-gray-600 leading-relaxed bg-white p-6 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.2),0_10px_20px_rgba(0,0,0,0.3)]">
                                    {docInfo.about}
                                </p>

                            </div>
                        </div>
                        
                    </div>
                </motion.div>


           {/* Booking Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {/* Slot Selection Section */}
                <div className="md:col-span-2 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Select Time Slot</h2>
                    
                    {/* Date Picker */}
                    <div className="mb-6 sm:mb-10 overflow-x-auto pb-4 scrollbar-hide flex space-x-2 sm:space-x-4">
                        {docSlots.map((item, index) => (
                            <motion.button 
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSlotIndex(index)}
                                className={`flex-shrink-0 p-3 sm:p-5 w-20 sm:w-24 text-center rounded-xl transition-all text-sm sm:text-base font-medium ${
                                    slotIndex === index 
                                        ? 'bg-gradient-to-br from-primary/35 to-primary text-white shadow-lg'
                                        : 'bg-gray-50 hover:bg-gray-100 text-gray-600'
                                }`}
                            >
                                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                                <p className="text-lg sm:text-xl font-bold">{item[0] && item[0].datetime.getDate()}</p>
                            </motion.button>
                        ))}
                    </div>

                    {/* Time Slots Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                        {docSlots.length > 0 && docSlots[slotIndex].map((item, index) => {
                            const isMorning = item.datetime.getHours() < 12;
                            return (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => setSlotTime(item.time)}
                                    className={`p-3 sm:p-4 text-xs sm:text-sm rounded-xl transition-all flex flex-col items-center ${
                                        item.time === slotTime
                                            ? 'bg-blue-500 text-white shadow-lg'
                                            : `bg-gray-50 hover:bg-blue-50 ${isMorning ? 'text-primary' : 'text-primary'}`
                                    }`}
                                >
                                    <span>{item.time.toLowerCase()}</span>
                                    <span className="text-xs mt-1 opacity-75">{isMorning ? 'Morning' : 'Evening'}</span>
                                </motion.button>
                            )})}
                    </div>
                </div>

                {/* Booking Summary */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 h-fit sticky top-8 border border-gray-100">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Appointment Summary</h3>
                    <div className="space-y-4 sm:space-y-5">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1 sm:gap-2 text-gray-600">
                                <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>Date:</span>
                            </div>
                            <span className="font-medium text-gray-900">
                                {docSlots[slotIndex]?.[0]?.datetime.toLocaleDateString()}
                            </span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1 sm:gap-2 text-gray-600">
                                <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Time:</span>
                            </div>
                            <span className="font-medium text-gray-900">
                                {slotTime.toLowerCase()}
                            </span>
                        </div>

                        <div className="pt-3 sm:pt-4 border-t border-gray-200">
                            <div className="flex justify-between items-center">
                                <span className="text-md sm:text-lg font-semibold text-gray-700">Total:</span>
                                <span className="text-lg sm:text-2xl font-bold text-blue-600">
                                    {currencySymbol}{docInfo.fee}
                                </span>
                            </div>
                        </div>
                    </div>

                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={bookAppointment}
                        className="w-full mt-6 sm:mt-8 bg-gradient-to-br from-primary/65 to-primary hover:from-blue-600 hover:to-cyan-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-semibold shadow-lg transition-all duration-300"
                    >
                        Confirm Appointment
                    </motion.button>
                </div>
            </div>


            <RelatedWorkers docId={docId} speciality={docInfo.speciality} />
        </div>
    )
}

export default Appointments