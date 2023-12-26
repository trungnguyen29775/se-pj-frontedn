import './home.css';
import { IoIosSearch } from 'react-icons/io';

import TypleList from '../../components/typeList/typeList';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import StateContext from '../../redux/Context';
import Header from '../../components/header/header';

function Home() {
    const navigate = useNavigate();

    const [state, setState] = useContext(StateContext);
    return (
        <div className="home-wrapper">
            <Header />
            {/* Home content */}
            <div className="home-content-container">
                {/* Content 1 */}
                <div className="home-welcome">
                    <img className="home-welcom__img" src="/image/pizza-shipper.png" />
                    <div className="welcome-title-container">
                        <span className="header">Hello {state.userData.name}</span>
                        <span>
                            Get Free delivery <span className="highlight">500 Rs</span> and above
                        </span>
                        <button className="welcome__button">Order Now!</button>
                    </div>
                </div>
                {/* Content 2 */}
                <div className="home-menu-container">
                    <span className="menu-header">Menu</span>
                    <div className="menu-type-container">
                        <div className="menu-type active">
                            <div className="menu-type-image-container">
                                <img src="/image/pizza.png" />
                            </div>
                            <span>Pizza</span>
                        </div>

                        <div className="menu-type ">
                            <div className="menu-type-image-container">
                                <img src="/image/burger.png" />
                            </div>
                            <span>burger</span>
                        </div>

                        <div className="menu-type ">
                            <div className="menu-type-image-container">
                                <img src="/image/sandwitch.png" />
                            </div>
                            <span>Sandwitch</span>
                        </div>

                        <div className="menu-type ">
                            <div className="menu-type-image-container">
                                <img src="/image/smoothy.png" />
                            </div>
                            <span>Smoothy</span>
                        </div>

                        <div className="menu-type ">
                            <div className="menu-type-image-container">
                                <img src="/image/popcorn.png" />
                            </div>
                            <span>Snack</span>
                        </div>

                        <div className="menu-type ">
                            <div className="menu-type-image-container">
                                <img src="/image/drink.png" />
                            </div>
                            <span>Drink</span>
                        </div>
                    </div>
                    <TypleList />
                </div>
            </div>
        </div>
    );
}

export default Home;
