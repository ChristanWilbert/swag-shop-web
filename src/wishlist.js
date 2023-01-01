import React,{Component} from 'react';
import CondensedProduct from './condensed-product';
import './wishlist.css';

class WishList extends Component{

    constructor(props){

        super(props);
        this.state={wishList:[
            {"title":"apple",
            "price":989},
            {"title":"apple",
            "price":989},
            {"title":"apple",
            "price":989}
        ]
        }
        this.createWishList=this.createWishList.bind(this);

    }

    createWishList=()=>{
        const list= this.state.wishList.map((product)=>
            <CondensedProduct product={product} key={product._id}/>)
        return (list);
    }
    render(){
        
        return(
            <div className='card'>
                <div className='card-block'>
                    <h4 className='card-title'>Wish List</h4>
                    <ul className='list-goup'>
                        {this.createWishList()}
                    </ul>

                </div>
            </div>
        );
    }
}
export default WishList;