import './rightSideBar.css';
import { FiShoppingCart } from 'react-icons/fi';
import { FaRegBell } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import StateContext from '../../redux/Context';
import { navPayment, getUserData, plusOrder, minusOrder, cancelOrder } from '../../redux/Action';
import instance from '../../axios/instance';
import Loading from '../loadingScreen/loading';
import Succeed from '../succeed/succeed';

function RightSideBar() {
    const navigate = useNavigate();
    const [state, dispatchState] = useContext(StateContext);
    const [nameFood, setNameFood] = useState('');
    const [typeFood, setTypeFood] = useState('');
    const [priceFood, setPriceFood] = useState('');
    const [countInStockFood, setCountInStockFood] = useState('');
    const [ratingFood, setRatingFood] = useState('');
    const [imagePathFood, setImagePathFood] = useState('');
    const [descriptonFood, setDescriptionFood] = useState('');
    const [addFoodState, setAddFoodState] = useState('');
    const handleLoginClick = (event) => {
        event.stopPropagation();
        navigate('/sign-in');
    };

    const handelNameChange = (event) => {
        setNameFood(event.target.value);
    };

    const handelTypeChange = (event) => {
        setTypeFood(event.target.value);
    };

    const handelPriceChange = (event) => {
        setPriceFood(event.target.value);
    };

    const handelCountInStockChange = (event) => {
        setCountInStockFood(event.target.value);
    };

    const handelRatingChange = (event) => {
        setRatingFood(event.target.value);
    };
    const handelImagePathChange = (event) => {
        setImagePathFood(event.target.value);
    };

    const handelDesciptionChange = (event) => {
        setDescriptionFood(event.target.value);
    };

    const handlePaymentClick = (event) => {
        event.stopPropagation();
        dispatchState(navPayment());
        navigate('/payment');
    };
    const handlePlusProduct = (data) => {
        dispatchState(plusOrder(data));
    };
    const handleCancelProduct = (data) => {
        dispatchState(cancelOrder(data));
    };

    const handleMinusProduct = (data) => {
        dispatchState(minusOrder(data));
    };

    // Use Effect
    useEffect(() => {
        if (addFoodState === 'addFoodNotify') {
            setTimeout(() => {
                setAddFoodState('succeed');
            }, 1000);
        }
    }, [addFoodState]);

    const handleAddProduct = (event) => {
        event.preventDefault();
        setAddFoodState('onAdding');
        instance
            .post('/add-products', {
                name: nameFood,
                type: typeFood,
                price: priceFood,
                countInStock: countInStockFood,
                rating: ratingFood,
                imagePath: imagePathFood,
                description: descriptonFood,
            })
            .then((response) => {
                if (response.status === 200) {
                    setTimeout(() => {
                        setAddFoodState('addFoodNotify');
                        setNameFood('');
                        setTypeFood('');
                        setRatingFood('');
                        setPriceFood('');
                        setImagePathFood('');
                        setCountInStockFood('');
                        setDescriptionFood('');
                    }, 1000);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="right-side-bar-wrapper">
            {addFoodState === 'onAdding' ? <Loading /> : addFoodState === 'addFoodNotify' ? <Succeed /> : ''}
            <div className="right-side-bar-header">
                {state.login ? (
                    <img src="/image/default-avt-image.jpg" />
                ) : (
                    <button onClick={(e) => handleLoginClick(e)} className="right-side-bar-header__button">
                        Login
                    </button>
                )}

                {state.userData.isAdmin == 1 ? (
                    ''
                ) : (
                    <div className="header-icon--center">
                        <FiShoppingCart />
                    </div>
                )}

                <div className="header-icon--center">
                    <FaRegBell />
                    <div className="num-cart--up">
                        <span style={{ margin: 'auto' }}>0</span>
                    </div>
                </div>
            </div>
            {state.userData.isAdmin == 1 ? (
                ''
            ) : (
                <div className="slogan-container">
                    <img src="/image/right-side-bar-image.png" />
                    <span className="slogan">
                        Safe Delivery <span className="hightlight">@</span> your doors
                    </span>
                </div>
            )}

            {state.userData.isAdmin == 1 ? (
                <div className="add-product-form-container">
                    <form className="add-product-form" onSubmit={(e) => handleAddProduct(e)}>
                        <input value={nameFood} onChange={(e) => handelNameChange(e)} placeholder="Name Food" />
                        <input onChange={(e) => handelTypeChange(e)} placeholder="Type Food" value={typeFood} />
                        <input onChange={(e) => handelPriceChange(e)} placeholder="Price Food" value={priceFood} />
                        <input
                            onChange={(e) => handelCountInStockChange(e)}
                            placeholder="Count In Stock"
                            value={countInStockFood}
                        />
                        <input onChange={(e) => handelRatingChange(e)} placeholder="Rating" value={ratingFood} />
                        <input
                            onChange={(e) => handelImagePathChange(e)}
                            placeholder="Image Path"
                            value={imagePathFood}
                        />
                        <textarea
                            value={descriptonFood}
                            onChange={(e) => handelDesciptionChange(e)}
                            placeholder="Describe Food"
                        ></textarea>
                        <div className="admin-add-product-container">
                            <button type="submit" className="admin-add-product">
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="right-side-bar-order-container">
                    <div className="header">
                        <span>Order</span>
                        <span className="view-all">View All</span>
                    </div>
                    <div className="right-side-bar-order-list">
                        {state.orderData?.map((item, index) => {
                            return (
                                <div className="order" key={index}>
                                    <div className="order-img-container">
                                        <img src={item.image_path} />
                                    </div>
                                    <div className="order-detail">
                                        <span className="order-detail-header">{item.name}</span>
                                        <span>Quantity: {item.countInStock}</span>
                                        <div className="edit-order-container">
                                            <button onClick={() => handleMinusProduct(item)}>
                                                <span style={{ margin: 'auto' }}>-</span>
                                            </button>
                                            <span>{item.count}</span>
                                            <button onClick={() => handlePlusProduct(item)}>
                                                <span style={{ margin: 'auto' }}>+</span>
                                            </button>
                                            <button className="danger" onClick={() => handleCancelProduct(item)}>
                                                <FaTrashAlt style={{ margin: 'auto' }} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {Object.keys(state.orderData).toString() && (
                            <button className="right-side-bar-payment__button" onClick={(e) => handlePaymentClick(e)}>
                                PROCEED TO CHECKOUT
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
export default RightSideBar;
