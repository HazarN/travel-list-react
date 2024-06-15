import React, { useState } from 'react';

const Form = ({ onAddItems: handleAddItem }) => {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const resetFormInputs = () => {
    setDescription('');
    setQuantity(1);
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    handleAddItem(newItem);

    resetFormInputs();
  };

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={e => {
          setQuantity(q => (q = Number(e.target.value)));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={description}
        onChange={e => {
          setDescription(desc => (desc = e.target.value));
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
