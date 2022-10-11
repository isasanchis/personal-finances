import React, { useState } from 'react'
import axios from "axios";
import "./styles.css";
import { SavingType, Savings } from '../../@types/Savings';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Submit = (e: React.FormEvent<EventTarget>) => void

const CreateSaving = () => {
  const notify = () => toast.success("Created with success!", {pauseOnHover: false, pauseOnFocusLoss: false, progressClassName:"toastProgress"});
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");

  const submitHandler: Submit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const data: Savings = {
      name: name,
      price: price,
      date: date,
      type: type
    };
    JSON.stringify(data);
    axios.post('http://localhost:3001/savings/', data)
      .then(() => {
        setName("")
        setPrice("")
        setDate("")
        notify()
      }).catch(err => console.log(err));
  };

  return (
    <>
      <h1 className="form__title">New saving</h1>
      <ToastContainer />
      <form method="POST" className="form__container" onSubmit={submitHandler}>
        <div className="create__input">
          <label htmlFor="name">Description</label>
          <input 
            required
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="create__input">
          <label htmlFor="price">Price</label>
          <input 
            required
            min="0.00"
            step="0.01"
            type="number" 
            placeholder="0.00"
            value={price}
            onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="create__input">
          <label htmlFor="date">Date</label>
          <input 
            required
            type="date" 
            placeholder="DD-MM-YYYY"
            value={date}
            onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="create__input">
          <label htmlFor="type">Select saving type</label>
          <select required name="type" onChange={(e) => setType(e.target.value)}>
            <option disabled selected value="">- Select type -</option>
            <option value={SavingType.MONTHLY_BILLS}>Bills</option>
            <option value={SavingType.GROCERIES}>Groceries</option>
            <option value={SavingType.FOOD}>Food</option>
            <option value={SavingType.GENERAL_SERVICES}>General Services</option>
            <option value={SavingType.HOME_APPLIANCE}>Home appliance</option>
            <option value={SavingType.GIFTS}>Gifts</option>
            <option value={SavingType.INVESTMENT}>Investments</option>
          </select>
        </div>
        <button type="submit" className="button__submit--form">submit</button>
      </form>
    </>
  )
}

export default CreateSaving