import React, { useContext, useEffect } from 'react';
import "./items.css";
import axios from "axios";
import SingleItem from './SingleItem';
import { AppContext } from '../App';

const Content: React.FC = () => {
  const {savings, setSavings} = useContext(AppContext);
  
  useEffect(() => {
    axios.get("http://localhost:3001/savings/")
      .then(res => {
        setSavings(res.data)
      })
  }, [setSavings])

  return (
    <main>
      {savings.map((saving) => (
        <SingleItem key={saving.id} />
      ))}
    </main>
  );
};

export default Content;