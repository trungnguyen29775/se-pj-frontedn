import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../axios/instance';
import { RiAddFill } from 'react-icons/ri';
import './payment.css';
import StateContext from '../../redux/Context';
import { getUserData } from '../../redux/Action';
import Loading from '../../components/loadingScreen/loading';
import Succeed from '../../components/succeed/succeed';

export default function Payment() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(0);
    const [state, dispatchState] = useContext(StateContext);
    const [addressState, setAddressState] = useState('');
    const [name, setName] = useState('');
    const [mobNum, setMobNum] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [address, setAddress] = useState('');
    const [town, setTown] = useState('');
    const [stateAddress, setStateAddress] = useState();
    const [city, setCity] = useState('');
    const [addressData, setAddressData] = useState([]);
    // Use Effect
    useEffect(() => {
        if (addressState === 'showNotify') {
            setTimeout(() => {
                setAddressState('succeed');
                const formContainer = document.querySelector('.add-address-form-container');
                formContainer.classList.add('hide');
            }, 1200);
        }
    }, [addressState]);

    useEffect(() =>
        //---------------------Call API get user address----------
        {
            if (!state.login) navigate('/');
            instance
                .post('/view-address', {
                    userId: state.userData.userId,
                })
                .then((response) => {
                    setAddressData(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }, []);

    // Function
    const handleSubmit = (event) => {
        event.preventDefault();
        setAddressState('onAdding');
        instance
            .post('/add-address', {
                name: name,
                pinCode: pinCode,
                address: address,
                town: town,
                state: stateAddress,
                city: city,
                userId: state.userData.userId,
            })
            .then((res) => {
                if (res.status === 200) {
                    console.log('hello');
                    setTimeout(() => {
                        setAddressState('showNotify');
                    }, 1000);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const deleteAddress = (event) => {
        const addressId = event.target.classList[1];
        instance
            .post('/delete-address', {
                addressId: addressId,
                userId: state.userData.userId,
            })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handlePayment = () => {};

    const handleSelectAddress = (address, i) => {
        setSelected(i);
    };
    const hideAddAddressForm = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const formContainer = event.target.closest('.add-address-form-container');
        console.log(formContainer.classList);
        formContainer.classList.add('hide');
    };
    const handleShowAddAddressForm = (event) => {
        const formContainer = document.querySelector('.add-address-form-container');
        formContainer.classList.remove('hide');
    };

    //test address
    const address1 = [
        {
            name: 'Thanh',
            address: '281 duong 9',
            town: '5',
            city: 'Ho Chi Minh',
            state: 'state',
            pincode: 'pincode',
            mobNo: '0903821515',
        },
        {
            name: 'Thanh',
            address: '281 duong 9',
            town: '5',
            city: 'Ho Chi Minh',
            state: 'state',
            pincode: 'pincode',
            mobNo: '0903821515',
        },
    ];
    return (
        <>
            <div className="add-address-form-container hide" onClick={(e) => hideAddAddressForm(e)}>
                {addressState === 'onAdding' ? <Loading /> : addressState === 'showNotify' ? <Succeed /> : ''}

                <form
                    className="add-address-form"
                    onSubmit={(e) => handleSubmit(e)}
                    onClick={(e) => e.stopPropagation()}
                >
                    <span className="address-form__span">ADD ADDRESS</span>
                    <input
                        className="address-form__input"
                        placeholder="Name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="address-form__input"
                        placeholder="Mobile No."
                        name="mobNum"
                        type="text"
                        value={mobNum}
                        onChange={(e) => setMobNum(e.target.value)}
                    />
                    <input
                        className="address-form__input"
                        placeholder="Pin Code"
                        name="pinCode"
                        type="text"
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                    />
                    <input
                        className="address-form__input"
                        placeholder="Address"
                        name="address"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <input
                        className="address-form__input"
                        placeholder="Town/Locality"
                        name="town"
                        type="text"
                        value={town}
                        onChange={(e) => setTown(e.target.value)}
                    />
                    <input
                        className="address-form__input"
                        placeholder="State"
                        name="stateAddress"
                        type="text"
                        value={stateAddress}
                        onChange={(e) => setStateAddress(e.target.value)}
                    />
                    <input
                        className="address-form__input"
                        placeholder="City"
                        name="city"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button className="address-form__button" type="submit">
                        ADD ADDRESS
                    </button>
                </form>
            </div>
            <div className="payment">
                <div className="shipping-details">
                    <div className="address-container">
                        <h3>Select Delivery Address</h3>
                        <div className="add-sec-area">
                            {addressData ? (
                                addressData.map((address, i) => (
                                    <div
                                        onClick={() => handleSelectAddress(address, i)}
                                        className={`og-add ${selected === i && 'selected'}`}
                                        key={address.address_id}
                                    >
                                        <p>{address.name}</p>
                                        <span>
                                            <b>Address :</b>
                                            {address.address},<b>Town :</b>
                                            {address.town}
                                        </span>
                                        <span>
                                            <b>City :</b>
                                            {address.city},<b>State :</b>
                                            {address.state} -<b>Pin code :</b>
                                            {address.pinCode}{' '}
                                        </span>
                                        <span>
                                            <b>Mobile No:</b>
                                            {address.mobNo}
                                        </span>
                                        <div className="btns">
                                            <button
                                                className={`btn ${address.address_id}`}
                                                onClick={(e) => deleteAddress(e)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <h3 style={{ padding: '20px 0' }}>No Address found! Add one</h3>
                            )}

                            <div className="add-address" onClick={handleShowAddAddressForm}>
                                <div className="add">
                                    <RiAddFill />
                                    <p>Add Address</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="checkout-area">
                        <div className="billing">
                            <h4>PRICE DETAILS</h4>
                            <div className="details">
                                <div className="item">
                                    <p>Price</p>
                                    <p>
                                        cartPice<span>VND</span>
                                    </p>
                                </div>

                                <div className="item">
                                    <p>Delivery Charges</p>
                                    <p>
                                        deleviryPrice<span>VND</span>
                                    </p>
                                </div>
                            </div>
                            <div className="total">
                                <h3>Total</h3>
                                <h3>
                                    totalPrice<span>VND</span>
                                </h3>
                            </div>
                        </div>
                        <div className="payment-type">
                            <h3>Select Payment type</h3>
                            <div className="payments-opts">
                                <div className="payment-method">
                                    <div className="select-opt">
                                        <input type="radio" name="payment" id="cod" value="COD" />
                                        <label htmlFor="cod">CASH ON DELIVERY</label>
                                    </div>
                                    <div className="select-opt">
                                        <input type="radio" name="payment" id="paypal" value="paypal" />
                                        <label htmlFor="paypal">ZALOPAY</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={handlePayment}>PAYMENT</button>
                    </div>
                </div>
            </div>
        </>
    );
}
