import React,{Component} from "react";
import DataService from "./services/data_service";
var ds = new DataService();

class CondensedProduct extends Component{
    constructor(props){
        super(props);
        this.removeProduct = this.removeProduct.bind(this);

    }

    removeProduct = () =>{
        ds.removeWishListItem(this.props.product);
    }
    render(){
        return(
            <li className="list-group-item pc-condensed">
                <div className="row">
                    <div className=" col-sm-3">
                        <a className="btn btn-outline-danger" onClick={()=>this.removeProduct()}>X</a>
                    </div>
                <p className="col-sm-9">
                    {this.props.product.title}  | <b> {this.props.product.price}</b>
                </p>
                </div>
            </li>
            
        );
    }
}
export default CondensedProduct;