import React, { useReducer, useState } from 'react';

const initialData = {
  username: '',
  cardnumber: '',
  balance:0,
  limit: ''
};

function reducer(state, { feild, value }) {
  return {
    ...state,
    [feild]: value
  }
}

export default function AddCreditCard(props) {
  const [state, dispatch] = useReducer(reducer, initialData)
  const { username, cardnumber, limit } = state;
  const saveCreditCardInfo = () => {
    props.saveCardDetails(state);
  }

  const handleFormData = (e) => {
    dispatch({ feild: e.target.name, value: e.target.value });
  }

  return (
    <div class="w-full lg:max-w-xs sm:max-w-md xs:max-w-0">
      <h1 class="text-3xl font-bold mt-3 mb-2">Credit Card System</h1>
      <form  class="bg-white  px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="name">
            Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" value={username} type="text" placeholder="Name" onChange={handleFormData} />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="card number">
            Card Number
          </label>
          <input type="number" size='15' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="cardnumber" value={cardnumber} placeholder="Card Number" onChange={handleFormData} />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="limit">
            Limit
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="limit" value={limit} type="number" placeholder="Limit" onChange={handleFormData} />
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={saveCreditCardInfo}>
            Add
          </button>
        </div>
      </form>
    </div>
  )
}