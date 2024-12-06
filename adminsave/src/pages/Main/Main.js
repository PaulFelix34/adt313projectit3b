import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import './Main.css';

function Main() {
  const [activeLink, setActiveLink] = useState('');
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem('accessToken');
      navigate('/');
    }
  };

  useEffect(() => {
    if (!accessToken) {
      handleLogout();
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    // Set active link based on current location
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div className='Main'>
      <div className='container'>
        <div className='navigation'>
          <ul>
            <li className={activeLink === '/main/dashboard' ? 'active' : ''}>
              <a href="/main/dashboard" style={{ color: '#fefefe', textTransform: 'uppercase' }}>
                <i className="fas fa-tachometer-alt" style={{ marginRight: '8px' }}></i> {/* Dashboard icon */}
                Dashboard
              </a>
            </li>
            <li className={activeLink === '/main/movies' ? 'active' : ''}>
              <a href='/main/movies' style={{ color: '#ffffff' }}>
                <i className="fas fa-film" style={{ marginRight: '8px' }}></i> {/* Movie icon */}
                Movies
              </a>
            </li>
            <li className='logout'>
              <a onClick={handleLogout} style={{ color: '#ffffff' }}>
                <i className="fas fa-sign-out-alt" style={{ marginRight: '8px' }}></i> {/* Logout icon */}
                Logout
              </a>
            </li>
          </ul>
        </div>
        <div className='outlet'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Main;
