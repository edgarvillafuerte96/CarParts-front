import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {PartConsumer} from '../context';


export default class Part extends Component {
    render() {
        const {number, description, price, weight, pictureURL, inCart } = this.props.part;
        return (
            <PartWrapper className="col-9 mx-auto cold-md-6 col-lg-3 my-3">
                <div className="card">
                    <div 
                    className="img-container p-5" 
                    onClick={()=> console.log("clicked")}>
                        <Link to="/detail">
                            <img src={pictureURL} alt="part" className="card-img-top"/>
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
                        {description}
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

/**
 * checks the varible type from the db
 * to ensure it is the correct datatype
 */
Part.propTypes = {
    part: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};

const PartWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 1s linear; 
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2 px 5 px 0 px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgba(247, 247, 247);
    }
}
.img-container{
    position: relative;
    overflow: hidden;
}
.card-img-top{
    transition: all .5s linear;
}
.cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
}
`;
