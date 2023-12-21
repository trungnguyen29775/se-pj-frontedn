import './App.css';
import LeftSideBar from './components/leftSideBar/leftSideBar';
import RightSideBar from './components/rightSideBar/rightSideBar';
import Home from './pages/home/home';

function App() {
    return (
        <div className="App">
            <LeftSideBar />
            <Home />
            <RightSideBar />
        </div>
    );

}

export default App;
