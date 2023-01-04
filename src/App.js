import logo from './logo.svg';
import './App.css';
import HttpService from './services/http-service';
import { Component } from 'react';
import Product from './product';
import WishList from './wishlist';


const http = new HttpService();

class App extends Component {
  constructor(props){
    super(props);

    this.state = {products:[]}

    this.loadData=this.loadData.bind(this);
    this.loadData();
    this.productList=this.productList.bind(this);
  }
  productList=()=>{
    const list =this.state.products.map((product)=>
      <div className='col-sm-2' key={product._id}>
        <Product className="col-sm-4" product={product}/>
      </div>
    );
    return (list);
  }

  loadData=()=>{
    var self = this;
    http.getProducts().then((data)=>{
      self.setState({products:data})},err=>{console.log(err)});
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
      </header>
      <div className="App-main container">
        <div className='row'>
          {this.productList()}
          <div className="col-sm-5"><WishList/></div>
         </div>
      </div>
    </div>
  );
}
}

export default App;
