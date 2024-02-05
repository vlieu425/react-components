// TODO
const { useState } = React;


const App = function () {
  const [groceries, setGroceries] = useState(['Cucumber', 'Kale'])
  // const groceries = ['Cucumber', 'Kale']

  return (
    <div>
      <h2>My Grocery List</h2>
      <ul>
        {/* JSX expects array of elements!! */}
        {groceries.map((item) => {
          return <GroceryListItem eachItem = {item}/>
          })
        }
      </ul>
    </div>
  )
}


const GroceryListItem = function (props) {
  const [isHovered, setIsHovered] = useState(false);

  //event handler?
  const onListItemHover = (event) => {
    setIsHovered(!isHovered);
  }
  //event handler part 2?
  const style = {
    fontWeight: isHovered ? 'bold' : 'normal',
  };

  return (
    <div>
      {/* event listeners directly on jsx element? */}
      <li style={style} onMouseEnter={onListItemHover} onMouseLeave={onListItemHover}>
        {props.eachItem}
      </li>
    </div>
  )
}

//console logs which list item is clicked (playing around with setting event listeners)
// const GroceryListItem = function (props) {
//   const onListItemClick = (event) => {
//     console.log(`You clicked ${event.target.textContent}!`);
//   }
//   return (
//     <div>
//       <li onClick = {onListItemClick}>{props.item}</li>
//     </div>
//   )
// }




// const App = function () {
//   return (
//     <div>
//       <h2>My Todo list</h2>
//       <Cucumbers/>
//       <Kale/>
//     </div>
//   )

// }


// const Cucumbers = function () {
//   return (
//     <div>Cucumbers</div>
//   )
// }

// const Kale = function () {
//   return (
//     <div>Kale</div>
//   )
// }



ReactDOM.render(
  <App />,
  document.getElementById(
    'app'
  )
);

