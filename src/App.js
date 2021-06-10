//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {NavBar} from './components/NavBar/navbar';
import ItemListContainer from './components/PageComponents/ItemListContainer.js';
import {Counter} from './components/Counter/ItemCounter.js';
import {ItemCount} from './components/Counter/ItemCounter';

const App = props => {
return <div> 
<NavBar/>

<ItemListContainer/>


</div>}

export default App;
