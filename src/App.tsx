import { useState } from 'react';
import { Header } from './components/Header';
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import LikeComponent from './components/LikeComponent';
import ExpandableText from './components/ExpandableText';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

function App() {
  const items = ['Bettiah', "patna", 'motihari', 'gaya'];
   const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleSelectItem = (index: number) => {
    setSelectedIndex(index)
  }
//items count at navbar || sharing state between component 
  const [cartItems, setCartitems] = useState(['product1','product2'])
  
  return (
    <div>
      <Header/>
      <ListGroup heading='Cities'{...{ selectedIndex, handleSelectItem, items }} />
      <Alert>Hello <span>Passing Children</span></Alert>
      <LikeComponent />
      
      <ExpandableText maxChars={100}>
        Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui voluptatibus dignissimos quod accusantium. Odit quasi suscipit, totam enim itaque ea dolorem, id cupiditate vel natus, magnam aliquid. Ex, consequatur?Zs!
      </ExpandableText>


 {/* items count at navbar || sharing state between component   */}
      <Navbar cartItemsCount={cartItems.length}/> <Cart cartItems={cartItems} onClear={() => setCartitems([])
         } />
    </div>

    
    
  )
}

export default App


