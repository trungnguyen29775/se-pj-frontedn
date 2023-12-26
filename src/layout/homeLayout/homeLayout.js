import './homeLayout.css';
import LeftSideBar from '../../components/leftSideBar/leftSideBar';
import RightSideBar from '../../components/rightSideBar/rightSideBar';
import Home from '../../pages/home/home';
import { useContext, useState } from 'react';
import Setting from '../../pages/setting/Setting';
import StateContext from '../../redux/Context';
import Order from '../../pages/order/order';

function HomeLayout() {
    const [state, setState] = useContext(StateContext);
    console.log(state);
    return (
        <div className="home-layout-wrapper">
            <LeftSideBar />
            {state.element === 'HOME' ? (
                <Home />
            ) : state.element === 'SETTING' ? (
                <Setting />
            ) : state.element === 'ORDER' ? (
                <Order />
            ) : (
                ''
            )}
            <RightSideBar />
        </div>
    );
}
export default HomeLayout;
