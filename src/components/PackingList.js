import Item from './Item';

const PackingList = ({ items, onDeleteItems, onToggleItems }) => {
  return (
    <div className='list'>
      <ul>
        {items.map(item => (
          <Item
            key={item.id}
            item={item}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
