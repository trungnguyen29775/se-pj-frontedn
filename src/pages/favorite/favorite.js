import { useContext, useEffect, useState } from 'react';
import Header from '../../components/header/header';
import './favorite.css';
import instance from '../../axios/instance';
import StateContext from '../../redux/Context';
import TypleList from '../../components/typeList/typeList';

function Favorite() {
    const [favoriteData, setFavoriteData] = useState([]);
    const [state, dispatchState] = useContext(StateContext);

    useEffect(() => {
        instance
            .post('/view-favorite', { userId: state.userData.userId })
            .then((response) => {
                if (response.status === 200) setFavoriteData(response.data);
            })
            .catch((err) => {});
    }, []);

    useEffect(() => {
        console.log(favoriteData);
    }, [favoriteData]);

    return (
        <div className="favorite-wrapper">
            <Header />
            <div className="favorite-content-container">
                <span className="favorite-content-header">My Favorite</span>
                <div className="type-list-container">
                    {favoriteData.map((item, index) => {
                        return <TypleList data={item} key={index} nav={'favorite'} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Favorite;
