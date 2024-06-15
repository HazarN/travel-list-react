import Item from './Item';

const PackingList = ({ items, onDeleteItems }) => {
  return (
    <div className='list'>
      <ul>
        {items.map(item => (
          <Item key={item.id} item={item} onDeleteItems={onDeleteItems} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
