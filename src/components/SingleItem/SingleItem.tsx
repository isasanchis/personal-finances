import React, {useContext} from 'react';
import "./styles.css";
import { AppContext } from '../../App';
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { CgSmartHomeRefrigerator } from "react-icons/cg";

const SingleItem: React.FC = () => {
  const {savings} = useContext(AppContext);

  return (
    <>
      {savings.map(saving => (
        <section key={saving.id} className="single__item--container">
          <span className="single__item--type">{saving.type}</span>
          <span className="single__item--name">{saving.name}</span>
          <span className="single__item--date">{saving.date}</span>
          <span className="single__item--price">${saving.price}</span>
          <div className="btn__container">
            <button className="btn__edit"><BiEdit /></button>
            <button className="btn__delete"><AiFillDelete /></button>
          </div>
        </section>
      ))}
    </>
  )
}

export default SingleItem;