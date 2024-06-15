import { useState } from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import PackingList from './components/PackingList';

const capitalize = str => {
  return str.toLowerCase().replace(str[0], str[0].toUpperCase());
};

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = item => {
    item.description = capitalize(item.description);

    setItems(items => [...items, item]);
  };
  const handleDeleteItem = id => {
    setItems(items => items.filter(item => item.id !== id));
  };

  const handleToggleItems = id => {
    setItems(items =>
      items.map(item =>
        item.id === id
          ? {
              ...item,
              packed: !item.packed,
            }
          : item
      )
    );
  };

  return (
    <div className='app'>
      <Header />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItems={handleToggleItems}
      />
      <Footer items={items} />
    </div>
  );
};

export default App;
