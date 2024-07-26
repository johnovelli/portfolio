/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';
import './main.css';

function Main() {
  return (
    <main className="Main">
      <div className="Main-Content">
        <Outlet />
      </div>
    </main>
  );
}

export default Main;
