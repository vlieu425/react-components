// TODO
const App = function () {
  return (
    <div>
      <h2>My Todo list</h2>
      <Cucumbers/>
      <Kale/>
    </div>
  )

}


const Cucumbers = function () {
  return (
    <div>Cucumbers</div>
  )
}

const Kale = function () {
  return (
    <div>Kale</div>
  )
}



ReactDOM.render(
  <App />,
  document.getElementById(
    'app'
  )
);

