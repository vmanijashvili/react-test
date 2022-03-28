import './App.css';
import Login from "./pages/login/login";
import {useState} from "react";
import Dashboard from "./pages/dashboard/dashboard";

function App() {


    const [isLogged, setIsLogged] = useState(0);

    const loginSuccess = () => {
        setIsLogged(1);
    }


  return (
    <div className="App">
      <header className="App-header">

          {isLogged == 1 ? <Dashboard /> : <Login onLogin={loginSuccess} /> }




      </header>
    </div>
  );
}

export default App;
