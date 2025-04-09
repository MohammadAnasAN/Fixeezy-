import { useNavigate, useParams } from 'react-router-dom';

const Sidebar = ({ showFilter, setShowFilter }) => {
  const { speciality } = useParams();
  const navigate = useNavigate();

  const trades = ["Electrician", "Plumber", "Welder", "Painter", "Mason"];

  return (
    <>
      {/* ✅ Overlay for mobile */}
      {showFilter && <div className="fixed inset-0 bg-black/40 sm:hidden" onClick={() => setShowFilter(false)} />}

      {/* Sidebar */}
      <aside className={`w-64 z-30 p-5 flex flex-col h-screen fixed left-0 top-20 transition-all duration-300 ${showFilter ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}>
        <h2 onClick={() => navigate('/workers')} className='text-xl bg-gradient-to-tr from-primary/90 via-primary/20 to-primary/70 text-shadow-md text-center rounded-lg py-2 cursor-pointer font-semibold mb-4 mt-4 text-gray-100'>
          Tradesmen
        </h2>
        <nav className='space-y-6 mt-5'>
          {trades.map(trade => (
            <p
              key={trade}
              onClick={() => {
                speciality === trade ? navigate('/workers') : navigate(`/workers/${trade}`);
                setShowFilter(false);
              }}
              className={`cursor-pointer text-sm px-3 py-2 text-center bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 animate-border rounded-lg transition-all shadow-md hover:from-gray-400 hover:to-gray-300 duration-300 ${
                speciality === trade ? 'bg-indigo-200' : 'text-gray-700'
              }`}
            >
              {trade}
            </p>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
