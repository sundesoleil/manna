import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faHouse, faPlus, faUser, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BottomNav() {

    let [activeNav, setActiveNav] = useState(1);

    return (
        <>
            <nav className="wrapper d-block d-sm-none d-md-none">
                <div>
                    <Link to="/" className="nav-link" onClick={() => setActiveNav(1)}>
                        <FontAwesomeIcon
                            icon={faHouse}
                            className={activeNav === 1 ? "nav-item active" : "nav-item"}
                        />
                    </Link>
                </div>
                <div>
                    <Link to="/meeting" className="nav-link" onClick={() => setActiveNav(2)}>
                        <FontAwesomeIcon
                            icon={faMapLocation}
                            className={activeNav === 2 ? "nav-item active" : "nav-item"}
                        />
                    </Link>
                </div>
                <div>
                    <Link to="/add" className="nav-link" onClick={() => setActiveNav(3)}>
                        <FontAwesomeIcon
                            icon={faPlus}
                            className={activeNav === 3 ? "nav-item active" : "nav-item"}
                        />
                    </Link>
                </div>
                <div>
                <Link to="/profile" className="nav-link" onClick={() => setActiveNav(4)}>
                    <FontAwesomeIcon
                            icon={faUser}
                            className={activeNav === 4 ? "nav-item active" : "nav-item"}
                    />
                </Link>
                </div>
            </nav>
            <nav className="wrapper d-none d-sm-block d-md-block">
                <div className="float-start text-secondary">
                   Privacy policy
                </div>
                <div className="float-end text-secondary">
                    Manna @ 2022 All rights reserved
                </div>
            </nav>
            </>
    );
}


export default BottomNav;   