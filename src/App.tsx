import { useState, createContext } from 'react';
import './App.css';
import { Savings } from "./@types/Savings";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

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
        <Header />
        <Nav />
        <Content />
        <Footer />
      </AppContext.Provider>
    </div>
  );
};

export default App;
