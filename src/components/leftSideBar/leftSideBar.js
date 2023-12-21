import './leftSideBar.css';
import { FaHome, FaBoxOpen } from 'react-icons/fa';
import { IoIosHeartHalf } from 'react-icons/io';
import { FaRegFileAlt } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';

function LeftSideBar() {
    return (
        <div className="left-side-container">
            <div className="left-side-navigate-container">
                <div className="left-side-navigate-icon-container active">
                    <FaHome style={{ margin: 'auto' }} />
                </div>
                <div className="left-side-navigate-icon-container">
                    <FaBoxOpen style={{ margin: 'auto' }} />
                </div>
                <div className="left-side-navigate-icon-container">
                    <IoIosHeartHalf style={{ margin: 'auto' }} />
                </div>
                <div className="left-side-navigate-icon-container">
                    <FaRegFileAlt style={{ margin: 'auto' }} />
                </div>
                <div className="left-side-navigate-icon-container">
                    <IoSettingsOutline style={{ margin: 'auto' }} />
                </div>
            </div>
            <div className="left-side-navigate-icon-container">
                <MdLogout style={{ margin: 'auto' }} />
            </div>
        </div>
    );
}
export default LeftSideBar;
