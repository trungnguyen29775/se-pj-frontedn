import './home.css';
import { IoIosSearch } from 'react-icons/io';

function Home() {
    return (
        <div className="home-wrapper">
            <div className="home-header-container">
                <img className="logo__img" src="image/logo.png" />
                <div className="home-search-container">
                    <input className="home-search-container__input" placeholder="Search for food" />
                    <IoIosSearch fontSize={'25px'} />
                </div>
            </div>
            {/* Home content */}
            <div className="home-content-container">
                {/* Content 1 */}
                <div className="home-welcome">
                    <img className="home-welcom__img" src="/image/pizza-shipper.png" />
                    <div className="welcome-title-container">
                        <span className="header">Hello Nguyễn Trần Minh Trung</span>
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

                    {/* Type list */}

                    <div className="type-list-container">
                        <div>
                            <img />
                            <span></span>
                            <div>
                                <span>
                                    <span>Rs.</span>18
                                </span>

                                <div>+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
