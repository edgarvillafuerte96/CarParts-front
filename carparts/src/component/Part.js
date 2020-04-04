import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {PartConsumer} from '../context';


export default class Part extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.part;
        return (
            <PartWrapper className="col-9 mx-auto cold-md-6 col-lg-3 my-3">
                <div className="card">
                    <div 
                    className="img-container p-5" 
                    onClick={()=> console.log("clicked")}>
                        <Link to="/detail">
                            <img src={img} alt="part" className="card-img-top"/>
                        </Link>
                        <button className="cart-btn" 
                        disable={inCart ? true : false}
                        onClick={() => {console.log('added');
                        }}
                        >
                        {inCart ? (<p className="text-capitalize mb-0" disabled>
                            {" "}
                            in Cart
                            </p>
                            ) : (
                                <i className="fas fa-cart-plus"/>
                                )}
                        </button>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0"></p>
                        {title}
                        <h5 className="h5 text-blue font-weight-bolder mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </PartWrapper>
        );
    }
}

const PartWrapper = styled.div`

`
