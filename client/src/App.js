import './App.css';
import Home from './components/home/Home';
import {Route} from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import ProductDetails from './components/productDetails/ProductDetails';
import AdminProducts from './components/adminProducts/AdminProducts';

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/product/details/:id" render={({match}) => <ProductDetails id={match.params.id}/> }/>
      <Route exact path="/product/admin" component={AdminProducts}/>
    </div>
  );
}

export default App;
