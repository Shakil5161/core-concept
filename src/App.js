import logo from './logo.svg';
import './App.css';
import { Component, useEffect, useState } from 'react';

function App() {
  var names = ['fariha', 'jannat', 'shakil'];
  var products = [
    { name: 'photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$99.20' },
    { name: 'Adobe King', price: '$199.20' },
    { name: 'Adobe Best', price: '$80.60' },
    { name: 'PDF Reader', price: '$20' },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <State></State>
        <Users></Users>
        <ul>
          <h2>my friend</h2>
          {
            names.map(name => <li>{name}</li>)
          }
        </ul>
        {
          products.map(product => <Product item={product}></Product>)
        }
        {/* <Product item={products[0]}></Product>
        <Product item={products[1]}></Product> */}
        <Information name='shakil ahmed' age='24' job='Frontend Engineer'></Information>
        <Information name='jannat' age='20' job='Hose Wife'></Information>
        <Information name={names[0]} age='20'></Information>
      </header>
    </div>
  );
};
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    );

  return (
    <div>
      <h3>Data Call From API:{users.length} </h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function State() {
  const [count, setCount] = useState(10);
  const increase = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={increase}>Increase</button>
    </div>
  )
}
function Information(props) {
  var divCss = {
    border: '1px solid gold',
    width: '400px',
    padding: "5px",
    margin: '5px'
  };

  return (
    <div style={divCss}>
      <h2>Name: {props.name} </h2>
      <p>Age: {props.age} </p>
      <p>Job: {props.job} </p>
    </div>
  );
};

function Product(props) {
  var styleCss = {
    height: '200px',
    width: '180px',
    border: '1px solid gray',
    backgroundColor: 'lightgray',
    borderRadius: '5px',
    margin: '5px',
  }
  console.log(props);
  return (
    <div style={styleCss}>
      <h2>{props.item.name}</h2>
      <h5>{props.item.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
