import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LeftSideBar from './components/leftSideBar/leftSideBar';
import RightSideBar from './components/rightSideBar/rightSideBar';
import Home from './pages/home/home';
import Setting from './pages/setting/Setting';
import SignIn from './pages/signIn/Signin';
import SignUp from './pages/signUp/Signup';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
