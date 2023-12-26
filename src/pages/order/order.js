import { useContext } from 'react';
import './order.css';
import StateContext from '../../redux/Context';
import Header from '../../components/header/header';

function Order() {
    const [state, dispatchState] = useContext(StateContext);

    return (
        <div className="order-wrapper">
            <Header />
            <div className="order-page-header">
                <span>My Orders</span>
            </div>
            <div className="order-page-content">
                <span>No Past Order</span>
            </div>
        </div>
    );
}

export default Order;
