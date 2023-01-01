import React,{Component} from "react";


class CondensedProduct extends Component{
    render(){
        return(
            <li className="list-group-item pc-condensed">
                <div className="row">
                    <div className=" col-sm-3">
                        <a className="btn btn-outline-danger">X</a>
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