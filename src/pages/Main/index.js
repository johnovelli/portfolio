import { Outlet } from 'react-router-dom';
import './main.css';

import Home from '../Home';

function Main({ theme }) {
    return (
        <main className="Main">
            <div className='Main-Content'>
                <Outlet />
            </div>
        </main>
    )
}

export default Main;