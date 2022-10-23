import React from 'react';
import { Outlet, Link } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <nav>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            listStyle: 'none',
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <button>
              <Link to="/leaderboard">Leaderboard</Link>
            </button>
          </li>
          <li>
            <button>
              {/* <Link to="/play">Play</Link> */}
              Play
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Layout;
