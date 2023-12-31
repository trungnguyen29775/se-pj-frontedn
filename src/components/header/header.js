import './header.css';
import { IoIosSearch } from 'react-icons/io';
import { FaAngleLeft } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';
function Header() {
    const hanldeOnClickRight = () => {
        const right = document.querySelector('.right-side-bar-wrapper');
        right.classList.add('display-block');
    };
    return (
        <div className="home-header-container">
            <img className="logo__img" src="image/logo.png" />
            <div className="home-search-container">
                <input className="home-search-container__input" placeholder="Search for food" />
                <IoIosSearch fontSize={'25px'} />
            </div>
            <div className="right-side-bar-icon" onClick={hanldeOnClickRight}>
                <MdPayment fontSize={'25px'} />
            </div>
        </div>
    );
}

export default Header;
