

///cartItemsCount || sharing state between component 

interface Props{
    cartItemsCount: number;
}

const Navbar = ({ cartItemsCount }: Props) => {
    
  return (
      <div>Navebar:{cartItemsCount}</div>
  )
}

export default Navbar