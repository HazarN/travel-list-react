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

  return (
    <>
      <Header />
      <Form onAddItems={handleAddItem} />
      <PackingList items={items} onDeleteItems={handleDeleteItem} />
      <Footer />
    </>
  );
};

export default App;
