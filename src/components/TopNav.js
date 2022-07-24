import { Link } from 'react-router-dom';
import { faBell, faSearch, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Container } from 'react-bootstrap';

function TopNav() {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className="manna-logo">
                            <img src="./alien.ico" alt="manna-icon" className="manna-icon mb-1"/>&nbsp;<span className="fw-bolder fs-3">MANNA</span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="nav">
                            <div>
                                <Link to="/" className="nav-link">
                                    <FontAwesomeIcon icon={faBell} />
                                </Link>
                            </div>
                            <div>
                                <Link to="/" className="nav-link">
                                    <FontAwesomeIcon icon={faSearch} />
                                </Link>
                            </div>
                            <div>
                                <Link to="/" className="nav-link">
                                    <FontAwesomeIcon icon={faCommentDots} />
                                </Link>
                            </div>
                    </Navbar.Text>  
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default TopNav;