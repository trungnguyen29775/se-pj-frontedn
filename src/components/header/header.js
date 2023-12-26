import './header.css';
import { IoIosSearch } from 'react-icons/io';

function Header() {
    return (
        <div className="home-header-container">
            <img className="logo__img" src="image/logo.png" />
            <div className="home-search-container">
                <input className="home-search-container__input" placeholder="Search for food" />
                <IoIosSearch fontSize={'25px'} />
            </div>
        </div>
    );
}

export default Header;
