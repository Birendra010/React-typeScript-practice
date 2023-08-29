



// function ListGroup() {
// const [marks, setMarks] = useState(80)
//   return (
//     <>
//       <h1>My marks is {marks} </h1>
//       <button onClick={() => {
//         setMarks(33)
//       }}>update</button>
//       </>
//   )
// }

// export default ListGroup







//managing state
// import React from 'react'

interface Props {
  items: string[],
  heading: string;
  selectedIndex: number;
  handleSelectItem:(val : number)=> void
}

const ListGroup = ({items,handleSelectItem , selectedIndex , heading }:Props) => {
  
  // items = []; //checking condition 
 
  return (
    <>
      <h1>{ heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) =>
          <li className={selectedIndex === index ? "list-group-item active " : "list-group-item"}
            key={index} onClick={() => {
            handleSelectItem(index)
            }}>
            {item}
          
          </li>
        )
      }
      </ul>
    
    
    </>
  )
}
export default ListGroup