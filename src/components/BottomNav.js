import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HouseDoor, GeoAlt, PlusLg, PersonCircle} from 'react-bootstrap-icons';

function BottomNav() {

    let [activeNav, setActiveNav] = useState(1);

    return (
        <>
            <nav className="wrapper d-block d-sm-none d-md-none">
                <div>
                    <Link to="/" className="nav-link" onClick={() => setActiveNav(1)}>
                        <HouseDoor className={activeNav === 1 ? "nav-item active" : "nav-item"} />
                    </Link>
                </div>
                <div>
                    <Link to="/meeting" className="nav-link" onClick={() => setActiveNav(2)}>
                        <GeoAlt className={activeNav === 2 ? "nav-item active" : "nav-item"} />
                    </Link>
                </div>
                <div>
                    <Link to="/add" className="nav-link" onClick={() => setActiveNav(3)}>
                        <PlusLg className={activeNav === 3 ? "nav-item active" : "nav-item"} />
                    </Link>
                </div>
                <div>
                <Link to="/login" className="nav-link" onClick={() => setActiveNav(4)}>
                    <PersonCircle className={activeNav === 4 ? "nav-item active" : "nav-item"} />
                </Link>
                </div>
            </nav>
            <nav className="wrapper d-none d-sm-block d-md-block">
                <div className="float-start text-secondary">
                   Privacy policy
                </div>
                <div className="float-end text-secondary">
                    Manna © 2022 All rights reserved
                </div>
            </nav>
            </>
    );
}


export default BottomNav;   