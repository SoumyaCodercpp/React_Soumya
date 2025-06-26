

import { useState } from "react";

let products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const listitems=products.map((item=>{
    <li key={item.id}>{item.title}</li>
}))

return(
<>
<ul>{lstitems}</ul>
</>
);

  products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

// function Mybutton(){
//     const [count,setcount]=useState(0)
//     function hclcik(){
//       setcount(count+1)
//     }

//     return(
//       <>
//       <button onClick={hclcik}>click {count} times</button>
//       </>
//     );

// }

// export default function myapp(){
//   return(
//     <div>
//     <h1>2 independent buttons</h1>
//     <Mybutton/>
//     <Mybutton/>

//   </div>
//   );
// }




function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

function Myapp(){
  const [count,setcount]=useState(0)
  function handleclick(){
    setcount(count+1)
  }
  return(
    <>
    <h1>2 dependent button</h1>
    <MyButton count={count} onClick={handleclick}/>
    <MyButton count={count} onClick={handleclick}/>

    </>
  );

}

// functoin listitems(){
//   return(
//     <>
//     <ul>
//       {Todos.map((todo)=>
//       <li>
//         <div>text</div>
//         <button></button>
//       </li>)}
//     </ul>
    
//     </>
//   )
// }