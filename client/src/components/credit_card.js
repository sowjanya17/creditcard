import React, { useEffect, useState } from 'react';
import AddCreditCard from './add-credit-card';
import ViewCreditCards from './view-credit-card';
import axios from 'axios';


export default function CreditCards() {
  const [existingCardData, setExistingCardData] = useState([]);
  const url = "http://localhost:3001/api/";

  const saveCardDetails = (data) => {
    axios.post(`${url}save`,data)
    .then(res=>{
      getCreditCardDetails();
    })
  }

  const getCreditCardDetails = () => {
    axios.get(`${url}creditDetails`)
      .then(res => {
        setExistingCardData(res?.data);
      })
  }

  useEffect(() => {
    getCreditCardDetails();
  }, [])

  return (
    <div>
      <AddCreditCard saveCardDetails={saveCardDetails}></AddCreditCard>
      <ViewCreditCards cardData={existingCardData}></ViewCreditCards>
    </div>
  );
}