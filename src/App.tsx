import { useState, createContext } from 'react';
import './App.css';
import { Savings } from "./@types/Savings";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import RoutesConfig from './service/RoutesConfig';
import { BrowserRouter as Router } from "react-router-dom";

type Context = {
  savings: Savings[],
  setSavings: React.Dispatch<React.SetStateAction<Savings[]>>
}

export const AppContext = createContext<Context>({} as Context);

const App: React.FC = () => {
  const [savings, setSavings] = useState<Savings[]>([]);

  return (
    <div className="App">
      <AppContext.Provider value={{ savings, setSavings }}>
        <Router>
          <Header />
          <Nav />
          <RoutesConfig />
        </Router>
      </AppContext.Provider>
    </div>
  );
};

export default App;
