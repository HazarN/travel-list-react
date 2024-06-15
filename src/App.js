import { useState } from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import PackingList from './components/PackingList';

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = item => setItems(items => [...items, item]);

  return (
    <>
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Footer />
    </>
  );
};

export default App;
