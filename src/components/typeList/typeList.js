import './typeList.css';
import { FaStar } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';

function TypleList(type, data,key) {
    return (
        <div className="type-list-element" key={key}>
            <img className="type-list-element__img" src="/image/pizza/pizza1.jpg" />
            <span className="name-food">Margarita Pizza</span>
            <div className="star-container">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <div className="number-left">
                <span>
                    <span className="highlight">Rs.</span>18
                </span>

                <div className="add-food">
                    <AiOutlinePlus style={{ margin: 'auto' }} />
                </div>
            </div>
        </div>

    );
}

export default TypleList;
