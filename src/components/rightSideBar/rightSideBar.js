import './rightSideBar.css';
import { FiShoppingCart } from 'react-icons/fi';
import { FaRegBell } from 'react-icons/fa';

function RightSideBar() {
    return (
        <div className="right-side-bar-wrapper">
            <div className="right-side-bar-header">
                <button className="right-side-bar-header__button">Login</button>
                <div className="header-icon--center">
                    <FiShoppingCart />
                </div>
                <div className="header-icon--center">
                    <FaRegBell />
                    <div className="num-cart--up">
                        <span style={{ margin: 'auto' }}>0</span>
                    </div>
                </div>
            </div>
            <div className="slogan-container">
                <img src="/image/right-side-bar-image.png" />
                <span className="slogan">
                    Safe Delivery <span className="hightlight">@</span> your doors
                </span>
            </div>

            <div className="right-side-bar-order-container">
                <span>Order Menu</span>
                <span>View All</span>
            </div>
        </div>
    );
}
export default RightSideBar;
