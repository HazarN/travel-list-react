const Item = ({ item, onDeleteItems: handleDeleteItem }) => {
  return (
    <li className='item'>
      {item.quantity} {item.description}
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
