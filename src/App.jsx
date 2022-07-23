import { useState } from 'react';
import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import  HomePage from "./components/homePage"
import MainPage from "./components/mainPage"

function App() {
  const [isLogin, setIsLogin] = useState(false)

  
  return (
    <div>
      <div>
        
        {isLogin ? (
        <div>
          <MainPage setIsLogin={setIsLogin} toast={toast}/>
          <ToastContainer />
        </div>)
        :
        (<HomePage setIsLogin={setIsLogin} />)}
    
      </div>
    </div>
  );
}

export default App;
