const Item = props => {
  const {
    item,
    onDeleteItems: handleDeleteItem,
    onToggleItems: handleToggleItems,
  } = props;

  return (
    <li className='item'>
      <input
        type='checkbox'
        value={item.packed}
        onChange={() => handleToggleItems(item.id)}
      />

      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>

      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
