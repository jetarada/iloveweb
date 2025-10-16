
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/pork">Pork</Link>
            <Link to="/beef">Beef</Link>
            <Link to="/chicken">Chicken</Link>
        </nav>
    );
} 

export default Navbar;