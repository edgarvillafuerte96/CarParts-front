import React, { Component } from 'react';
import {storeParts, detailProduct} from './data';


const PartContext = React.createContext();

class PartProvider extends Component {
    state = {
     parts: storeParts,
     detailProduct
    };

    handleDetail = () => {
        console.log('hello from detail');
    };
    addToCart = () => {
        console.log('hello from cart');
    };

    render() {
        return (
            <PartContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
            }}>
                {this.props.children}
            </PartContext.Provider>
        );
    }
}



const PartConsumer = PartContext.Consumer;

export {PartProvider, PartConsumer};