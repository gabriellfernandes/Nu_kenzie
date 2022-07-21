import { useState } from 'react';
import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import  HomePage from "./components/homePage"

function App() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <div className="App">
      <div>
        
        {isLogin ? (
        <div>
          <ToastContainer />
          <h1>Entrou!</h1>
        </div>)
        :
        (<HomePage setIsLogin={setIsLogin} />)}
    
      </div>
    </div>
  );
}

export default App;
