import './App.css';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import Setting from './pages/setting/Setting';
function App() {
  // const user = 1;
  // const name = "Thanh";
  // const phoneNum='0903710062'
  // const email = 'huythanh1324@gmail.com'
  return (
    <div className="App">
      <Signin />
      <Signup />
      <Setting />
      {/* <Setting user={user} name={name} phoneNum={phoneNum} email={email}/> */}
    </div>
  );
}

export default App;
