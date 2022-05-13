import React, { useState } from 'react'
import axios from "axios";
import "./styles.css";
import { SavingType, Savings } from '../../@types/Savings';

type Submit = () => void

const CreateSaving = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState({} as SavingType);

  const submitHandler: Submit = async () => {
    const data: Savings = {
      name: name,
      price: price,
      date: date,
      type: type
    };
    JSON.stringify(data);
    await axios.post(`http://localhost:3001/savings/`, data)
      .then(res => console.log(res))
        .catch(err => console.log(err))
  };

  return (
    <>
      <form action="POST" className="form__container" id="createSaving" onSubmit={submitHandler}>
        <h1>Create saving</h1>
        <div>
          <label htmlFor="name">Description</label>
          <input 
            type="text" 
            value={name}   
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input 
            type="number" 
            placeholder="0.00"
            value={price}
            onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input 
            type="text" 
            placeholder="DD-MM-YYYY"
            value={date}
            onChange={(e) => setDate(e.target.value)} />
        </div>
        <select name="type" onChange={(e) => setType(e.target.value)}>
          <option disabled selected>- Select type -</option>
          <option value={SavingType.MONTHLY_BILLS}>Bills</option>
          <option value="groceries">Groceries</option>
          <option value="food">Food</option>
          <option value="">General Services</option>
          <option value="">Home appliance</option>
          <option value="">Gifts</option>
          <option value="">Investments</option>
        </select>
        <button type="submit">submit</button>
      </form>
    </>
  )
}

export default CreateSaving