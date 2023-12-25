import './leftSideBar.css';
import { FaHome, FaBoxOpen } from 'react-icons/fa';
import { IoIosHeartHalf } from 'react-icons/io';
import { FaRegFileAlt } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import StateContext from '../../redux/Context';
import { useContext } from 'react';
import { HOME } from '../../constant/constant.redux';
import { navHome, navSetting } from '../../redux/Action';

function LeftSideBar() {
    const [state, dispatchState] = useContext(StateContext);
    const handleLeftSideNav = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const navDir = event.target.closest('.left-side-navigate-icon-container').classList[1];
        switch (navDir) {
            case 'home': {
                dispatchState(navHome(event));
                break;
            }
            case 'setting': {
                dispatchState(navSetting(event));
                break;
            }
            case 'home': {
                console.log('home');
                break;
            }
            case 'setting': {
                console.log('setting');
                break;
            }
            default: {
                console.log('defalut');
                break;
            }
        }
    };

    return (
        <div className="left-side-container">
            <div className="left-side-navigate-container">
                <div className="left-side-navigate-icon-container home active " onClick={(e) => handleLeftSideNav(e)}>
                    <FaHome style={{ margin: 'auto' }} />
                </div>
                <div className="left-side-navigate-icon-container cart" onClick={(e) => handleLeftSideNav(e)}>
                    <FaBoxOpen style={{ margin: 'auto' }} />
                </div>
                <div className="left-side-navigate-icon-container favorite" onClick={(e) => handleLeftSideNav(e)}>
                    <IoIosHeartHalf style={{ margin: 'auto' }} />
                </div>
                <div className="left-side-navigate-icon-container order" onClick={(e) => handleLeftSideNav(e)}>
                    <FaRegFileAlt style={{ margin: 'auto' }} />
                </div>
                <div className="left-side-navigate-icon-container setting" onClick={(e) => handleLeftSideNav(e)}>
                    <IoSettingsOutline style={{ margin: 'auto' }} />
                </div>
            </div>
            <div className="left-side-navigate-icon-container logout" onClick={(e) => handleLeftSideNav(e)}>
                <MdLogout style={{ margin: 'auto' }} />
            </div>
        </div>
    );
}
export default LeftSideBar;
