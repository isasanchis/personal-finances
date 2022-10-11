import React, {useContext, useEffect} from 'react';
import "./styles.css";
import { AppContext } from "../../App"
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";  
import axios from 'axios';
import { handleDelete } from '../../service/handleDelete';
import { handleEdit } from '../../service/handleEdit';

const Home: React.FC = () => {
  const {savings, setSavings} = useContext(AppContext);

  useEffect(() => {
    axios.get('http://localhost:3001/savings')
      .then(res => setSavings(res.data))
        .catch(error => console.log(error))
  }, [setSavings]);

  return (
    <>
      {savings.map(saving => (
        <>
        <section key={saving.id} className="single__item--container">
          <span className="single__item--name">{saving.name}</span>
          <span className="single__item--date">{saving.date}</span>
          <span className="single__item--price">${parseFloat(saving.price).toFixed(2)}</span>
          <div className="btn__container">
            <button className="btn__edit" onClick={(e) => handleEdit(saving.id, e)}><BiEdit /></button>
            <button className="btn__delete" onClick={(e) => handleDelete(saving.id, e)}><AiFillDelete /></button>
          </div>
        </section>
        </>
      ))}
    </>
  );
};

export default Home;