import { useContext, useEffect, useState } from 'react';
import Header from '../../components/header/header';
import './favorite.css';
import instance from '../../axios/instance';
import StateContext from '../../redux/Context';
import TypleList from '../../components/typeList/typeList';
import { getFavoriteData } from '../../redux/Action';

function Favorite() {
    const [favoriteData, setFavoriteData] = useState([]);
    const [state, dispatchState] = useContext(StateContext);

    useEffect(() => {
        // console.log(favoriteData);
    }, [favoriteData]);

    return (
        <div className="favorite-wrapper">
            <Header />
            {state.login ? (
                <div className="favorite-content-container">
                    <span className="favorite-content-header">My Favorite</span>
                    <div className="type-list-container">
                        {state.userData.favorite.map((item, index) => {
                            return <TypleList data={item} key={index} nav={'favorite'} />;
                        })}
                    </div>
                </div>
            ) : (
                <div className="no-user">
                    <h1>You are not Logged In!,Please Login</h1>
                    <button>Login</button>
                </div>
            )}
        </div>
    );
}

export default Favorite;
