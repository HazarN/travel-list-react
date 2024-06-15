const Item = ({ item }) => {
  return (
    <li className='item'>
      {item.quantity} {item.description}
      <button>❌</button>
    </li>
  );
};

export default Item;
