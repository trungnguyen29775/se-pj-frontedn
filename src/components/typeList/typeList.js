import './typeList.css';
import { FaStar } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { useContext, useEffect, useState } from 'react';
import instance from '../../axios/instance';
import StateContext from '../../redux/Context';

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

    return (
        <div className="type-list-element">
            {state.login ? (
                state.userData.isAdmin == '1' ? (
                    <div className="delete-product-button" onClick={(e) => handleDeleteProduct(e)}>
                        <span style={{ margin: 'auto' }}>X</span>
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
