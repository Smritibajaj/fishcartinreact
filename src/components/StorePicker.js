import React, {Fragment} from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component{
    
    myInput = React.createRef();
    goToStore= (event) => {
        event.preventDefault();
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    }
    render(){
        return (
            <Fragment>
                
                <form className="store-selector" onSubmit={this.goToStore}>
                {/* this is store selector */}
                   <h2>Please enter a store</h2>    
                   <input type="text" required placeholder="Store Name" ref={this.myInput}  defaultValue={getFunName()} />
                   <button type="submit">Visit Srore</button>
                </form>
            </Fragment>
        ) 
    
    }
}

export default StorePicker;
//in jsx className is used to define a class 
//  React.createElement('p',{ className : 'hey'},'hello') in this methode nesting is difficult 
//now we are writing jsx
//we can't write sibling elements....ex  <p>Fish !</p> before form ....  soluion to this is React.fragment 
//can't write it in next line because of automatic semicolon insertion
//if you return in like this return() it's a function 
//comminting in jsx is not like html 
//we use javascript and to define we use {/* comment */} and we can't add on the top
// import css in componenet in index.js file