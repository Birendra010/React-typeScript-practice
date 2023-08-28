import { useState } from 'react';
import { Header } from './components/Header';
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';

function App() {
  const items = ['Bettiah', "patna", 'motihari', 'gaya'];
   const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleSelectItem = (index: number) => {

    setSelectedIndex(index)
  }
  
  return (
    <div>
      <Header/>
      <ListGroup heading='Cities'{...{ selectedIndex, handleSelectItem, items }} />
      <Alert>Hello <span>Passing Children</span></Alert>
    </div>

  )
}

export default App