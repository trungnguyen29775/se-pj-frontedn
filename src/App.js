import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomeLayout from './layout/homeLayout/homeLayout';
import StateContext from './redux/Context';
import { useContext, useEffect } from 'react';
import SignUp from './pages/signUp/signUp';
import SignIn from './pages/signIn/signIn';
import Payment from './pages/payment/payment';

function App() {
    const [state, setState] = useContext(StateContext);
    useEffect(() => {
        console.log(state);
    }, [state]);

    return (
        <Routes>
            <Route path="/" element={state.login ? <HomeLayout /> : <SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/payment" element={<Payment />} />
        </Routes>
    );
}

export default App;
