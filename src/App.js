import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import './App.css';
import SignIn from './pages/signIn/signIn';
import HomeLayout from './layout/homeLayout/homeLayout';
import StateContext from './redux/Context';
import { useContext, useEffect } from 'react';
import SignUp from './pages/signUp/signUp';

function App() {
    const [state, setState] = useContext(StateContext);
    useEffect(() => {
        console.log(state);
    }, [state]);
    return (
        <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    );
}

export default App;
