import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { StarIcon, MapPinIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';

const Workers = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className='flex min-h-screen -mt-12'>
       {/* ✅ Overlay for mobile (clicking outside closes sidebar) */}
    {showFilter && <div className="fixed inset-0 bg-black/40 sm:hidden" onClick={() => setShowFilter(false)} />}
      {/* Sidebar */}
      <aside className={`w-64 z-50   p-5 flex flex-col h-screen fixed left-0 top-20 transition-all duration-300 ${showFilter ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}>
        <button
          className='sm:hidden text-gray-500  text-lg mb-5'
          onClick={() => setShowFilter(prev => !prev)}
        >
          
        </button>
        <h2 onClick={() => navigate('/workers')} className='text-xl bg-gradient-to-tr   from-primary/90 via-primary/20 to-primary/70 text-shadow-md 0 text-center rounded-lg py-2 cursor-context-menu font-semibold mb-4 mt-4  text-gray-100'>Tradesmen</h2>
        <nav className='space-y-6 mt-5'>
        {["Electrician", "Plumber", "Welder", "Painter", "Mason"].map(trade => (
            <p
              key={trade}
              onClick={() => {
                if (speciality === trade) {
                  navigate('/workers');
                } else {
                  navigate(`/workers/${trade}`);
                }
                setShowFilter(false); // ✅ This ensures the sidebar closes after selection
              }}
              className={`cursor-pointer text-sm px-3 py-2 text-center bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 animate-border rounded-lg transition-all shadow-[0_4px_10px_rgba(0,0,0,0.2),0_10px_20px_rgba(0,0,0,0.3)] hover:from-gray-400 hover:to-gray-300 duration-300 ${speciality === trade ? 'bg-indigo-200' : 'text-gray-700 sm:px-2 sm:py-4 sm:text-sm lg:px-5 lg:py-5 md:text-lg md:px-5 md:py-5'}`}
            >
              {trade}
            </p>
          ))}

        </nav>
      </aside>

      {/* Main Content */}
      <div className='flex-1 p-8 mb-10  sm:ml-64 '>
        <button className='sm:hidden px-4 py-2 mb-4 bg-primary text-gray-600 rounded' onClick={() => setShowFilter(true)}>☰ Filters</button>
        <h1 className='text-2xl font-semibold text-center text-gray-400'>Find the Best Tradesmen</h1>

        {/* Tradesmen Grid */}
        <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8'>
          {filterDoc.map((item, index) => (
            <div 
              key={index}
              onClick={() => { navigate(`/appointment/${item._id}`); window.scrollTo(0, 0) }} 
              className='group relative bg-gradient-to-br from-primary/20 to-primary max-w-xs rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden'
            >
              <div className='relative h-56 overflow-hidden'>
                <img className='object-cover    transform group-hover:scale-110 transition-transform duration-700' src={item.image} alt={item.name} />
                <div className='absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent' />
                <div className='absolute bottom-3 left-3 flex items-center space-x-2'>
                  <CheckBadgeIcon className='w-4 h-4 text-blue-400' />
                  <span className='text-xs font-medium text-white'>Verified</span>
                </div>
              </div>
              <div className='p-4 space-y-2'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-lg font-semibold text-gray-900'>{item.name}</h3>
                  <div className='flex items-center space-x-1'>
                    <StarIcon className='w-4 h-4 text-amber-400' />
                    <span className='text-sm font-medium text-gray-700'>4.9</span>
                  </div>
                </div>
                <div className='flex items-center space-x-2'>
                  <span className='px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full'>
                    {item.speciality}
                  </span>
                  <span className='text-xs text-gray-500'>• 12y exp</span>
                </div>
                <div className='flex items-center space-x-2 text-gray-500'>
                  <MapPinIcon className='w-4 h-4' />
                  <p className='text-xs truncate'>{item.location || 'City General Hospital'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workers;
