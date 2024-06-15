import { useState } from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import PackingList from './components/PackingList';

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = item => setItems(items => [...items, item]);
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
    <>
      <Header />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItems={handleToggleItems}
      />
      <Footer />
    </>
  );
};

export default App;
