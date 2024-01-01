import './typeList.css';
import { FaStar } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { useContext, useEffect, useState } from 'react';
import instance from '../../axios/instance';
import StateContext from '../../redux/Context';
import { FaRegHeart } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa';
import { FAVORITE, HOME } from '../../constant/constant.redux';
import { addFavorite, navFavorite, navHome, removeFavorite } from '../../redux/Action';

function TypleList(props) {
    const [data, setData] = useState({});
    const [state, dispatchState] = useContext(StateContext);
    useEffect(() => {
        setData(props.data);
    }, [props]);

    const handleDeleteProduct = (e) => {
        e.stopPropagation();
        instance
            .post('/delete-product', { productId: data.product_id })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleAddFavorite = (e) => {
        e.stopPropagation();
        instance
            .post('/add-favorite', {
                userId: state.userData.userId,
                productId: data.product_id,
            })
            .then((response) => {
                if (response.status === 200) dispatchState(addFavorite(data));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDeleteFavorite = (e) => {
        e.stopPropagation();
        instance
            .post('/delete-favorite', {
                userId: state.userData.userId,
                productId: data.product_id,
            })
            .then((response) => {
                if (response.status === 200) dispatchState(removeFavorite(data));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="type-list-element">
            {state.login ? (
                state.userData.isAdmin == '1' ? (
                    <div className="delete-product-button" onClick={(e) => handleDeleteProduct(e)}>
                        <span style={{ margin: 'auto' }}>X</span>
                    </div>
                ) : state.element === HOME ? (
                    <div className="favorite-product-button" onClick={(e) => handleAddFavorite(e)}>
                        <FaRegHeart style={{ margin: 'auto' }} />
                    </div>
                ) : state.element === FAVORITE ? (
                    <div className="favorite-product-button" onClick={(e) => handleDeleteFavorite(e)}>
                        <FaHeart style={{ margin: 'auto' }} />
                    </div>
                ) : (
                    ''
                )
            ) : (
                ''
            )}

            <img className="type-list-element__img" src={data.image_path} />
            <span className="name-food">{data.name}</span>
            <div className="star-container">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <div className="number-left">
                <span>
                    <span className="highlight">Rs. </span>
                    {data.countInStock}
                </span>

                <div className="add-food">
                    <AiOutlinePlus style={{ margin: 'auto' }} />
                </div>
            </div>
        </div>
    );
}

export default TypleList;
