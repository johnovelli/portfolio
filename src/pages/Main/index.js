/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';
import './main.css';

import Footer from '../../components/Footer';

function Main() {
  return (
    <main className="Main">
      <div className="Main-Content">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default Main;
