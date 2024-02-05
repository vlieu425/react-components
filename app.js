// TODO


const App = function () {
  // const [groceries, setGroceries] = useState(['Cucumber', 'Kale'])
  const groceries = ['Cucumber', 'Kale']

  return (
    <div>
      <h2>My Grocery List</h2>
      <ul>
        {/* JSX expects array of elements!! */}
        {groceries.map((item) => {
          return <GroceryListItem item = {item}/>
          })
        }

      </ul>
    </div>
  )
}


const GroceryListItem = function (props) {
  const onListItemClick = (event) => {
    console.log(`You clicked ${event.target.textContent}!`);
  }
  return (
    <div>
      <li onClick = {onListItemClick}>{props.item}</li>
    </div>
  )
}




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

