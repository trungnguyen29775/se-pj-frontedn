import Header from '../../components/header/header';
import './address.css';

function Address() {
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

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="address-wrapper">
            <div className="add-address-form-container" onClick={(e) => hideAddAddressForm(e)}>
                <form
                    className="add-address-form"
                    onSubmit={(e) => handleSubmit(e)}
                    onClick={(e) => e.stopPropagation()}
                >
                    <span className="address-form__span">ADD ADDRESS</span>
                    <input className="address-form__input" placeholder="Name" />
                    <input className="address-form__input" placeholder="Mobile No." />
                    <input className="address-form__input" placeholder="Pin Code" />
                    <input className="address-form__input" placeholder="Address" />
                    <input className="address-form__input" placeholder="Locality/Town" />
                    <input className="address-form__input" placeholder="State" />
                    <input className="address-form__input" placeholder="City" />
                    <button className="address-form__button" type="submit">
                        ADD ADDRESS
                    </button>
                </form>
            </div>
            <Header />
            <div className="address-content">
                <span className="address-header">Your Address</span>
                <div className="address-list-container">
                    <div className="add-address-container">
                        <span className="address-notify">No Address found! Add one</span>
                        <button className="add-address" onClick={(e) => handleShowAddAddressForm(e)}>
                            Add Address
                        </button>
                    </div>
                    <div className="address-list">
                        <div className="address-item">
                            <span className="address-item__span">Name: Trung</span>
                            <span className="address-item__span">Mobile No.: 0972419560</span>
                            <span className="address-item__span">Pin Code: 200</span>
                            <span className="address-item__span">Address: Di An</span>
                            <span className="address-item__span">Locality/Town: An Binh</span>
                            <span className="address-item__span">State: Binh Duong</span>
                            <span className="address-item__span">City: Binh Duong</span>
                        </div>
                        <div className="address-item">
                            <span className="address-item__span">Name: Trung</span>
                            <span className="address-item__span">Mobile No.: 0972419560</span>
                            <span className="address-item__span">Pin Code: 200</span>
                            <span className="address-item__span">Address: Di An</span>
                            <span className="address-item__span">Locality/Town: An Binh</span>
                            <span className="address-item__span">State: Binh Duong</span>
                            <span className="address-item__span">City: Binh Duong</span>
                        </div>
                        <div className="address-item">
                            <span className="address-item__span">Name: Trung</span>
                            <span className="address-item__span">Mobile No.: 0972419560</span>
                            <span className="address-item__span">Pin Code: 200</span>
                            <span className="address-item__span">Address: Di An</span>
                            <span className="address-item__span">Locality/Town: An Binh</span>
                            <span className="address-item__span">State: Binh Duong</span>
                            <span className="address-item__span">City: Binh Duong</span>
                        </div>
                        <div className="address-item">
                            <span className="address-item__span">Name: Trung</span>
                            <span className="address-item__span">Mobile No.: 0972419560</span>
                            <span className="address-item__span">Pin Code: 200</span>
                            <span className="address-item__span">Address: Di An</span>
                            <span className="address-item__span">Locality/Town: An Binh</span>
                            <span className="address-item__span">State: Binh Duong</span>
                            <span className="address-item__span">City: Binh Duong</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Address;
