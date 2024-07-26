import { Outlet } from 'react-router-dom';
import './main.css';

function Main({ theme }) {
  return (
    <main className="Main">
      <div className="Main-Content">
        <Outlet />
      </div>
    </main>
  );
}

export default Main;
